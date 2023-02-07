import React from 'react'
import '../../style/logement/signature.css'

export default function Signature(props) {
    const host =props.host;
    console.log(host)
    return(
        <div className='host_logement'>
            <p className='host_name'>{host.name}</p>
            <img src={host.picture} alt="Tête du propriétaire (lol)" className='host_picture'/>
        </div>
    )
        
   
    
}