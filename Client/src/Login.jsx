import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nevigate=useNavigate()
    const submit=()=>{
        nevigate('/home')
    }
    const login=(key,value)=>{
        document.cookie=`${key}=${value}`
    }
  return (
    <div>
        <form onSubmit={submit}>
            <h3>Name</h3>
            <input type="text" placeholder='Name' onChange={(e)=>login('name',e.target.value)}/>
            <h3>UserName</h3>
            <input type="Text" placeholder='UserName' onChange={(e)=>login('username',e.target.value)}/>
            <h3>Email</h3>
            <input type="email" placeholder='Email' onChange={(e)=>login('email',e.target.value)}/>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login