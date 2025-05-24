import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <section className='footer-bg'>
      <div className="container ">
        <div className='row justify-content-between gy-3'>
          <div className="col-md-4">
            <div>
              <img src="https://bestwpware.com/react-templates/edumim/static/media/footer-logo.04abc89d897eb1ebbbdfb7c8e4905bb1.svg" alt="" width={"40%"} />
            </div>
            <div className='text-secondary  my-4 footer-title'>
              Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.
            </div>
            <div className='gap-3 d-flex'>
              <div className=' d-flex gap-3 '>
                <span className='icon-footer'>
                  <i class="fa-brands fa-facebook-f text-white "></i>
                </span>
                <span className='icon-footer'>
                  <i class="fa-brands fa-twitter text-white"></i>
                </span>
                <span className='icon-footer'>
                  <i class="fa-brands fa-linkedin-in text-white"></i>
                </span>
                <span className='icon-footer'>
                  <i class="fa-brands fa-instagram text-white"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='d-flex'>
              <div>
                <h4 className="ps-5 fw-bold text-white">Links</h4>
                <ul className='ps-5 link-text '>
                  <li className=''>Home</li>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>Courses</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <div>
                  <h4 className="ps-5  fw-bold text-white">Legal</h4>
                  <ul className='ps-5 link-text '>
                    <li className=''>Legal</li>
                    <li>Tearms of Use</li>
                    <li>Tearm & Condition</li>
                    <li>Payment Method</li>
                    <li>Privacy Policy</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <h4 className="fw-bold text-white">Newsletter</h4>
              <div className='link-text'>Join over <span class="text-danger underline">68,000</span> people getting our <br /> emails Lorem ipsum dolor sit amet <br /> consectet</div>
            </div>
            <button className='rounded-2 p-3 my-3 text-secondary w-75'>Enter Your Mail</button>
            <Button name="Subscribe Now" className="text-center" />

          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer