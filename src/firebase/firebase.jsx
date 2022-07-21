/*Importo el inicializador que me permite conectarme con Firebase*/
import { initializeApp } from 'firebase/app'
/*Importo los servicios de Firebase que voy a utilizar*/
/*En este caso Firestore, especificamente el modulo getFirestore  */
import { getFirestore } from 'firebase/firestore'
/*En este caso Storage, especificamente el modulo getStorage*/
import { getStorage } from 'firebase/storage'

import { getAuth } from 'firebase/auth'

/*Luego agregar CloudStorage y FirebaseAuthentication*/

/*Creacion del objeto con los datos de configuracion de Firebase*/
const firebaseConfig = {
    apiKey: "AIzaSyASN1S5uMka9vi8NiFbV65iktpCEiLabIQ",
    authDomain: "flex-color-distribuidora.firebaseapp.com",
    projectId: "flex-color-distribuidora",
    storageBucket: "flex-color-distribuidora.appspot.com",
    messagingSenderId: "16124421104",
    appId: "1:16124421104:web:2954209107e0f1c5c5b335",
    measurementId: "G-7YRP8GZ92B"
};
/*Inicializacion de Firebase, me conecto con Firebase*/
const firebaseApp = initializeApp(firebaseConfig);

/*Genero la referencia a la base de datos creada en el servicio Firestore*/
const db = getFirestore(firebaseApp)

/*Genero la referencia al bucket creado en el servicio Storage, para luego crear referencias especificas*/
const storage = getStorage(firebaseApp);

/*Genero la referencia a la autenticacion de usuario, para luego crear referencias especificas*/
const auth = getAuth(firebaseApp);

export { db, storage, auth }