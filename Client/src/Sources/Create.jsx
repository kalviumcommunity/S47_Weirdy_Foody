import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
    const[name,setname]=useState()
    const[state,setstate]=useState()
    const[ingrediensts,setingre]=useState([])
    const[image,setimg]=useState()
    const[error,seterror]=useState('')
    const navigate=useNavigate()

    const submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/create",{name,ingrediensts,state,image})
        .then(res=> {
        if(res.data.data){
            console.log(res.data.data)
            seterror(res.data.data)
        }else{
            navigate('/home')
            // console.log(res.data.data)
        }
    })
        .catch(err=>console.log(err))
    }
    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handleingre=(e)=>{
        setingre((e.target.value).split(","))
    }
    const handlestate=(e)=>{
        setstate(e.target.value)
    }
    const handleimg=(e)=>{
        setimg(e.target.value)
    }

  return (
    <form onSubmit={submit}>
        <h3>Create</h3>
        <div>
            <h5>Name</h5>
            <input type="text" onChange={handlename}/>
        </div>
        <div>
            <h5>Ingredients</h5>
            <input type="text" onChange={handleingre}/>
        </div>
        <div>
            <h5>State</h5>
            <input type="text" onChange={handlestate}/>
        </div>
        <div>
            <h5>Image</h5>
            <input type="text" onChange={handleimg}/>
        </div>
        {/* <p>{error}</p> */}
        {error !== '' && <p>{error}</p>}
        <button>submit</button>
    </form>
  )
}

export default Create