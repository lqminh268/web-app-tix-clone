import React, { useEffect, useState } from "react";
import playVid from "../../assets/img/play-video.png";
import filmStar from "../../assets/img/film-star.png";
import filmStarHalf from "../../assets/img/film-star-half.png";
import filmDatTruoc from "../../assets/img/film-datruoc.png";
import filmPromo from "../../assets/img/film-promo.png";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import Nextarrows from "./NextArrows";
import Prearrows from "./PreArrows";
import createAction from "redux/Actions";
import { MA_HE_THONG_RAP } from "redux/Constants/MovieConstants";
import { useDispatch } from "react-redux";
import ModalVideo from "react-modal-video";
const settings = {
  className: "filmsOnShowCarrousel",
  centerMode: false,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  nav: true,
  slidesPerRow: 4,
  nextArrow: <Nextarrows />,
  prevArrow: <Prearrows />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 2,
        infinite: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        slidesPerRow: 1,
        infinite: false,
      },
    },
  ],
};

export default function SlickMovie(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    dispatch(
      createAction(MA_HE_THONG_RAP, {
        isRender: false,
        ngayChieuGioChieu: "",
        maHeThongRap: "",
      })
    );
  });

  const renderMovie = () => {
    return data.map((items, index) => {
      let url = items.trailer.substring(30);
      return (
        <div key={index} className="item-wrap">
          <div className="movie-item">
            {/* Content */}
            <div className="movie-content">
              <div className="movie-img">
                <img src={items.hinhAnh} alt="film" />
                {/* LInear */}
                <div className="linear">
                  <button
                    type="button"
                    className="btn-play-trailer"
                    data-src="https://www.youtube.com/embed/wuAzIeMx1Ck"
                  >
                    <img
                      src={playVid}
                      onClick={() => {
                        setOpen(true);
                        setTrailer(url);
                      }}
                      alt="play-trialer"
                    />
                  </button>
                </div>
              </div>
              <div className="movie-detail">
                {items.danhGia <= 5 ? (
                  <p>
                    <span className="age green">P</span> {items.tenPhim}
                  </p>
                ) : (
                  <p>
                    <span className="age">C18</span> {items.tenPhim}
                  </p>
                )}
                <span className="minutes">120 phút</span>
                {/* when hover */}
                <div className="bookTicket">
                  <NavLink to={`/detail/${items.maPhim}`} type="button">
                    MUA VÉ
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Starts */}
            <div className="start">
              <a href="#random">
                <h4>{items.danhGia}</h4>
                {items.danhGia === 10 ? (
                  <p>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                  </p>
                ) : (
                  <p>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStar} alt="start" />
                    </span>
                    <span>
                      <img src={filmStarHalf} alt="start" />
                    </span>
                  </p>
                )}
              </a>
            </div>
            {/* promo */}
            <div className="promo">
              {items.danhGia <= 5 ? (
                <img src={filmPromo} alt="dat truoc" />
              ) : (
                <img src={filmDatTruoc} alt="dat truoc" />
              )}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="tixCarousel" id="tixCarousel">
      <div className="tixCarrousel__wrap container">
        <ul
          className="nav nav-tabs tixCaroulselTab"
          id="tixCaroulselTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#tixDangChieu"
              role="tab"
              aria-controls="home"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#tixSapChieu"
              role="tab"
              aria-controls="profile"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tixCaroulselTabContent">
          <div
            className="tab-pane fade show active"
            id="tixDangChieu"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {data != null && data.length > 0 && (
              <Slider {...settings}>{renderMovie()}</Slider>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="tixSapChieu"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
           {data != null && data.length > 0 && (
              <Slider {...settings}>{renderMovie()}</Slider>
            )}
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={trailer}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
