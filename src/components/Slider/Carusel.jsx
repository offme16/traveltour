import React from 'react';
import style from "./Carusel.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vid1 from '../../assets/img/vid-1.mp4';
import vid2 from '../../assets/img/vid-2.mp4';
import vid3 from '../../assets/img/vid-3.mp4';
import vid4 from '../../assets/img/vid-4.mp4';
import vid5 from '../../assets/img/vid-5.mp4';
const Carusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={style.section}>
       <div className={style.content}>
        <h3>Незабываемые путешевствия</h3>
        <p>Откройте для себя новые места, путешевствуя вместе с нами</p>
        </div>
    <Slider {...settings}>
      <div>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={vid2} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={vid3} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={vid4} type="video/mp4" />
        </video>
      </div>
      <div>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={vid5} type="video/mp4" />
        </video>
      </div>
    </Slider>
    </div>

  );
};

export default Carusel;
