import React from 'react'
import Card2 from './Card2'

const Courses = () => {
    let arr = [
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
            price: "$29.28",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c2.9a8ccc2351ea8d809884.png",
            price: "Free",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c3.793be6d17a4e4b997871.png",
            price: "$72.39",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c4.df2ca87cc98f561c4e2f.png",
            price: "$49.33",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c5.7fe367ef9d8a61be7e1f.png",
            price: "Free",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img:"https://bestwpware.com/react-templates/edumim/static/media/c6.2faa1f0643c49baaa3e6.png",
            price: "$84",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
    ]
    return (
        <section>
            <p className='home-description text-center fw-semibold m-0'>Popular Courses</p>
            <h4 className='fs-1 mb-4 fw-bold text-center'>Choose Our Top <span className='shape-bg'>Courses</span></h4>
            <div className="container">
                <div className="row ">
                    {
                        arr.map((items) => {
                            return <Card2 img = {items.img} price= {items.price} des = {items.des}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Courses