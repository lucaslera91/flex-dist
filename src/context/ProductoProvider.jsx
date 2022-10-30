import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { getDocs, collection, doc, limit } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/firebase";

const ProductContext = createContext();

export const ProductConsumer = () => useContext(ProductContext);

const ProductoProvider = ({ children }) => {
  const [listas, setListas] = useState([]);
  const [productos, setProductos] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);

  // obtenemos las listas de productos ordenadas por fechas (la más nueva es index 0)
  const getListas = async () => {
    const collRef = collection(db, "listasProductos");
    console.log(collRef);
    let listasTempOrdenadas;
    let listasTemp;
    await getDocs(collRef)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          listasTemp = querySnapshot.docs.map((docSnapshot) => {
            return {
              id: docSnapshot.id,
              docRef: docSnapshot.ref,
              ...docSnapshot.data(),
            };
          });
          listasTempOrdenadas = listasTemp.sort((a, b) => {
            return (
              new Date(b.creationTime).getTime() -
              new Date(a.creationTime).getTime()
            );
          });
          setListas(listasTempOrdenadas);
        } else {
          listasTempOrdenadas = [];
          setListas(listasTempOrdenadas);
        }
      })
      .catch((error) => console.log(`Hubo un error en getListas => ${error}`));
    return listasTempOrdenadas;
  };

  // obtenemos los productos de la lista más nueva
  const getProductos = async (page = 5) => {
    // getLists
    const listasOrdenadas = await getListas();
    //console.log(`listasOrdenadas => `, listasOrdenadas);
    // getImgsUrl
    const imgUrls = await getImgsUrl();
    //console.log("imgUrls => ", imgUrls);
    // getProductos de la lista más actual
    const subCollRef = collection(listasOrdenadas[0].docRef, "productos");
    //console.log(subCollRef)
    getDocs(subCollRef)
      .then((querySnapshot) => {
        //console.log(querySnapshot.data())
        console.log(page);
        if (!querySnapshot.empty) {
          const newList = querySnapshot.docs.slice(0,page);
          const productosTemp = newList.map((docSnapshot) => {
            const docData = docSnapshot.data();
            const codigo = docData.CODIGO.replaceAll("-", "");
            const imgUrl = imgUrls.find((obj) => obj.imgName === codigo)
              ? imgUrls.find((obj) => obj.imgName === codigo).url
              : "";

            return { docId: docSnapshot.id, imgUrl, ...docData };
          });
          setProductos(productosTemp);
          //console.log(`productosTemp => `, productosTemp);
        } else {
          setProductos([]);
        }
      })
      .catch((error) =>
        console.log(`Hubo un error en getProductos => `, error)
      );
  };

  // obtenemos las url de las fotos

  const getImgsUrl = async () => {
    const telasRef = ref(storage, "/TELAS");
    const sistemasRef = ref(storage, "/SISTEMAS FOTOS");
    let allRefs = [];

    await listAll(telasRef)
      .then((res) => allRefs.push(...res.items))
      .catch((error) =>
        console.log(
          `Hubo un error obteniendo las ulr de las Telas: ${error.message}`
        )
      );

    await listAll(sistemasRef)
      .then((res) => allRefs.push(...res.items))
      .catch((error) =>
        console.log(
          `Hubo un error obteniendo las ulr de los Sistemas: ${error.message}`
        )
      );

    const imgUrlsTemp = await Promise.all(
      allRefs.map(async (ref) => {
        let url;
        await getDownloadURL(ref)
          .then((imgUrl) => (url = imgUrl))
          .catch((error) => console.log(`error obtniendo imgUrl => `, error));
        let imgName = ref.name.slice(0, -4);
        let obj = { imgName, url, ref };
        return obj;
      })
    );

    return imgUrlsTemp;
  };

  // const getImgsUrl = async () => {
  //     const telasRef = ref(storage, '/TELAS')
  //     const sistemasRef = ref(storage, '/SISTEMAS FOTOS')
  //     let imgUrlsTemp = []

  //     await listAll(telasRef)
  //     .then(refs => {
  //         imgUrlsTemp.push(...res.items)})
  //     .catch(error => {console.log(`Hubo un error obteniendo las ulr de las Telas: ${error.message}`)})

  //     await listAll(sistemasRef)
  //     .then(res => imgUrlsTemp.push(...res.items))
  //     .catch(error => console.log(`Hubo un error obteniendo las ulr de los Sistemas: ${error.message}`))

  //     setImgUrls(imgUrlsTemp)

  //     return imgUrlsTemp
  // }

  //     const getImgsUrl = async (categoria, nombre) => {
  //     const ref = ref(storage, `/${categoria}/${nombre}.jpg`)
  //     const sistemasRef = ref(storage, '/SISTEMAS FOTOS')
  //     let imgUrlsTemp = []

  //     await listAll(telasRef)
  //     .then(res => {imgUrlsTemp.push(...res.items)})
  //     .catch(error => {console.log(`Hubo un error obteniendo las ulr de las Telas: ${error.message}`)})

  //     await listAll(sistemasRef)
  //     .then(res => imgUrlsTemp.push(...res.items))
  //     .catch(error => console.log(`Hubo un error obteniendo las ulr de los Sistemas: ${error.message}`))

  //     setImgUrls(imgUrlsTemp)

  //     return imgUrlsTemp
  // }

  // const getAllRefFromFolder = (e) => {
  //     e.preventDefault()
  //     const folderRef = ref(storage, '/fotos')
  //     listAll(folderRef)
  //     .then(res => {
  //         res.items.forEach(itemRef => {
  //             getDownloadURL(itemRef)
  //             .then(url => {
  //                 console.log("downloadUrl => ", url)
  //                 setImgUrl(url)
  //                 imgRef.current.src=url
  //                 console.log(imgRef.current)
  //             })
  //             .catch(error => console.log("Error => ", error))
  //         })
  //     })
  //     .catch(error => console.log("Error => ", error))
  // }
  // use memo
  const productosMemo = useMemo(() => getProductos(), []);

  //   useEffect(() => {
  //     productosMemo();
  //   }, []);

  return (
    <ProductContext.Provider value={{ listas, productos }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductoProvider;
