import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
   const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const [UserData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName : {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
      console.log(UserData);
      setEmail('')
      setFirstName('')
      setlastName('')
      setpassword('')
  
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-20 mb-2' src='https://www.svgrepo.com/show/505031/uber-driver.svg'></img>

<form onSubmit={(e) => {
submitHandler(e)
}}>

<h3 className='txt-base w-full font-medium mb-2'>What's our Captain's name</h3>
<div className='flex gap-4 mb-6'>
<input
   required
   className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
   type ="text" placeholder = 'First-Name'
   value={firstName}
   onChange={(e)=>{
    setFirstName(e.target.value)
   }}
   />
   <input
   required
   className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
   type ="text" placeholder = 'Last-Name'
   value={lastName}
   onChange={(e)=>{
    setlastName(e.target.value)
   }}
   />
</div>


  <h3 className='txt-base w-full font-medium mb-2'>What's our Captian's Email</h3>
  <input
   required
   value={email}
   onChange={(e)=>{
    setEmail(e.target.value)
   }}
   className='bg-[#eeeeee]  mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
   type ="email" placeholder = 'Enter your Email-Id'
   />
  <h3 className='txt-base font-medium mb-2'>Enter Password</h3>
  <input
  className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
  value={password}
  onChange={(e)=>{
   setpassword(e.target.value)
  }}
   required type ="password" placeholder = 'Enter your Password'
   />   
  <button
  className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'
  >Login</button>
</form>
 <p className='text-center'>Already have an account? <Link to ='/captain-login' className='text-blue-600'>Login here</Link></p>

    </div>
    <div>
    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the<span className='underline'> Google Privacy Policy and <span className='underline'>Terms of Service apply</span>.</span></p>
    </div>
  </div>
  )
}

export default CaptainSignup

