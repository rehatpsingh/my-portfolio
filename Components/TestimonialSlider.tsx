import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slideToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slideToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slideToSlide: 1
  }
};

const TestimonialSlider = () => {
  return (
    <Carousel additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'>

    {/* ClientReview */}
    <ClientReview image="/images/c1.jpg" name="Rehat Dhingra" role="Web Developer"></ClientReview>
    <ClientReview image="/images/c2.jpg" name="Dhingra" role="Mern Stack Developer"></ClientReview>
    <ClientReview image="/images/c1.jpg" name="Samarth Argade" role="React Developer"></ClientReview>
    <ClientReview image="/images/c2.jpg" name="Akhil Kumar" role="Full Stack Developer"></ClientReview>
</Carousel>
  )
}

export default TestimonialSlider
