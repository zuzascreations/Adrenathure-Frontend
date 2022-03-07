import React, { Suspense } from "react"
import Slider from "react-slick"
import useFetch from "./useFetch"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Header.css'
import Loading from "./Loading"


function CarouselSlick() {
  const experiences = useFetch('http://localhost:3000/experiences')
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider autoplay adaptiveHeight {...settings}>
      <div>
        <img className='fotitos' src={`http://localhost:3000/${experiences[0].experiencePhoto}`} alt='foto experiencia'></img>
      </div>
      <div>
        <img className='fotitos' src={`http://localhost:3000/${experiences[1].experiencePhoto}`} alt='foto experiencia'></img>
      </div>
      <div>
        <img className='fotitos' src={`http://localhost:3000/${experiences[2].experiencePhoto}`} alt='foto experiencia'></img>
      </div>
      <div>
        <img className='fotitos' src={`http://localhost:3000/${experiences[3].experiencePhoto}`} alt='foto experiencia'></img>
      </div>

    </Slider>
  )
}
const CarouselSlickWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <CarouselSlick />
  </Suspense>

export default CarouselSlickWrapper
