import React, { useEffect, useState } from 'react'
import { getProductId } from '../services/api'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [productDetails, setProductDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getProductId(id)
            setProductDetails(data)
        }
        fetchProductDetails()
    }, [id])

    const handleBuyNow = () => {
        window.confirm("The product is out of stock")
    }

    return (
        <div className='container-fluid' style={{ "height": "100vh" }}>
            <div className='row align-items-center mt-5'>
                <div className='col-md-4 col-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={productDetails.image} className='rounded' height='300rem' alt='' />
                    </div>
                </div>
                <div className='col-md-8 col-12 mt-4 mt-md-0 px-md-4'>
                    <h2>{productDetails.title}</h2>
                    <p className='text-break'>{productDetails.description}</p>
                    <p className='fw-bold text-success fs-4'>₹{productDetails.price}</p>
                    <button className='btn btn-primary w-100' onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
