import React from "react";
import BHD from "../../assets/img/bhd-star-cinema-logo.png";
import CNS from "../../assets/img/cns-cinema-logo.png";
import DDC from "../../assets/img/ddc-cinema-logo.png";
import MEGA from "../../assets/img/mega-cinema-logo.png";
import DCINE from "../../assets/img/dcine-cinema-logo.png";
import LOTTE from "../../assets/img/lotte-cinema-logo.png";

export default function Cinema() {
  return (
    <section className="tixCinema" id="tixCinema">
      <div className="linear container" />
      <div className="tixCinema-wrap container">
        <div className="row cinema-row">
          <div className="column-1">
            <div
              className="nav flex-column nav-tabs cinemaLogo"
              id="v-tab-1"
              role="tablist"
              aria-orientation="vertical"
            >
              {/* BHD CINEMA LOGO */}
              <a
                className="nav-link active "
                id="cinema-tab-1"
                data-toggle="tab"
                href="#cinema-tab-1-addr"
                role="tab"
                aria-controls="v-logo-1"
              >
                <img src={BHD} alt="cinema logo" />
              </a>
              {/* CNS CINEMA LOGO */}
              <a
                className="nav-link"
                id="cinema-tab-2"
                data-toggle="tab"
                href="#cinema-tab-2-addr"
                role="tab"
                aria-controls="v-logo-2"
              >
                <img src={CNS} alt="cinema logo" />
              </a>
              {/* DDC CINEMA LOGO */}
              <a
                className="nav-link"
                id="cinema-tab-3"
                data-toggle="tab"
                href="#cinema-tab-3-addr"
                role="tab"
                aria-controls="v-logo-3"
              >
                <img src={DDC} alt="cinema logo" />
              </a>
              {/* MEGA CINEMA LOGO*/}
              <a
                className="nav-link"
                id="cinema-tab-4"
                data-toggle="tab"
                href="#cinema-tab-4-addr"
                role="tab"
                aria-controls="v-logo-4"
              >
                <img src={MEGA} alt="cinema logo" />
              </a>
              {/* D CINEMA LOGO */}
              <a
                className="nav-link"
                id="cinema-tab-5"
                data-toggle="tab"
                href="#cinema-tab-5-addr"
                role="tab"
                aria-controls="v-logo-5"
              >
                <img src={DCINE} alt="cinema logo" />
              </a>
              {/* LOTTE CINEMA LOGO*/}
              <a
                className="nav-link"
                id="cinema-tab-6"
                data-toggle="tab"
                href="#cinema-tab-6-addr"
                role="tab"
                aria-controls="v-logo-6"
              >
                <img src={LOTTE} alt="cinema logo" />
              </a>
            </div>
          </div>
          <div className="column-2">
            <div className="tab-content" id="v-tabContent">
              {/* BHD CINEMA ADDRESS*/}
              <div
                className="tab-pane fade show active"
                id="cinema-tab-1-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-1"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-1-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-1.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>BHD Star</span> - Bitexco
                            </p>
                            <p className="address">
                              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                            </p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link-t"
                        id="cinema-addr-2"
                        data-toggle="tab"
                        href="#cinema-1-addr2"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>BHD Star</span> - Vincom Thảo Điền
                            </p>
                            <p className="address">
                              L5-Megamall, 159 XL Hà Nội, Q.2
                            </p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link-t"
                        id="cinema-addr-3"
                        data-toggle="tab"
                        href="#cinema-1-addr3"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-3.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>BHD Star</span>- Vincom 3/2
                            </p>
                            <p className="address">
                              L5-Vincom 3/2, 3C Đường 3/2, Q.10
                            </p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link-t"
                        id="cinema-addr-4"
                        data-toggle="tab"
                        href="#cinema-1-addr4"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-1.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>BHD Star</span> - Phạm Hùng
                            </p>
                            <p className="address">
                              L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh
                            </p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-1-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-5"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-5.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-5"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-6"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-6.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-6"
                          >
                            <div>
                              <p className="format">4D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cinema-1-addr2"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-2"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cinema-1-addr3"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-3"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cinema-1-addr4"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-4"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-bhd-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-bhd-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CNS CINEMA ADDRESS*/}
              <div
                className="tab-pane fade"
                id="cinema-tab-2-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-2"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-2-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>CNS</span> - Hai Bà Trưng
                            </p>
                            <p className="address">
                              135 Hai Bà Trưng, Bến Nghé, Q.1
                            </p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link-t"
                        id="cinema-addr-2"
                        data-toggle="tab"
                        href="#cinema-2-addr2"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>CNS</span> - Quốc Thanh
                            </p>
                            <p className="address">271 Nguyễn Trãi, Q.1</p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-2-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="cinema-2-addr2"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-2"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DDC CINEMA ADDRESS*/}
              <div
                className="tab-pane fade"
                id="cinema-tab-3-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-3"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-3-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>DDC</span> - Đống Đa
                            </p>
                            <p className="address">890 Trần Hưng Đạo, Q.5</p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-3-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Quỉ - Secrets of the Devils{" "}
                                </p>
                                <span className="minutes">
                                  100 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MEGA CINEMA ADDRESS*/}
              <div
                className="tab-pane fade"
                id="cinema-tab-4-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-4"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-3-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>DDC</span> - Đống Đa
                            </p>
                            <p className="address">890 Trần Hưng Đạo, Q.5</p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-3-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Quỉ - Secrets of the Devils{" "}
                                </p>
                                <span className="minutes">
                                  100 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* D CINEMA ADDRESS*/}
              <div
                className="tab-pane fade"
                id="cinema-tab-5-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-5"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-3-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>DDC</span> - Đống Đa
                            </p>
                            <p className="address">890 Trần Hưng Đạo, Q.5</p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-3-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Quỉ - Secrets of the Devils{" "}
                                </p>
                                <span className="minutes">
                                  100 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* LOTTE CINEMA ADDRESS*/}
              <div
                className="tab-pane fade"
                id="cinema-tab-6-addr"
                role="tabpanel"
                aria-labelledby="cinema-tab-5"
              >
                <div className="row cinema-addr">
                  <div className="column-3">
                    <div className="nav flex-column nav-tabs" id="v-tab-2">
                      <a
                        className="nav-link-t active"
                        id="cinema-addr-1"
                        data-toggle="tab"
                        href="#cinema-3-addr1"
                      >
                        <div className="item-addr">
                          <img
                            src="./img/bhd-star-cinema-2.jpg"
                            alt="cinema-1"
                          />
                          <div className="cinema-detail">
                            <p className="street">
                              <span>DDC</span> - Đống Đa
                            </p>
                            <p className="address">890 Trần Hưng Đạo, Q.5</p>
                            <button>[chi tiết]</button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="column-4">
                    <div className="tab-content" id="v-time-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="cinema-3-addr1"
                        role="tabpanel"
                        aria-labelledby="cinema-addr-1"
                      >
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-1.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Quỉ - Secrets of the Devils{" "}
                                </p>
                                <span className="minutes">
                                  100 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-1"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-2"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-2.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C18</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.3 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-2"
                          >
                            <div>
                              <p className="format">3D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>20:45</span> ~ 22:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-3"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-3.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age green">P</span> Bí Mật
                                  Của Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  95 phút - TIX 7.8 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-3"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>19:10</span> ~ 20:45
                                </a>
                                <a href="#random">
                                  <span>22:45</span> ~ 00:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* item movies */}
                        <div className="item-time">
                          <div className="movieName">
                            <a
                              data-toggle="collapse"
                              href="#movie-cns-4"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <img src="./img/cinema-film-4.png" alt="film" />
                              <div className="detail">
                                <p>
                                  <span className="age">C16</span> Bí Mật Của
                                  Gió - Secrets of the Wind{" "}
                                </p>
                                <span className="minutes">
                                  110 phút - TIX 7.5 - IMDb 0
                                </span>
                              </div>
                            </a>
                          </div>
                          <div
                            className="collapse movieName-collapse show"
                            id="movie-cns-4"
                          >
                            <div>
                              <p className="format">2D Digital</p>
                              <div className="movieShowtimes">
                                <a href="#random">
                                  <span>18:10</span> ~ 21:45
                                </a>
                                <a href="#random">
                                  <span>17:00</span> ~ 20:20
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="linear container" />
    </section>
  );
}
