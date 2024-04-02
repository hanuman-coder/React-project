export default function ({ name, designation, img }) {
    return (
        <div className="team-item">
            <div className="team-img mx-auto">
                <img className="rounded-circle w-100 h-100" src={img}
                    style={{ objectFit: "cover" }} />
            </div>
            <div className="position-relative text-center bg-light rounded px-4 py-5"
                style={{ marginTop: "-100px" }} >
                <h3 className="font-weight-bold mt-5 mb-3 pt-5">{name}</h3>
                <h6 className="text-uppercase text-muted mb-4">{designation}</h6>
                <div className="d-flex justify-content-center pt-1">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#" >
                        <i className="fab fa-twitter" />
                    </a>
                    <a
                        className="btn btn-outline-secondary btn-social mr-2" href="#" >
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a
                        className="btn btn-outline-secondary btn-social mr-2" href="#" >
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </div>
    )
}