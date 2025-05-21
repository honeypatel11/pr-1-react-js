import React from 'react'

const Card2 = (props) => {
    return (
        <div className='d-flex'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.price}</h5>
                    <p className="card-text">{props.des}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default Card2