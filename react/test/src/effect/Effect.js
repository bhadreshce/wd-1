import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        // console.log('hii this is effect hook');
        // alert('hii')
        // document.getElementById('h').style.color = 'red'
        fetch('https://fakestoreapi.com/products').then((result) => {
            return result.json()
        }).then((res) => {
            console.log(res);
            setProduct(res)
        })

    }, [])
    return (
        <div className='container d-flex flex-wrap'>

            {product.map((prd) => {
                return (
                    <>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={prd.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{prd.title}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h5>$ {prd.price}</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Effect