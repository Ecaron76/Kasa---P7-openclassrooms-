import React from 'react'
import logementList from '../../data/logements.json'
import '../../style/card/card.css'
import { Link} from 'react-router-dom'



    
export default function logementCard() {
    return(
        <React.Fragment>
            {
            
            logementList.map(logement => 
                        <Link to={`/logement/${logement.id}`} className='logement_card' key={logement.id}>
                            <h2 className='card-title'> {logement.title}</h2>
                            <img src={logement.cover} alt="" className='img-cover'/> 
                        </Link>
                   
                    
                )
            
            }
        
        </React.Fragment>
    
        
    )
    }