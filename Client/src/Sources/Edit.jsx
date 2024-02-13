import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const id = useParams().id
        const[name,setname]=useState()
        const[state,setstate]=useState()
        const[ingrediensts,setingre]=useState([])
        const[image,setimg]=useState()
        const navigate=useNavigate("/home")
    
        useEffect(()=>{
            // console.log('Data')
            axios.get(`http://localhost:4000/edit/${id}`)
            .then((data)=>{
                // console.log(data.data)
                setname(data.data.name)
                setstate(data.data.state)
                setingre(data.data.ingrediensts)
                setimg(data.data.image)
            }).catch(err=>console.log(err))
        },[])
        const submit=(e)=>{
            // console.log('submit')
            e.preventDefault()
            axios.put(`http://localhost:4000/update/${id}`,{name,ingrediensts,state,image},{new:true})
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
            navigate("/")
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
        <h3>Edit</h3>
        <div>
            <h5>Name</h5>
            <input type="text" value={name} onChange={handlename}/>
        </div>
        <div>
            <h5>Ingredients</h5>
            <input type="text" value={ingrediensts} onChange={handleingre}/>
        </div>
        <div>
            <h5>State</h5>
            <input type="text" value={state} onChange={handlestate}/>
        </div>
        <div>
            <h5>Image</h5>
            <input type="text" value={image} onChange={handleimg}/>
        </div>
        <button>submit</button>
    </form>
  )
}

export default Edit