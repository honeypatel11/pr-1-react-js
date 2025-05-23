import Card3 from "./Card3"



const Populartopic = () => {
    let arr1 = [
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t1.573bf8871dbd6ce1055b.png",
            title: "Data Science",
            des: "68 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t2.dcfc649b1b88ca3d66aec28cc42620a7.svg",
            title: "UI/UX Design",
            des: "UI/UX Design"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t3.3baa7c915f1236cb51b2836d895939ca.svg",
            title: "Modern Physics",
            des: "68 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t4.0762cfbb0ea3137cef2e01be3804e95a.svg",
            title: "Music Production",
            des: "45 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t5.6f3fef09a068fab29098804fabf1fbd4.svg",
            title: "Data Science",
            des: "68 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t6.d73f1d7654da5014a62e0895832fd7ee.svg",
            title: "Finances",
            des: "68 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t7.9c288f5af333a04d968d6d726fdb93fd.svg",
            title: "Global Science",
            des: "75 Courses"
        },
        {
            img: "https://bestwpware.com/react-templates/edumim/static/media/t7.9c288f5af333a04d968d6d726fdb93fd.svg",
            title: "Game Design",
            des: "12 Courses"
        },
    ]
    return (
        <div className="container padding">
            <div>
                <p className='home-description text-center  fw-semibold m-0 my-3'>Start Learning From Today           </p>
                <h4 className='fs-1 mb-4 fw-bold text-center my-3'>Popular <span className='shape-bg'>Topics</span>To Learn</h4>
            </div>
            <div className="row gy-4">
               
                    {
                        arr1.map((items) => {
                            return <Card3 img={items.img} title={items.title} des={items.des} />
                        })
                    }
          
            </div>

        </div>


    )
}

export default Populartopic