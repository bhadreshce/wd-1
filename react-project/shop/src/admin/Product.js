import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  useEffect(() => {
    getProudct()
  }, [])

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/product/${id}`).then(() => {
      getProudct()
    })
  }

  const editData = (id) => {
    navigate(`/admin/product/edit/${id}`)
  }

  const getProudct = () => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }
  return (
    <>
      <br />
      <br />
      <Link to={'/admin/product/add'} class="btn btn-primary">Add Product</Link>
      <br />
      <br />
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quntity</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.length != 0 && (
            <>
              {product.map((res) => {
                return (
                  <>
                    <tr>
                      <td>{res.productName}</td>
                      <td>{res.productPrice}</td>
                      <td>{res.productQuantity}</td>
                      <td><img height={'50px'} width={'50px'} src={res.productUrl} alt="" /></td>
                      <td>{res.productCategory}</td>
                      <td><button onClick={() => {
                        deleteProduct(res.id)
                      }} className='btn btn-danger'>Delete</button>
                        <button onClick={() => {
                          editData(res.id)
                        }} className='btn btn-info'>Edit</button>
                      </td>
                    </tr>

                  </>
                )
              })}
            </>
          )}
          {product.length == 0 && (
            <>
              <tr>
                <td colSpan={2}> No data found </td>
              </tr>
            </>
          )}
        </tbody>
      </table >

    </>
  )
}

export default Product