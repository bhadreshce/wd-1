import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [productQuantity, setProductQuantity] = useState('');
//   const [productCategory, setProductCategory] = useState();
//   const [productUrl, setProductUrl] = useState('');
     const navigate = useNavigate()
    const [product, setProduct] = useState({productName:'',productPrice:'',productQuantity:'',productCategory:'',productUrl:''})
      const [cat,setCat] = useState([]);
    
    useEffect(() => { 
        axios.get(`http://localhost:8000/category`).then((res) => { 
             setCat(res.data)              
        })
         
        console.log(product);

    },[product])
  

    const productSet = (e) => {
        const {name, value } = e.target
        setProduct({ ...product, [name]:value})
    }
    const submitProduct = (e) => { 
        e.preventDefault()
        
        axios.post('http://localhost:8000/product', product).then(() => { 
           navigate('/admin/product')
        })
    } 

    
  return (
      <>
           <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={submitProduct}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
                          id="productName"
                          name='productName'
            onChange={productSet}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
                          id="productPrice"
                          name='productPrice'
             onChange={productSet}
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
          <input
            type="number"
            className="form-control"
                          id="productQuantity"
                          onChange={productSet}
                           name='productQuantity'
           
          />
                  </div>
                  
                   <div className="mb-3">
          <label htmlFor="" className="form-label">Product Image</label>
          <input
            type="url"
            className="form-control"
                          id="productUrl"
                          onChange={productSet}
                             name='productUrl'
           
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Product Category</label>
                      <select
                      name='productCategory'     
            className="form-control"
            id="productCategory"
             onChange={productSet}
                      >
                          {cat.map((res) => { 
                              return (
                                  <option value={res.name}>{res.name}</option> 
                              )
                          }) }
            
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
      </>
  )
}

export default AddProduct