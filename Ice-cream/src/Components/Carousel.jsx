import { useState, useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Main";

export default function () {
    const timeoutRef = useRef(null);
    const { switchMenu } = useContext(MainContext);
    const [activeItem, setActiveItem] = useState(0);
    const [items, setItems] = useState([
        {
            "caption": "Celebrate the Movement with Delicious Ice Cream",
            "image": "img/carousel-1.jpg",
            "link": "service"
        },
        {
            "caption": "Made From Organic Milk and Natural Flavours",
            "image": "img/carousel-2.jpg",
            "link": "about"
        }
    ])

    const Item = ({ img, caption, link, index }) => {
        return (
            <div className={`carousel-item ${index == activeItem ? 'active' : ''}`}>
                <img className="w-100" src={img} />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 900 }}>
                        <h4 className="text-white text-uppercase mb-md-3">
                            Traditional &amp; Delicious
                        </h4>
                        <h1 className="display-3 text-white mb-md-4">
                            {caption}
                        </h1>
                        <Link onClick={() => switchMenu(link)} to={link} className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</Link>
                    </div>
                </div>
            </div>
        )
    }


    function inc() {
        if (activeItem < items.length - 1) {
            setActiveItem(activeItem + 1)
        } else {
            setActiveItem(0)
        }
    }

    function dec() {
        if (0 < activeItem) {
            setActiveItem(activeItem - 1)
        } else {
            setActiveItem(items.length - 1)
        }
    }

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                inc()
            },
            3000
        )
    }, [activeItem])

    return (
        <div className="container-fluid p-0 mb-5 pb-5">
            <div id="header-carousel" className="carousel slide">
                <div className="carousel-inner">
                    {
                        items.map(
                            (d, i) => {
                                return <Item key={i} img={d.image} caption={d.caption} link={d.link} index={i} />
                            }
                        )
                    }
                </div>
                <a onClick={dec} className="carousel-control-prev">
                    <div className="btn btn-secondary px-0"
                        style={{ width: 45, height: 45 }} >
                        <span className="carousel-control-prev-icon mb-n1" />
                    </div>
                </a>
                <a onClick={inc} className="carousel-control-next">
                    <div className="btn btn-secondary px-0"
                        style={{ width: 45, height: 45 }} >
                        <span className="carousel-control-next-icon mb-n1" />
                    </div>
                </a>
            </div>
        </div>
    )
}