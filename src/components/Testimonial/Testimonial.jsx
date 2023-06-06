import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import Slider from "react-slick";
import { useEffect, useState } from "react";

import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
import Loading from "../Loading/Loading";

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_API_URL + "/testimonials?populate=*",
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );
        setLoading(false);
        setTestimonials(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTestimonials();
  }, [loading]);

  const setting = {
    Infinite: true,
    LayzyLoad: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
    beforeChange: (current, next) => setActive(next),
  };
  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container">
      <SectionHeading title="TRUSTED ME" subTitle="REVIEW FROM CLIENTS" />
      <Slider {...setting}>
        {testimonials?.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index == active
                ? " duration-300 transition-all"
                : "opacity-30 scale-75 duration-300"
            }`}
          >
            <TestimonialsCard key={item.id} item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
