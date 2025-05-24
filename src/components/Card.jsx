import React from 'react'

const Card = (props) => {
    return (
        <div className="card col-12 col-md-6 col-xl-4 p-3 border-0" style={{ width: 400 }}>
            <div className='circle-icon bg-circle rounded-circle d-flex align-items-center justify-content-center'>
                <div className='fs-2 home-description'>
                    <i class={`${props.icon}`}></i>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-dark py-4">{props.title}</h5>
                <p className="card-text text-secondary fw-light">{props.des}</p>
            </div>
        </div>

    )
}

export default Card