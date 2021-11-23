import React from "react";
import news1 from "../../assets/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg";
import news2 from "../../assets/img/new2.jpg";
import news3 from "../../assets/img/news-1.png";
import news4 from "../../assets/img/new4.jpg";
import news5 from "../../assets/img/news-small-1.png";
import news6 from "../../assets/img/news-small-2.png";
import news7 from "../../assets/img/new5.jpg";
import news8 from "../../assets/img/new6.png";

import news9 from "../../assets/img/new9.png";
import news10 from "../../assets/img/new10.png";
import news11 from "../../assets/img/new11.png";
import news12 from "../../assets/img/new12.png";
import news13 from "../../assets/img/new13.png";
import news14 from "../../assets/img/new14.jpg";
import news15 from "../../assets/img/new15.jpg";
import news16 from "../../assets/img/new16.jpg";

import news17 from "../../assets/img/new17.jpg";
import news18 from "../../assets/img/new18.jpg";
import news19 from "../../assets/img/new19.png";
import news20 from "../../assets/img/new20.jpg";
import news21 from "../../assets/img/new21.png";
import news22 from "../../assets/img/new22.jpg";
import news23 from "../../assets/img/new23.jpg";
import news24 from "../../assets/img/new24.jpg";



import like from "../../assets/img/like.png";
import comment from "../../assets/img/comment.png";

export default function News() {
  return (
    <section className="tixNews" id="tixNews">
      <div className="news-wrap container">
        <ul className="nav nav-tabs newsTab" id="newsTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#news24h"
              role="tab"
              aria-controls="home"
            >
              Điện Ảnh 24h
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#newsReview"
              role="tab"
              aria-controls="profile"
            >
              Review
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#newsPromo"
              role="tab"
              aria-controls="contact"
            >
              Khuyến Mãi
            </a>
          </li>
        </ul>
        <div className="tab-content newsTabContent" id="newsTabContent">
          <div
            className="tab-pane fade show active"
            id="news24h"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="news-top">
              <div className="news-item top-left">
                <img src={news1} alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                  </h2>
                  <p className="intro">
                    Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
                    sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim
                    mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt
                    Nam!
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>2</span>
                    </p>
                    <p className="comment">
                      <img src={comment} alt="comment" />
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-item top-right">
                <img src={news2} alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                  </h2>
                  <p className="intro">
                    Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                    độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương
                    tại 360 Giải Phóng!
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>2</span>
                    </p>
                    <p className="comment">
                      <span>
                        <img src={comment} alt="comment" />
                      </span>
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-bot">
              <div className="bot-item bot-left">
                <div className="news-item top-left">
                  <img src={news3} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC
                    </h2>
                    <p className="intro">
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                      triệu đồng.
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>2</span>
                      </p>
                      <p className="comment">
                        <img src={comment} alt="comment" />
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-item top-right">
                  <img src={news4} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC
                    </h2>
                    <p className="intro">
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                      triệu đồng.
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>2</span>
                      </p>
                      <p className="comment">
                        <span>
                          <img src={comment} alt="comment" />
                        </span>
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-item bot-right">
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news7} alt="news" />
                  <p>
                    {" "}
                    Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu
                    doanh thu tại Hàn Quốc mùa dịch
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news5} alt="news" />
                  <p>
                    {" "}
                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                    Christopher Nolan
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news6} alt="news" />
                  <p>
                    {" "}
                    Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                    vé' xứ Hàn
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news8} alt="news" />
                  <p>
                    6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình
                    đám nhất Hollywood
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="newsReview"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="news-top">
              <div className="news-item top-left">
                <img src={news9} alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                  </h2>
                  <p className="intro">
                    Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>0</span>
                    </p>
                    <p className="comment">
                      <img src={comment} alt="comment" />
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-item top-right">
                <img src={news10} alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    Review: Dinh Thự Oan Khuất (Ghost Of War)
                  </h2>
                  <p className="intro">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                    Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>0</span>
                    </p>
                    <p className="comment">
                      <span>
                        <img src={comment} alt="comment" />
                      </span>
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-bot">
              <div className="bot-item bot-left">
                <div className="news-item top-left">
                  <img src={news11} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                    </h2>
                    <p className="intro">
                      Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                      của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt
                      chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm
                      nay.
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>0</span>
                      </p>
                      <p className="comment">
                        <img src={comment} alt="comment" />
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-item top-right">
                  <img src={news12} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      American Sniper - Chính nghĩa hay phi nghĩa?
                    </h2>
                    <p className="intro">
                      American Sniper khắc họa một tay súng bắn tỉa “huyền
                      thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông.
                      Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc
                      khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập
                      quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ
                      nhàng...
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>0</span>
                      </p>
                      <p className="comment">
                        <span>
                          <img src={comment} alt="comment" />
                        </span>
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-item bot-right">
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news13} alt="news" />
                  <p>Review: Spider-Man: Into The Spider-Vesre</p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news14} alt="news" />
                  <p>
                    COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news15} alt="news" />
                  <p>
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news16} alt="news" />
                  <p>
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="newsPromo"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="news-top">
              <div className="news-item top-left">
                <img src={news17} alt="news" />
                <div className="news-info">
                  <h2 className="title">BHD 59K/VÉ CẢ TUẦN !!!</h2>
                  <p className="intro">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>1</span>
                    </p>
                    <p className="comment">
                      <img src={comment} alt="comment" />
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-item top-right">
                <img src={news18} alt="news" />
                <div className="news-info">
                  <h2 className="title">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h2>
                  <p className="intro">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                    02 voucher thanh toán ZaloPay thả ga
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src={like} alt="like" />
                      <span>1</span>
                    </p>
                    <p className="comment">
                      <span>
                        <img src={comment} alt="comment" />
                      </span>
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-bot">
              <div className="bot-item bot-left">
                <div className="news-item top-left">
                  <img src={news19} alt="news" />
                  <div className="news-info">
                    <h2 className="title">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h2>
                    <p className="intro">
                      ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và
                      Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé
                      qua TIX.
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>4</span>
                      </p>
                      <p className="comment">
                        <img src={comment} alt="comment" />
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-item top-right">
                  <img src={news20} alt="news" />
                  <div className="news-info">
                    <h2 className="title">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h2>
                    <p className="intro">
                      Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                      giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay
                      hoặc Mục Vé Phim trên ZaloPay.
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={like} alt="like" />
                        <span>0</span>
                      </p>
                      <p className="comment">
                        <span>
                          <img src={comment} alt="comment" />
                        </span>
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-item bot-right">
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news21} alt="news" />
                  <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news22} alt="news" />
                  <p>
                    [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                    Trai Yêu Quái
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news23} alt="news" />
                  <p>
                    [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                    Sư Mù: Ai Chết Giơ Tay
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src={news24} alt="news" />
                  <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showMore">
          <button type="button">XEM THÊM</button>
        </div>
      </div>
    </section>
  );
}
