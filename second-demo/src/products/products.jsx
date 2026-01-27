import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Products = () => {
    
useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

    return (
        <div className='App'>
            <h1>Products</h1>
        </div >
    )
}

export default Products