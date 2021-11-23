import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import moblieApp from "../../assets/img/app-mobile-img.png";
import appSlide1 from "../../assets/img/app-slide-1.jpg";
import appSlide2 from "../../assets/img/app-slide-2.jpg";
import appSlide3 from "../../assets/img/app-slide-3.jpg";
import appSlide4 from "../../assets/img/app-slide-4.jpg";
import appSlide5 from "../../assets/img/app-slide-5.jpg";
import appSlide6 from "../../assets/img/app-slide-6.jpg";
import appSlide7 from "../../assets/img/app-slide-7.jpg";
import appSlide8 from "../../assets/img/app-slide-8.jpg";
import appSlide9 from "../../assets/img/app-slide-9.jpg";

export default function TixApp() {
  return (
    <section className="tixApp" id="tixApp">
      <div className="tixApp-wrap container">
        <div className="app-item app-left">
          <h1>
            Ứng dụng tiện lợi dành cho <br />
            người yêu điện ảnh
          </h1>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <button type="button">App miễn phí - Tải về ngay!</button>
          <p className="down">
            TIX có hai phiên bản &nbsp;
            <a href="#radom">iOS</a> &amp;&nbsp;
            <a href="#random">Android</a>
          </p>
        </div>
        <div className="app-item app-right">
          <div className="phone-img">
            <img src={moblieApp} alt="mobile img" />
            <div className="slide-img">
              <OwlCarousel
                loop
                nav={false}
                items={1}
                dots={false}
                autoplay
                autoplayTimeout={3000}
                className="tixAppCarousel owl-carousel owl-theme"
              >
                <div className="item">
                  <img src={appSlide1} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide2} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide3} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide4} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide5} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide6} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide7} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide8} alt="img" />
                </div>
                <div className="item">
                  <img src={appSlide9} alt="img" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
