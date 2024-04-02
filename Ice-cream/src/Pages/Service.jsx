import ReviewBox from "../Components/ReviewBox";
import ServiceBox from "../Components/ServiceBox";

export default function () {
    return (
        <>
            <div
                className="jumbotron jumbotron-fluid page-header"
                style={{ marginBottom: 90 }}
            >
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5">Service</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">
                            <a className="text-white" href="">
                                Home
                            </a>
                        </p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Service</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
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
                                <ServiceBox service={'Good Quality123'} dec={'some text goes here!!'} img={"img/service-1.jpg"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
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