import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

  const [cat, setCat] = useState([])
  useEffect(() => {
    getCat()

  }, [])

  const deleteCat = (index) => {
    axios.delete(`http://localhost:8000/category/${index}`).then(() => {
      getCat()
    })
  }


  const getCat = () => {
    axios.get('http://localhost:8000/category').then((res) => {
      setCat(res.data)
      console.log(res.data);

    })
  }

  return (
    <>
      <br />
      <br />
      <Link to={'/admin/category/add'} class="btn btn-primary">Add Category</Link>
      <br />
      <br />
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {cat.length != 0 && (
            <>
              {cat.map((res) => {
                return (
                  <>
                    <tr>
                      <td>{res.name}</td>
                      <td><button onClick={() => {
                        deleteCat(res.id)
                      }} className='btn btn-danger'>Delete</button></td>
                    </tr>

                  </>
                )
              })}
            </>
          )}
          {cat.length == 0 && (
            <>
              <tr>
                <td colSpan={2}> No data found </td>
              </tr>
            </>
          )}
        </tbody>
      </table>

    </>
  )
}

export default Category