import React from 'react'
import '../../style/logement/tags.css'

export default function Tags(props) {
    const tags_list=props.tag;
    for (let i = 0; i < tags_list.length; i++) {
        tags_list[[i][1]]=i
        
        console.log(tags_list)
        
    }
    
    return(
        <ul className='tags-list'>
            {tags_list.map((tag, index)=>
            <li key={index}>{tag}</li>
            )
                
            }
        </ul>
    )
        
   
    
}