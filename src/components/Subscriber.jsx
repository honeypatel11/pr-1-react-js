import React from 'react'

const Subscriber = () => {
    return (
        <section className='subscriber-bg'>
            <div className="container">
                <div className='d-flex'>
                    <div>
                        <img src="https://bestwpware.com/react-templates/edumim/static/media/big-mail.a644844b6b44c293b10af0d68fbc0ae7.svg" alt="" />
                    </div>
                    <div className=''>Subscribe to <br /> My Newsletter</div>
                    <div className='d-flex gap-2 '>
                        <span className=''>
                            <i class="fa-regular fa-envelope"></i>
                            <input type="text" placeholder='Enter Your Mail Address' className='border-top' />
                        </span>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscriber