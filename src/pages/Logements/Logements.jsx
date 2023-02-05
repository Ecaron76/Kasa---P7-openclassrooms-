import React from 'react'
import '../../style/logement/logement.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrousel from '../../components/Logement/Carrousel'
import Tags from '../../components/Logement/Tags'
import logementList from '../../data/logements.json'
import {useParams} from 'react-router-dom'





export default function Logements() {
    
    
    
    const logementId  = useParams();
    
    console.log(logementId.id)
    const logementObject = logementList.find((logement) => logement.id === logementId.id);
    console.log(logementObject)
    return(
        <React.Fragment>
            <Header />
            <Carrousel images={logementObject?.pictures}/>
            <div className='header-logement'>
                <div>
                    <h1 className='logement_title'> {logementObject.title}</h1>
                    <p className="logement_location">{logementObject.location}</p>
                    <Tags tag={logementObject.tags} key_tag={logementObject.key_tag}/>
                </div>
            
            </div>   
            
            <Footer />
        </React.Fragment>
    )
    
}