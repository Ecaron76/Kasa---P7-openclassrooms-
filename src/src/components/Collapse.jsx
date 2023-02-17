import React,{ useState } from 'react'
import fleche from '../img/Vector.png'
import '../style/collapse.css'

export default function Collapse(props) {
    const [loading, setLoading] = useState(false);
    return(
        <div className='collapse'>
            <div className='collapse-header'>
                <div className='collapse-header_title'>{props.title}</div>
                <span className={`fleche-collapse ${loading}`} onClick={() => setLoading(!loading)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </span>
            </div>

            {
                loading && <div className="collapse_description">{props.description}</div>
            }

        </div>
        
    
    )
    
}