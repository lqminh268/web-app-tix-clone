import React from "react";
import zion from 'assets/img/footer-zion-logo.jpg'
import baohanh from 'assets/img/footer-thongbao-img.png'

export default function index() {
  return (
      <footer>
        <div className="footer-wrap container">
          <div className="footer-item footer-zion">
            <img src={zion} alt="zion" />
          </div>
          <div className="footer-item footer-about">
            <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>
              Số Điện Thoại (Hotline): 1900 545 436 <br /> Email:{" "}
              <a href="#email">support@tix.vn</a>
            </p>
          </div>
          <div className="footer-item footer-baohanh">
            <a href="#baohanh">
              <img src={baohanh} alt="" />
            </a>
          </div>
        </div>
      </footer>
  );
}
