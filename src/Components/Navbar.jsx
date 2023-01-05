import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg background">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 width" >

              <li className="nav-item dropdown width">
                <Link className="nav-link text-light " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="material-symbols-outlined">
                    menu
                  </span>

                </Link>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/" >Home</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  

                  <li><Link className="dropdown-item" to="/image-gallary">Gallary</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="contact-us">Contact</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="log-in">Login/Sign up</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="image-gallary">Gallary</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="contact-us">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex w-50 " role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />


              <button className="btn btn-outline-light" type="submit"><span className="material-symbols-outlined">
                search
              </span></button>
            </form>


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown" >
                <Link className="nav-link text-light hover " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                </Link>
                <ul className="dropdown-menu" >
                  <li><Link className="dropdown-item" to="#">Shah Nawaz</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="https://github.com/ShahNawazgithub" target="blank">Github</Link></li>
                  <li><Link className="dropdown-item" to="https://www.linkedin.com/in/shah-nawaz-998b21203/" target="blank">LinkedIn</Link></li>
                </ul>
              </li>
            </ul>


          </div>
        </div>
      </nav>


    </>
  )
}
