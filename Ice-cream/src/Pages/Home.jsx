import Items from "../Components/Items";
import ServiceBox from "../Components/ServiceBox";
import GalleryItem from "../Components/GalleryItem";
import ChefBox from "../Components/ChefBox";
import ReviewBox from "../Components/ReviewBox";
import Carousel from "../Components/Carousel";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Main";

export default function () {
    const { switchMenu } = useContext(MainContext);
    return (
        <>
            {/* Carousel Start */}
            <Carousel />
            {/* Carousel End */}
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
                            <Link to={'about'} onClick={() => switchMenu('about')} className="btn btn-secondary mt-2">
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
                            <Link to={'service'} onClick={() => switchMenu('service')}  className="btn btn-primary mt-2">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Promotion Start */}
            <div className="container-fluid my-5 py-5 px-0">
                <div className="row bg-primary m-0">
                    <div className="col-md-6 px-0" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img
                                className="position-absolute w-100 h-100"
                                src="img/promotion.jpg"
                                style={{ objectFit: "cover" }}
                            />
                            {/* <button type="button" class="btn-play" data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                  <span></span>
              </button> */}
                        </div>
                    </div>
                    <div className="col-md-6 py-5 py-md-0 px-0">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <div
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                                style={{ width: 100, height: 100 }}
                            >
                                <h3 className="font-weight-bold text-secondary mb-0">₹/-199</h3>
                            </div>
                            <h3 className="font-weight-bold text-white mt-3 mb-4">
                                Chocolate Ice Cream
                            </h3>
                            <p className="text-white mb-4">
                                Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                                justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum
                            </p>
                            <a href="contact.html" className="btn btn-secondary py-3 px-5 mt-2">
                                Visit Our Shop
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Promotion End */}
            {/* Video Modal Start */}
            <div
                className="modal fade"
                id="videoModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                            {/* 16:9 aspect ratio */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src=""
                                    id="video"
                                    allowscriptaccess="always"
                                    allow="autoplay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">
                                Best Services We Provide For Our Clients
                            </h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel service-carousel">
                                <ServiceBox service={'Quality Maintain'} dec={'some text goes here!!'} img={"img/service-1.jpg"} />
                                <ServiceBox service={'Individual Approach'} dec={'some text goes here!!'} img={"img/service-2.jpg"} />
                                <ServiceBox service={'Celebration Ice Cream'} dec={' Dolor nonumy sed eos sed lorem diam amet eos magna. lorem duo stet kasd justo'} img={"img/service-3.jpg"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Portfolio Start */}
            <div className="container-fluid my-5 py-5 px-0">
                <div className="row justify-content-center m-0">
                    <div className="col-lg-5">
                        <h1 className="section-title position-relative text-center mb-5">
                            Delicious Ice Cream Made From Our Very Own Organic Milk
                        </h1>
                    </div>
                </div>
                <div className="row m-0 portfolio-container">
                    <GalleryItem img={'img/portfolio-1.jpg'} />
                    <GalleryItem img={'img/portfolio-2.jpg'} />
                    <GalleryItem img={'img/portfolio-3.jpg'} />
                    <GalleryItem img={'img/portfolio-4.jpg'} />
                    <GalleryItem img={'img/portfolio-5.jpg'} />
                    <GalleryItem img={'img/portfolio-6.jpg'} />
                </div>
            </div>
            {/* Portfolio End */}
            {/* Products Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">
                                Best Prices We Offer For Ice Cream Lovers
                            </h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel product-carousel">
                                <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-1.jpg'} />
                                <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-2.jpg'} />
                                <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-3.jpg'} />
                                <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-4.jpg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Products End */}
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
            {/* Team End */}
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">
                                Clients Say About Our Famous Ice Cream
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel">
                                <ReviewBox name={'Abc'} img={"img/testimonial-1.jpg"} review={'stet justo sed est sed. Diam sed stet amet eirmod eos labore diam'} profession={'Profession'} />
                                <ReviewBox name={'Abc'} img={"img/testimonial-2.jpg"} review={'Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebumelitr dolore et eos labore, stet justo sed est sed. Diam sed seddolor stet amet eirmod eos labore diam'} profession={'Profession'} />
                                <ReviewBox name={'Abc'} img={"img/testimonial-3.jpg"} review={"Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebuelitr dolore et eos labore, stet justo sed est sed. Diam sed seddolor stet amet eirmod eos labore diam"} profession={'Profession'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}