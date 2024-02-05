import React, { useEffect, useState } from 'react'
// import download from '../Assets/download.jpeg'

function Home() {
const [data,setdata]=useState([])
useEffect(()=>{
    fetch('http://localhost:4000/display')
    .then((res)=>res.json())
    .then((datas)=>setdata(datas))
    console.log(data)
},[])
    return (

        <div className='head'>
            <h2 className='heading'>Weirdly Foody</h2>
            <hr />
            {data.map((item,index)=>(
                <div id={index} className='container'>
                    <img src={item.image} alt="" />
                    <div>
                        <h4>Name : {item.name}</h4>
                        <h4> Ingredients :</h4>
                        <ul>
                        {item.ingrediensts.map((ingredient,index)=>{
                            return(
                            <li className={index}>{ingredient}</li>
                        )})
                        }
                        </ul>
                        <h4>State : {item.state}</h4>
                    </div>
                </div>
                    ))}
        </div>)
}
export default Home