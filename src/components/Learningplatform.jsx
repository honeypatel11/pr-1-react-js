import React from 'react'
import Button from './Button'

const Learningplatform = () => {
    return (
        <section className='learn-bg my-5 padding'>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-md-6">
                        <div>
                            <p className='home-description  fw-semibold m-0 my-3'>Best Online Learning Platform             </p>
                            <h4 className='fs-1 mb-4 fw-bold  my-3'>One Platfrom & Many <br /> <span className='shape-bg'>Courses</span> For You</h4>
                        </div>
                        <p className=' learn-des'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <div className='my-5'>
                            <div className='d-flex gap-2 my-1'>
                                <div className='box-icon'>
                                     <i class="fa-solid fa-check" ></i>                           
                                </div>
                                <div className='learn-desc'>9/10 Average Satisfaction Rate</div>
                            </div>
                            <div className='d-flex gap-2 my-1'>
                                <div className='box-icon'>
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div className='learn-desc'>96% Completitation Rate</div>
                            </div>
                            <div className='d-flex gap-2 my-1'>
                                <div className='box-icon'>
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div className='learn-desc'>
                                    Friendly Environment & Expert Teacher</div>
                            </div>
                        </div>
                        <Button name="Explore Our Cources"/>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src="https://bestwpware.com/react-templates/edumim/static/media/about2.a8f93d62442d6bd9f852.png" alt="" width={"100%"}/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Learningplatform