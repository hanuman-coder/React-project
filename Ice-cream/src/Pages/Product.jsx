import Items from "../Components/Items";

export default function () {
    const Box = (props) => {
        return (
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                {props.children}
            </div>
        )
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid page-header"
                style={{ marginBottom: 90 }} >
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5">Product</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">
                            <a className="text-white" href="">
                                Home
                            </a>
                        </p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Product</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Products Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">
                                Best Prices We Offer For Ice Cream Lovers
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-1.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-2.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-3.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-4.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-3.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-1.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-2.jpg'} />
                        </Box>
                        <Box>
                            <Items name={'Vanilla Ice Cream'} price={99} img={'img/product-1.jpg'} />
                        </Box>
                        
                        <div className="col-12 text-center">
                            <a href="" className="btn btn-primary py-3 px-5">
                                Load More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}