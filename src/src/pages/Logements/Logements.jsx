import React from 'react'
import '../../style/logement/logement.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrousel from '../../components/Logement/Carrousel'
import Tags from '../../components/Logement/Tags'
import Signature from '../../components/Logement/Signature'
import Rating from '../../components/Logement/Rating'
import Collapse from '../../components/Collapse'
import logementList from '../../data/logements.json'
import {useParams, Navigate} from 'react-router-dom'





export default function Logements() {
    
    
    
    const logementId  = useParams();
    
    console.log(logementId.id)
    
    const logementObject = logementList.find((logement) => logement.id === logementId.id);
    if(!logementObject){
        return <Navigate to="/*" />
    }
    
        
    const equipementsLogement = logementObject.equipments.map((equipment, index) => {
        return <div className='equipement_item' key={index}>{equipment}</div>
    })
    
    
    return(
        
        <React.Fragment>
            <Header />
            <main>
                <Carrousel images={logementObject?.pictures}/>
                <div className='header-logement'>
                    <div>
                        <h1 className='logement_title'> {logementObject.title}</h1>
                        <p className="logement_location">{logementObject.location}</p>
                        <Tags tag={logementObject.tags} />
                    </div>
                    <div className='header-logement_right'>
                        <Signature host={logementObject.host} key={logementObject.id} />
                        <Rating rating={logementObject.rating} />  
                    </div>
                </div>   
                <div className="description-equipements">
                    <Collapse title="Description" description={logementObject.description}/>
                    <Collapse title="Équipements" description={equipementsLogement}/>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
    
}