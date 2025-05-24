
import Card2 from './Card2'
import Button from './Button'

const Courses = () => {
    let arr = [
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
            price: "$29.28",
            des: "Basic Fundamentals of Interior & Graphics Design",
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c2.9a8ccc2351ea8d809884.png",
            price: "Free",
            des: "Increasing Engagement with Instagram &Facebook",
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c3.793be6d17a4e4b997871.png",
            price: "$72.39",
            des: "Introduction to Color Theory & Basic UI/ UX & Graphis" ,
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c4.df2ca87cc98f561c4e2f.png",
            price: "$49.33",
            des: "Financial Security Thinking and Principles Theory",
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c5.7fe367ef9d8a61be7e1f.png",
            price: "Free",
            des: "Logo Design: From Concept to Presentation & More",
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/c6.2faa1f0643c49baaa3e6.png",
            price: "$84",
            des: "Professional Ceramic Moulding for Beginners",
        },
    ]
    return (
        <section>
            <p className='home-description text-center fw-semibold m-0'>Popular Courses</p>
            <h4 className='fs-1 mb-4 fw-bold text-center'>Choose Our Top <span className='shape-bg'>Courses</span></h4>
            <div className="container">
                <div className="row">

                    {
                        arr.map((items) => {
                            return <Card2 img={items.img} price={items.price} des={items.des} />
                        })
                    }
                </div>
            
                <div className='text-center'>
                    <Button name="View All Courses" />
                </div>
            </div>
        </section>
    )
}

export default Courses