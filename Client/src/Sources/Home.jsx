import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/display')
        .then((res)=>res.json(res))
        .then((datas)=>setdata(datas))
        console.log(data)
    },[])
    return (
        <div className='head'>
            <h2 className='heading'>Weirdly Foody</h2>
            <hr />
            <button><Link to="/create">Add new Ingridients</Link></button>
            {data.map((item,index)=>(
                <div id={index} className='container'>
                    <img src={item.image} alt="" />
                    <div>
                        <h4>Name : {item.name}</h4>
                        <h4> Ingredients :</h4>
                        <ul>
                            {console.log(item)}
                        {item.ingrediensts.map((ingredient,index)=>{
                            return(
                            <li key={index}>{ingredient}</li>
                        )})
                        }
                        </ul>
                        <h4>State : {item.state}</h4>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Home