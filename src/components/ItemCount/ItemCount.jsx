import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = () =>{
    return(
       <div>
        <div>
            <h2 className='my-4'> 0 </h2>
            <Button variant="danger" className='mx-3 px-4'>-</Button>{" "}
            <Button variant="warning" className='mx-3 px-4'>+</Button>{" "}
        </div>
        <div>
            <Button variant="secondary" className='my-3 px-4'>Add to cart</Button>{" "}
        </div>

       </div>
    )
}

export default ItemCount

