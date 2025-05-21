import React from 'react'
import Card from './Card'

const Feature = () => {
    let arr = [
        {
            icon:"fa-solid fa-globe",
            title: "Learn More Anywhere",
            des: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.}"
        },
        {
             icon:"fa-solid fa-person-chalkboard",
            title: "Expert Instructor",
            des: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.}"
        },
        {
             icon:"fa-solid fa-phone",
            title: "24/7 Strong Support",
            des: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.}"
        },
    ]
    return (
        <div className='feture-sec py-5 my-5'>
            <p className='home-description text-center fw-semibold m-0'>Core Features</p>
            <h4 className='fs-1 mb-4 fw-bold text-center'>Why <span className='shape-bg'>Choose</span> Edumim</h4>


            <div className="container">
                <div className="d-flex gap-3 py-5 my-5">

                    {
                        arr.map((items) => {
                            return <Card title={items.title} des={items.des} icon={items.icon}/>
                        })
                    }

                </div>
            </div>
        </div>


    )
}

export default Feature