import React from 'react'
import Button from './Button'

const Home = () => {
    return (
        <section className='home-bg'>
            <div className="container">
                <div className="row">
                    <div className='d-flex vh-100 align-items-center d-flex '>
                        <div className="col-6 ">
                            <div className=''>
                                <h1 className='title fw-bold ' >Classical <br /><span className='home-description fw-semibold'>Education</span> For <br /> The Future</h1>

                            </div>
                            <p className='content-home'>It is long established fact that reader distracted by the <br /> readable content.</p>

                            <div className='box d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-2 '>
                                    <span className='home-icon'>
                                        <i class="fa-regular fa-envelope"></i>
                                    </span>
                                    <input type=""  className='home-input' placeholder='Enter Your Mail'/>
                                </div>
                                <div>
                                    <Button name="Get Started Now" />
                                </div>

                            </div>

                        </div>
                        <div className="d-none d-xl-flex col-6">
                            <div className='home-img'>
                                <img src="./public/images/homeimg.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home