import { useContext } from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Main";

export default function () {
    const { open, setOpen, activeMenu, setActiveMenu, switchMenu } = useContext(MainContext);
    const Item = ({ path }) => {
        return (
            <Link onClick={() => switchMenu(path)} to={path} className={`nav-item nav-link text-transform ${activeMenu == path ? 'active' : ''}`}>
                {path == '' ? 'Home' : path}
            </Link>
        )
    }

    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white pr-3" href="">
                                    FAQs
                                </a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">
                                    Help
                                </a>
                                <span className="text-white">|</span>
                                <a className="text-white pl-3" href="">
                                    Support
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="text-white pl-3" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header starts */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3 "
                    style={{ zIndex: 9 }} >
                    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                        <Link to={''} onClick={() => switchMenu('')} className="navbar-brand d-block d-lg-none">
                            <img src="logo512.png" height="100px" />
                        </Link>
                        <button onClick={() => setOpen(!open)} type="button" className="navbar-toggler">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`navbar-collapse justify-content-between collapse ${open ? 'show' : ''}`} >
                            <div className="navbar-nav ml-auto py-0">
                                <Item path={''} />
                                <Item path={'about'} />
                                <Item path={'product'} />
                            </div>

                            <Link to={''} onClick={() => switchMenu('')} className="navbar-brand mx-5 d-none d-lg-flex align-items-center">
                                <img src="logo512.png" height="80px"
                                    style={{ transform: "scale(1.9)" }} />
                            </Link>
                            <div className="navbar-nav mr-auto py-0">
                                <Item path={'service'} />
                                <Item path={'gallery'} />
                                <Item path={'contact'} />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>


    )
}

