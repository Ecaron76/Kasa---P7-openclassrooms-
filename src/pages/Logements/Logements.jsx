import  React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrousel from '../../components/Carrousel'
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
                
            
            <Footer />
        </React.Fragment>
    )
    
}