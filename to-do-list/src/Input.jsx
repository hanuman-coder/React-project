import { useRef } from "react";

function Input (props) {
    const inpRef = useRef();

    const inpHandler = () => {
        // console.log(inpRef.current.value);
        props.handler(inpRef.current.value);
        inpRef.current.value = '';
    }

    return(
        <div className="d-flex gap-3">
            <input type="text" className="form-control" ref={inpRef} />
            <button onClick={inpHandler} className="btn btn-primary">Add</button>
        </div>
    )
}

export default Input;