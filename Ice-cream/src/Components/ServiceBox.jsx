export default function ({ service, dec, img }) {
    return (
        <div className="service-item">
            <div className="service-img mx-auto">
                <img
                    className="rounded-circle w-100 h-100 bg-light p-3"
                    src={img}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div
                className="position-relative text-center bg-light rounded p-4 pb-5"
                style={{ marginTop: "-75px" }}
            >
                <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                    {service}
                </h5>
                <p>
                    {dec}
                </p>
                <a
                    href=""
                    className="border-bottom border-secondary text-decoration-none text-secondary"
                >
                    Learn More
                </a>
            </div>
        </div>
    )
}