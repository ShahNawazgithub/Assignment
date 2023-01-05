import React, { useState } from 'react'

export default function Contact() {
    var [details, setdetails] = useState(
        {
            name: "",
            email: "",
            subject: "",
            Message: ""
        }
    )
    function getDetails(e) {
        var name = e.target.name
        var value = e.target.value
        setdetails((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function Collect_details(e) {
        e.preventDefault()
        alert(`
        Name:${details.name}
        E-mail:${details.email}
        Subject:${details.subject}
        Message:${details.Message}
              `)
    }
    return (
        <>
            {/* <h2 className='heading'> Get in touch </h2> */}
            <h3 className='text-light text-center p-1 background my-10px'>Get in touch</h3>
            <div className="form_area">
                <div className="container">
                        <div className="col-sm-12 col-log-6">
                            <div className="right">
                                <form className='form_left' onSubmit={Collect_details} >
                                    <div class="mb-3">
                                        <label  >Name :</label>
                                        <input type="text" class="mydiv w-100" name='name' id="name" onChange={getDetails} placeholder='Full name :' />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" >E-mail :</label>
                                        <input type="email" class="mydiv w-100" name="email" id="email" onChange={getDetails} placeholder='E-mail Address :' />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" >Subject :</label>
                                        <input type="text" class="mydiv w-100" name='subject' id="subject" onChange={getDetails} placeholder='Subject :' />
                                    </div>
                                    <div class="mb-3">
                                        <label  >Message :</label>
                                        <textarea class="mydiv w-100" name="Message" id="Message" onChange={getDetails} placeholder='Message :' ></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-dark w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
          
        </>
    )
}
