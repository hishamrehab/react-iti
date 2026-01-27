import React from 'react'
import { useParams , useLocation } from 'react-router-dom'
const ProductDetails = (props) => {
    const location =useLocation();
 const params = useParams()
 console.log("location" , location);
 console.log("params" ,params);

  return (
    <div>
        <h1>Product Details {props.match.params.id}</h1>
    </div>
  )
}

export default ProductDetails