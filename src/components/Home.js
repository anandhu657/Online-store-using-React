import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/api';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div className='container-fluid row justify-content-center align-items-center my-4'>
            {
                products.map((product) =>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 g-5' key={product.id}>
                        <div className='card px-2 pt-2'>
                            <img src={product.image} alt='' height='300rem' className='card-img-top' />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                ₹{product.price}
                            </span>

                            <div className='card-body text-center'>
                                <p className='card-text fw-bold text-truncate' title={product.title}>{product.title}</p>
                                {/* <p className='fw-bold'>₹{product.price}</p> */}
                                <button className='btn btn-primary w-100'>Product Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home
