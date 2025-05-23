import React from 'react'

const Subscriber = () => {
    return (
        <section className='subscriber-bg'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="col-4">
                        <div className='d-flex align-items-center fs-3 gap-4 fw-semibold text-white'>
                            <img src="https://bestwpware.com/react-templates/edumim/static/media/big-mail.a644844b6b44c293b10af0d68fbc0ae7.svg" alt="" />
                            <div className=''>Subscribe to <br /> My Newsletter</div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='col-9'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="text-white fa-regular fa-envelope"></i>
                                    <input type="text" placeholder='Enter Your Mail Address' className='bg-transparent outline-none text-white text-font' />
                                </div>

                            </div>
                            <div className="col-3">
                                <div className='bg-white py-3 px-4 font-green rounded text-center'>
                                        Get Started Now
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscriber