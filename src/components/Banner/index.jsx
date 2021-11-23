import React, { useState } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import Dropdown from "components/Dropdown";

const listCarousel = [
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/oi-troi-oi-16167488704232.jpg",
    trailer: "6K4RpziVwuA",
  },
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png",
    trailer: "jluSu8Rw6YE",
  },
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/chaos-walking-16158835840511.jpg",
    trailer: "UIrGxHhdqXo",
  },
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/minari-16158836515210.jpg",
    trailer: "z4bqat8idns",
  },
  {
    hinhAnh: "https://s3img.vcdn.vn/123phim/2021/03/an-quy-16170973985377.png",
    trailer: "1ZMmdjgarK8",
  },
];

const settings = {
  className: "tixCarrousel",
  // autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(false);
  return (
    <section className="bannerTix" id="carousel">
      <div className="bannerTix__wrap">
        <div className="banner__img">
          <Slider {...settings}>
            {listCarousel.map((carousel, index) => {
              return (
                <div className="item" key={index}>
                  <a href="/#!">
                    <img src={carousel.hinhAnh} alt="true" />
                  </a>
                  <div className="backgroundLinear"></div>
                  <div className="play">
                    <img
                      src="http://tix.vn/app/assets/img/icons/play-video.png"
                      alt="true"
                      onClick={() => {
                        setOpen(true);
                        setTrailer(carousel.trailer);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <Dropdown />
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay
        videoId={trailer}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
