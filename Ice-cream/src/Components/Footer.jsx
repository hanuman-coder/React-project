import { useContext } from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Main";


export default function () {
    const { switchMenu } = useContext(MainContext);
    return (
        <div className="container-fluid footer bg-light py-5"
            style={{ marginTop: 90 }} >
            <div className="container text-center py-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to={''} onClick={() => switchMenu('')} className="navbar-brand m-0">
                            <img src="logo512.png" height="200px" />
                        </Link>
                    </div>
                    <div className="col-12 mb-4">
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-outline-secondary btn-social mr-2" href="#">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="btn btn-outline-secondary btn-social" href="#">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                    <div className="col-12 mt-2 mb-4">
                        <div className="row">
                            <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                <h5 className="font-weight-bold mb-2">Address</h5>
                                <p className="mb-2">
                                    H1/35 Riico Industrial Area Prahladpura <br /> Sitapura, Sanganer,
                                    Jaipur - (Raj.) 302022
                                </p>
                                <p className="mb-0">+91 7339XXXXXX </p>
                                <p>
                                    <b>Email</b> - viphanuman.@gmail.com
                                </p>
                            </div>
                            <div className="col-sm-6 text-center text-sm-left">
                                <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                                <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}