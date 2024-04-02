import ChefBox from "../Components/ChefBox";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Main";

export default function () {
    const { switchMenu } = useContext(MainContext);
    return (
        <>
            <div
                className="jumbotron jumbotron-fluid page-header"
                style={{ marginBottom: 90 }}
            >
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5">About</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">
                            <a className="text-white" href="">
                                Home
                            </a>
                        </p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">About</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <h1 className="section-title position-relative text-center mb-5">
                                Traditional &amp; Delicious Ice Cream by DNB
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">About Us</h4>
                            <h5 className="text-muted mb-3">
                                DNB offers a way to celebrate with some food
                            </h5>
                            <p>
                                DNB Private Limited is a mini firm. Who sells ice cream in Sitapura,
                                Sanganer, Jaipur.
                            </p>
                            <Link to={''} className="btn btn-secondary mt-2">
                                Learn More
                            </Link>
                        </div>
                        <div className="col-lg-4" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="img/about.jpg"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">Our Features</h4>
                            <p>
                                We offer rich quality 100% vegetarian ice cream Made with real
                                cream, milk, and sugar With the best of fresh fruits, dried fruits
                                and natural flavor.
                            </p>
                            <h5 className="text-muted mb-3">
                                <i className="fa fa-check text-secondary mr-3" />
                                Quality Maintain
                            </h5>
                            <h5 className="text-muted mb-3">
                                <i className="fa fa-check text-secondary mr-3" />
                                Individual Approach
                            </h5>
                            <h5 className="text-muted mb-3">
                                <i className="fa fa-check text-secondary mr-3" />
                                Celebration Ice Cream
                            </h5>
                            <Link to={'../service'} onClick={() => switchMenu('service')} className="btn btn-primary mt-2">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">
                                Experienced &amp; Most Famous Ice Cream Chefs
                            </h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel team-carousel">
                                <ChefBox name={'M Hanuman'} designation={'Designation'} img={'img/team-1.jpg'} />
                                <ChefBox name={'FULL NAME'} designation={'Designation'} img={'img/team-2.jpg'} />
                                <ChefBox name={'Full name'} designation={'Designation'} img={'img/team-3.jpg'} />
                                <ChefBox name={'Full Name'} designation={'Designation'} img={'img/team-4.jpg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}