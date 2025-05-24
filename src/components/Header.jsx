import React from 'react'
import Button from './Button';

const Header = () => {
    return (
        <header className='my-3 sticky-top'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <img src="/images/logo.svg" alt="" />
                    </div>
                    <div className='d-flex'>
                      
                         <nav className='align-items-center d-flex justify-content-between'>
                            <ul className='d-flex gap-4 nav'>
                                <li>Home</li>
                                <li>Pages</li>
                                <li>Courses</li>
                                <li>Blog</li>
                                <li>Contacts</li>
                            </ul>
                        </nav>
                      
                        <div>
                            <Button name="Start Free Trail" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    )
}

export default Header;