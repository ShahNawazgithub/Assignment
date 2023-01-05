import React from 'react'

export default function Home() {
  return (
    <>
    <h3 className='text-light text-center p-1 background'>Slider</h3>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/483596081/photo/extreme-close-up-of-ripe-strawberries.jpg?b=1&s=170667a&w=0&k=20&c=afp6HgRdKhUTmCvaJXj-SNHtBdCZOo8b_ci5_GLwRoQ=" className="d-block w-100" width="180px" height="400px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?b=1&s=170667a&w=0&k=20&c=HALMriAeUNo9ARz6wFS1Lg51rt6hdVZxRtc_ffwxefc=" className="d-block w-100" width="180px" height="400px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src=" https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="d-block w-100" width="180px" height="400px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}


