import React, { useState } from 'react'
import { Link } from 'react-router-dom';



export default function Login() {
  var [data, setdata] = useState(
    {
      username: "",
      password: ""
    }
  )
  function getData(e) {
    var name = e.target.name
    // console.log(name);
    var value = e.target.value
    // console.log(value);

    setdata((old) => {
      return {
        ...old, 
        [name]: value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    alert(`
    username:${data.username}
    password:${data.password}`)
  }

  return (
    <>
      
      <h3 className='text-light text-center p-1 background my-10px'>Login Section</h3>
      <div className="container-fluid background_image ">
        <div className=' w-50 m-auto' >
          
          <form className='form_background' onSubmit={postData}>
            <div className='text-center mb-3 w-100' >
             
              <input className='m-2 w-50' type='text ' name='username' id='username' onChange={getData} placeholder='Enter username :' ></input>
              <br />
             
              <input className='m-2 w-50' type='password' name='password' id='password' onChange={getData} placeholder='Enter password :' ></input>
              <br /> <br />
              <button type='submit' className='w-50 background text-light'>Login</button>
            </div>
            <div>
              <Link className='logins text-uppercase text-primary ' to='/sign-up'>Registration?New User</Link>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}
