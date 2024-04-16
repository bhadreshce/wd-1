import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
    <br />
      <br />
      <Link to={'/admin/product/add'} class="btn btn-primary">Add Product</Link>
      <br />
      <br />
    </>
  )
}

export default Product