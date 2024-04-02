import GalleryItem from "../Components/GalleryItem";

export default function () {
    return (
        <>
            <div
                className="jumbotron jumbotron-fluid page-header"
                style={{ marginBottom: 90 }}
            >
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5">Gallery</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">
                            <a className="text-white" href="">
                                Home
                            </a>
                        </p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Gallery</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Portfolio Start */}
            <div className="container-fluid py-5 px-0">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <h1 className="section-title position-relative text-center mb-5">
                                Delicious Ice Cream Made From Our Very Own Organic Milk
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <ul className="list-inline mb-4 pb-2" id="portfolio-flters">
                                <li
                                    className="btn btn-sm btn-outline-primary m-1 active"
                                    data-filter=".first">
                                    Cone
                                </li>
                                <li
                                    className="btn btn-sm btn-outline-primary m-1 active"
                                    data-filter=".second">
                                    Vanilla
                                </li>
                                <li
                                    className="btn btn-sm btn-outline-primary m-1 active"
                                    data-filter=".third">
                                    Chocolate
                                </li>
                            </ul>
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
            </div>
        </>

    )
}