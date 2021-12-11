import React from "react";
import styles from "./Slide.module.scss";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMedia from "../../Hooks/useMedia";

const Slide = ({ modalPhoto }) => {
  const { arrayDemos } = modalPhoto;
  const mobile = useMedia("(max-width: 71.125rem)");

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--primary-theme-3)",
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          right: "-20px",
          boxShadow: "0 2px 3px 0 rgb(0 0 0 / 50%)",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--primary-theme-3)",
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          left: "-20px",
          boxShadow: "0 2px 3px 0 rgb(0 0 0 / 50%)",
          zIndex: "99",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.slideShow}>
      <Slider {...settings}>
        {arrayDemos.map((photo, index) => (
          <div key={index} className={styles.slickSlider}>
            <Image
              width={600}
              height={480}
              quality={100}
              src={photo.demo.url}
              alt={photo.title}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMzi88CAAEpgIO6+Q+4wAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
