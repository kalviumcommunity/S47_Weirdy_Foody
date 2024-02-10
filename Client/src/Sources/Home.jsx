import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [data,setdata]=useState([])
    const nevigate=useNavigate()
    const name=(decodeURIComponent(document.cookie).split(";"))
    useEffect(()=>{
        fetch('http://localhost:4000/display')
        .then((res)=>res.json())
        .then((datas)=>setdata(datas))
        console.log(data)
    },[])

    const handledelete=(id)=>{
        axios.delete("http://localhost:4000/delete/"+id)
        .then(res=>{console.log(res)
            window.location.reload(true)})
        .catch(err=>console.log(err))
    }

    const logout=()=>{
        document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie="name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        nevigate('/')
        window.location.reload(true)
    }
    return (
        <div className='head'>
            <h2 className='heading'>Weirdly Foody</h2>
            {name.map((data,index)=>{
                return(
                <h4 key={index}>{data}</h4>)
            })}
            <hr />
            <button><Link to="/create">Add new Ingridients</Link></button>
            <button onClick={logout}>Logout</button>
            {data && data.map((item,index)=>(
                <div id={index} className='container'>
                    <img src={item.image} alt="" />
                    <div>
                        <h4>Name : {item.name}</h4>
                        <h4> Ingredients :</h4>
                        <ul>
                            {/* {console.log(item)} */}
                        {item.ingrediensts.map((ingredient,index)=>{
                            return(
                            <li key={index}>{ingredient}</li>
                        )})
                        }
                        </ul>
                        <h4>State : {item.state}</h4>
                        <button><Link to={`/edit/${item._id}`}>Edit</Link></button>
                        <button onClick={()=>handledelete(item._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Home