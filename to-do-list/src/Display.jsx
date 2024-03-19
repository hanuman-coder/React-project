function Display(props){
    
    return(
        
        <div className="col-6  p-2 " style={{minHeight: "500px"}}>
            <h2 className="text-center">{props.title}</h2>

            <ul className="list-unstyled">
                {
                    props.items.map(
                        (item, index)=> {
                            return <li key={index} className="p-2 shadow position-relative d-flex align-items-center" >
                                {item} 
                                <i onClick={()=> props.removeHandler(index)} className="fa-solid fa-trash-can"></i>
                                <span onClick={()=> props.moveHandler(index)} className="fw-bold position-absolute" style={{cursor: 'pointer', right: '10px'}} >X</span>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
        
    )
}

export default Display;