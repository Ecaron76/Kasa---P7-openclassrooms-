import React from 'react';

import '../style/banner.css'

export default function Banner(props) {
    return(
        
        
        <React.Fragment>
            {console.log(props.src)}
            <div className='background_container' id={props.styleid}>
                {props.text ? <h1 className='background-title'>{props.text} </h1> : null}
                <img src={props.src} alt="Paysage montagneux" className='background-img' />
            </div>
        </React.Fragment>
    )
    
}