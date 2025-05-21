import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section>
        <div className="container padding">
            <div className="row">
                <div className="col-6">
                    <div>
                        <img src="/images/aboutimg.png" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <p className='home-description fw-semibold'>About Edumim</p>
                    <h4 className='fs-1 mb-4 fw-bold'>The Place Where You Can <span className='shape-bg'>Achieve</span></h4>
                    <p className='text-secondary fs-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <div className="d-flex my-4 gap-4">
                        <div>
                            <div className='circle-icon bg-circle rounded-circle d-flex align-items-center justify-content-center'>
                                <div className='fs-2 home-description'>
                                    <i class="fa-solid fa-lightbulb"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='fw-semibold fs-5'>Our Mission</h4>
                            <p className='text-secondary fs-5'>There are many variations of passages of the Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div className="d-flex my-4 gap-4">
                        <div>
                            <div className='circle-icon bg-circle rounded-circle d-flex align-items-center justify-content-center'>
                                <div className='fs-2 home-description'>
                                    <i class="fa-solid fa-eye-low-vision"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='fw-semibold fs-5'>Our Vision</h4>
                            <p className='text-secondary fs-5'>There are many variations of passages of the Lorem Ipsum available</p>
                        </div>
                    </div>
                    
                    <Button name="Read More Us"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About