import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
const AddCat =  () => {
    const category = useRef('')
    const navigate = useNavigate()
    const submiCat = async (e) => { 
        e.preventDefault()
     try {
         let data = await axios.post(`http://localhost:8000/category`, { name: category.current.value })
         if (data) { 
             navigate('/admin/category')
             
         }
     } catch (error) {
        
     }
        
    }

  return (
      <>
          <br/>
          <form onSubmit={submiCat}>
              
  <div class="form-group col-6">
    <label for="exampleInputEmail1">Category Name</label>
    <input ref={category} type="text" class="form-control col-6" id="exampleInputEmail1"  placeholder="Category Name" />
  </div>
 <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      
      </>
  )
}

export default AddCat