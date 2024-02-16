import React from 'react'
import logo from './logo.jpg'
import logo1 from './logo1.jpg'
import logo2 from './logo2.jpg'
function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={logo}
              height={'300px'}
              class="d-block w-100 chart"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src={logo1} height={'300px'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={logo2} height={'300px'} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

export default Slider
