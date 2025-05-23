import React from 'react'

const Card3 = (props) => {
    return (
        <div className="col-3">

            <div>

                <div className='card-3'>

                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='round'>
                            <div>
                                <img src={`${props.img}`} alt="" width={"32px"} />
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-center fw-semibold '>{props.title}</h4>
                        <p className='text-center text-secondary fs-6 fw-medium'>{props.des}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card3