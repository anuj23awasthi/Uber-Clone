import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UseLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const[userData, setUserData] = useState({})

  const submitHandler = (e) => {
     e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
        console.log(userData);
     setEmail('')
     setpassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png?20180914002846'></img>

<form onSubmit={(e) => {
  submitHandler(e)
}}>
    <h3 className='txt-lg font-medium mb-2'>What's your email</h3>
    <input
     required 
     value={email}
     onChange={(e) => {
      setEmail(e.target.value)
     }}
     className='bg-[#eeeeee]  mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     type ="email" placeholder = 'Enter your Email-Id'
     />
    <h3 className='txt-lg font-medium mb-2'>Enter Password</h3>
    <input
    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     value={password}
     onChange={(e) => {
      setpassword(e.target.value)
     }}
     required type ="password" placeholder = 'Enter your Password'
     />   
    <button
    className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
    >Login</button>

   <p className='text-center'>New here? <Link to ='/signup' className='text-blue-600'>Create new Account</Link></p>
</form>
      </div>
      <div>
        <Link to = '/captain-login'
        className='bg-[#10b461] flex items-center  justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UseLogin