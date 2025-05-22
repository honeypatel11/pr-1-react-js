import React from 'react'
import Button from './Button'

const Card2 = (props) => {
    return (
        <div className="col-4 my-3">
            
            <div className="card" >
                <img src={props.img} className="card-img-top" alt="..." width="100%"/>
                <div className="card-body">
                    <h5 className="card-title">{props.price}</h5>
                    <p className="card-text">{props.des}</p>
                 
                </div>
              
            </div>
           
        </div>
        
    )
}


export default Card2