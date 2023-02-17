import React, { useState } from "react";
import fleche from '../../img/Vector.png'
import '../../style/logement/carrousel.css'

export default function Carrousel(props) {
    let [imgView, imgChange] = useState(0);
    let nombreImg = props.images.length;

    const imgPreview = () => {
        if(imgView === 0) {
            imgChange(nombreImg - 1);
        } else {
            imgChange(imgView - 1);
        }
        return(imgChange);
    };  

    const imgNext = () => {
        if(imgView === nombreImg - 1) {
            imgChange(nombreImg = 0);
        } else {
            imgChange(imgView + 1);
        }
        return(imgChange);
    };

    return(
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPreview}/>
            }
            {
                props.images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgView ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgNext}/>
            }
        </div>
    );
    

        
    
}