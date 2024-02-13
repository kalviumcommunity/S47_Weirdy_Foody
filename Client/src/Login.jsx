import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate = useNavigate()
    
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/')
            .then(res => {
                login('token', res.data)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    const login = (key, value) => {
        document.cookie=`${key}=${value}`
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h3>Name</h3>
                <input type="text" placeholder='Name' onChange={(e) => (login('name', e.target.value))} />
                <h3>UserName</h3>
                <input type="text" placeholder='UserName' onChange={(e) => (login('username', e.target.value))} />
                <h3>Email</h3>
                <input type="email" placeholder='Email' onChange={(e) => (login('email', e.target.value))} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
