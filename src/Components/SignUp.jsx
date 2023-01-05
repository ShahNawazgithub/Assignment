import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  var [data, setdata] = useState(
    {
      name:"",
      email:"",
      phone:"",  
      password: "",
      cpassword:""
    }
  )
  function getData(e) {
    var name = e.target.name
    var value = e.target.value
       
    setdata((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    // alert(`Name:${data.name}
    //  Email:${data.email}
    //  Phone:${data.phone}
    // password:${data.password}`)
    if(data.password === data.cpassword){
        alert(`
    Name:${data.name}
    Email:${data.email}
    Phone:${data.phone}
    password:${data.password}
    `)
    // console.log(alert);
    }
    else
       alert("password and confirm password doesn't matched!!!")  
  }
  return (
    <>
      {/* <h1>{data.username}</h1> */}
      <div className="container-fluid background_image ">
        <div className=' w-50 m-auto' >
          <h5 className='text-dark text-center p-3 '> Sign Section</h5>
          <form className='form_background' onSubmit={postData}>
            <div className='text-center mb-3 w-100' >
              <input className='m-2 w-50' type='text ' name='name' id='name' onChange={getData} placeholder='Enter Full Name :' ></input>
              <br />
              <input className='m-2 w-50' type='email ' name='email' id='email' onChange={getData} placeholder='E-mail/username :' ></input>
              <br />
              <input className='m-2 w-50' type='text ' name='phone' id='phone' onChange={getData} placeholder='Enter Phone Number :' ></input>
              <br />
              <input className='m-2 w-50' type='password' name='password' id='password' onChange={getData} placeholder='Enter password :' ></input>
              <br />
              <input className='m-2 w-50' type='password' name='confirm password' id='confirm password' onChange={getData} placeholder='Confirm password :' ></input>
              <br /> 
              <button type='submit' className='w-50 background text-light'>Sign Up</button>
            </div>
          </form>
       
              <Link className='logins text-uppercase text-primary' to='/log-in'>Already Exist?Login to your Account</Link>
            </div>
     
      </div>
      
    </>
  )
}
