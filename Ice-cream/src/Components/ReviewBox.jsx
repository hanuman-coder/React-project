export default function ({ name, img, review, profession }) {
    return (
        <div className="text-center">
            <i className="fa fa-3x fa-quote-left text-primary mb-4" />
            <h4 className="font-weight-light mb-4">
                {review}
            </h4>
            <img className="img-fluid mx-auto mb-3" src={img} />
            <h5 className="font-weight-bold m-0">{name}</h5>
            <span>{profession}</span>
        </div>
    )
}