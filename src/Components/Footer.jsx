import React from 'react'


export default function Footer() {
  return (
    <>
      <footer className='background text-light pt-5 pb=4'>
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className='text-uppercase front-weight-bold text-light'>Nawaz india</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur, ut sunt perferendis dignissimos maxime? Nam vel consequuntur dolor ipsum.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className='text-uppercase mb-4 font-weight bold text-light'>Used </h5>
              <p>
                <a href='#' className='provider text-light'>HTML</a>
              </p>
              <p>
                <a href='#' className='provider text-light'> CSS</a>
              </p>
              <p>
                <a href='#' className='provider text-light'>JavaScript</a>
              </p>
              <p>
                <a href='#' className='provider text-light'>JSX</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className='text-uppercase mb-4 font-weight-bold text-light'>Useful Tools</h5>
              <p>
                <a href='#' className='provider text-light'>Bootstrap</a>
              </p>
              <p>
                <a href='#' className='provider text-light'>Googe icons</a>
              </p>
              <p>
                <a href='#' className='provider text-light'>Material UI</a>
              </p>
              <p>
                <a href='#' className='provider text-light'>W3 School</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className='text-uppercase mb-4 font-weight-bold text-light'>Contact</h5>
              <p>
                <i className="fa fa-home"></i>Sangham Vihar, New Delhi
              </p>
              <p>
                <i className="fa fa-envelope"></i>ashahnawaz456@gmail.com
              </p>
              <p>
                <i className="fa fa-phone"></i>+91 7014737271
              </p>

            </div>
          </div>
          <hr className='mb-1' />
          <div className="copy col-md-4 col-lg-5">
            <p>Copyright @2022 All rights reserved by:
              <a href='#'>
                <strong className='text-light'>nawaz.in</strong>
              </a>
            </p>
          </div>
          {/* <div className="col-md-5 col-lg-4 "> */}
          {/* <div className="text-center text-md-right"> */}
<div className="row_left">
          <ul className='list-unstyled list-inline'>
            <li className='list-inline-item'>
              <a href='#' className='btn-floating btn-sm text-light'><i className="fa fa-facebook"></i></a>
            </li>
            <li className='list-inline-item'>
              <a href='#' className='btn-floating btn-sm text-light'><i className="fa fa-linkedin"></i></a>
            </li>
            <li className='list-inline-item'>
              <a href='#' className='btn-floating btn-sm text-light'><i className="fa fa-twitter"></i></a>
            </li>
            <li className='list-inline-item'>
              <a href='#' className='btn-floating btn-sm text-light'><i className="fa fa-instagram"></i></a>
            </li>
          </ul>

          {/* </div> */}
          {/* </div> */}
        </div>
        </div>
      </footer>
    </>
  )
}
