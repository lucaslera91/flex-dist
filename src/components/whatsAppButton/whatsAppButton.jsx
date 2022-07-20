import React from "react"
import "./whatsAppButton.modules.css"
import whatsAppLogo from "../../recursos/imagenes/whatsAppLogo.png"


function WhatsAppButton({classnames, size}) {
    function inciarWhatsApp() {
        let whatsappLink = `https://wa.me/5491148889851?text=Buen+dia+Flex-Color%0D%0AQueria+hacerles+una+consulta...`
        console.log('whatsappLink => ', whatsappLink);
        window.open(whatsappLink);
    }
    return(

        <div className={`${classnames}`}>
            <img src={whatsAppLogo} className="imgWhatsAppButton" style={{width: size}} onClick={inciarWhatsApp}/>
        </div>

    )

}

export {WhatsAppButton}