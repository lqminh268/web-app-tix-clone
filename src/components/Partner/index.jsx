import React from "react";
import partner1 from "../../assets/img/contact-icon-1.png";
import partner2 from "../../assets/img/contact-icon-2.png";
import partner3 from "../../assets/img/contact-icon-3.png";
import partner4 from "../../assets/img/contact-icon-4.png";
import partner5 from "../../assets/img/contact-icon-5.png";
import partner6 from "../../assets/img/contact-icon-6.png";
import partner7 from "../../assets/img/contact-icon-7.jpg";
import partner8 from "../../assets/img/contact-icon-8.png";
import partner9 from "../../assets/img/contact-icon-9.png";
import partner10 from "../../assets/img/contact-icon-10.jpg";
import partner11 from "../../assets/img/contact-icon-11.png";
import partner12 from "../../assets/img/contact-icon-12.png";
import partner13 from "../../assets/img/contact-icon-13.png";
import partner14 from "../../assets/img/contact-icon-14.jpg";
import partner15 from "../../assets/img/contact-icon-15.png";
import partner16 from "../../assets/img/contact-icon-16.png";
import partner17 from "../../assets/img/contact-icon-17.png";
import partner18 from "../../assets/img/contact-icon-18.png";
import partner19 from "../../assets/img/contact-icon-19.png";
import partner20 from "../../assets/img/contact-icon-20.png";
import apple from "../../assets/img/contact-apple-icon.png";
import android from "../../assets/img/contact-android-icon.png";
import facebook from "../../assets/img/contact-facebook-icon.png";
import zalo from "../../assets/img/contact-zalo-icon.png";


export default function index() {
  return (
    <section className="tixContact">
      <div className="contact-wrap container">
        <div className="contact-item">
          <h4>TIX</h4>
          <a href="#!" >FAQ</a>
          <a href="#!" >Brand Guidelines</a>
        </div>
        <div className="contact-item">
          <h4 className="align">align</h4>
          <a href="#!" >Thỏa thuận sử dụng</a>
          <a href="#!" >Chính sách bảo mật</a>
        </div>
        <div className="contact-item contact-partner">
          <h4>ĐỐI TÁC</h4>
          <div className="partner-wrap">
            <div className="partner bg-w">
              <img src={partner1} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner2} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner3} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner4} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner5} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner6} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner7} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner8} alt="partner" />
            </div>
            <div className="partner">
              <img src={partner9} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner10} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner11} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner12} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner13} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner14} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner15} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner16} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner17} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner18} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner19} alt="partner" />
            </div>
            <div className="partner">
              <img  src={partner20} alt="partner" />
            </div>
          </div>
        </div>
        <div className="contact-item mobile-app">
          <h4>MOBILE APP</h4>
          <a href="#random">
            <img src={apple} alt="ios" />
          </a>
          <a href="#random">
            <img src={android} alt="android" />
          </a>
        </div>
        <div className="contact-item contact-social">
          <h4>SOCIAL</h4>
          <a href="#random">
            <img src={facebook} alt="FB" />
          </a>
          <a href="#random">
            <img src={zalo} alt="Zalo" />
          </a>
        </div>
      </div>
    </section>
  );
}
