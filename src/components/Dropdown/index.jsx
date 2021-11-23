import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchMovieDetail } from "redux/Actions/MovieActions";
import Swal from "sweetalert2";

export default function Dropdown() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movieInformation = useSelector(
    (state) => state.movieReducers.movieInformation
  );
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const theatersInfor = useSelector(
    (state) => state.movieTheaterReducers.theatersInfor
  );

  const [select, setSelect] = useState({
    maPhim: "",
    maCumRap: "",
    maLichChieu: "",
    ngayChieu: "",
    suat: "",
  });
  const [infor, setInfor] = useState({
    tenPhim: "",
    tenCumRap: "",
  });

  const handleMovieName = (tenPhim, maPhim) => (e) => {
    e.preventDefault()
    setInfor({ ...infor, tenPhim: tenPhim, tenCumRap: "" });
    dispatch(fetchMovieDetail(maPhim));
  };

  const handleCheckout = () => {
    if (select.maLichChieu) {
      return history.push(`/checkout/${select.maLichChieu}`);
    } else {
      Swal.fire({
        title: "Oops !!!",
        text: "Bạn Chưa Chọn Suất Chiếu !!!",
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  const handleMovieTheater = (tenCumRap, maCumRap) => (e) => {
    e.preventDefault()
    setInfor({ ...infor, tenCumRap: tenCumRap });
    setSelect({ ...select, maCumRap: maCumRap, ngayChieu: "", suat: "" });
    return movieDetail.heThongRapChieu?.find((items) => {
      return items.cumRapChieu.find((child) => {
        if (child.maCumRap === maCumRap) {
          return localStorage.setItem("maHeThongRap", items.maHeThongRap);
        } else {
          return null;
        }
      });
    });
  };

  const handleMovieDay = (ngayChieu) => (e) => {
    e.preventDefault()
    setSelect({ ...select, ngayChieu: ngayChieu, suat: "" });
  };

  const handleMovieShowtime = (suat, ngayChieuGioChieu) => (e) => {
    e.preventDefault()
    setSelect({ ...select, suat: suat, maLichChieu: ngayChieuGioChieu });
  };

  const renderDate = () => {
    let res = [];
    let unique = null;
    let output = [];
    if (select.maCumRap) {
      return theatersInfor?.map((item) => {
        return item?.cumRapChieu.map((item) => {
          if (item.maCumRap === select.maCumRap) {
            for (let i = 0; i < item.lichChieuPhim.length; i++) {
              res.push(
                dayjs(item.lichChieuPhim[i].ngayChieuGioChieu).format(
                  "YYYY-MM-DD"
                )
              );
            }
            if (res) {
              unique = res.filter((value, index) => {
                return res.indexOf(value) === index;
              });
            }
            if (unique) {
              output = unique.map((item, index) => {
                return (
                  <a
                    href="#!"
                    className="dropdown-item"
                    value={item}
                    key={index}
                    onClick={handleMovieDay(item)}
                  >
                    {dayjs(item).format("DD/MM/YYYY")}
                  </a>
                );
              });
            }
            return output;
          } else {
            return null;
          }
        });
      });
    }
  };

  const renderShowtime = () => {
    if (select.ngayChieu) {
      return theatersInfor?.map((item) => {
        return item?.cumRapChieu?.map((child) => {
          if (child.maCumRap === select.maCumRap) {
            return child.lichChieuPhim.map((item, index) => {
              if (item.ngayChieuGioChieu.indexOf(select.ngayChieu) !== -1) {
                return (
                  <a
                    href="#!"
                    className="dropdown-item"
                    value={item.maLichChieu}
                    key={index}
                    onClick={handleMovieShowtime(
                      item.ngayChieuGioChieu,
                      item.maLichChieu
                    )}
                  >
                    {item.ngayChieuGioChieu.slice(11, 16)}
                  </a>
                );
              } else {
                return null;
              }
            });
          } else {
            return null;
          }
        });
      });
    }
  };

  return (
    <div className="banner__book">
      {/* Movies dropdown */}
      <div className="dropdown" id="movies-dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="bannerMoviesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {infor.tenPhim ? `${infor.tenPhim}` : "Chọn Phim"}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="bannerMoviesDropdown"
          x-placement="bottom-start"
        >
          {movieInformation?.map((name, index) => {
            return (
              <a
                href="#!"
                className="dropdown-item"
                value={name.maPhim}
                key={index}
                onClick={handleMovieName(name.tenPhim, name.maPhim)}
              >
                {name.tenPhim}
              </a>
            );
          })}
        </div>
      </div>
      {/* Cinemas dropdown */}
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="bannerCinemasDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {infor.tenCumRap ? `${infor.tenCumRap}` : "Chọn Rạp"}
        </button>
        <div className="dropdown-menu" aria-labelledby="bannerCinemasDropdown">
          {theatersInfor?.map((theatersInfor) => {
            return theatersInfor.cumRapChieu.map((theater, index) => {
              return (
                <a
                  href="#!"
                  className="dropdown-item"
                  value={theater.maCumRap}
                  key={index}
                  onClick={handleMovieTheater(
                    theater.tenCumRap,
                    theater.maCumRap
                  )}
                >
                  {theater.tenCumRap}
                </a>
              );
            });
          })}
        </div>
      </div>
      {/* Dates dropdown */}
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="bannerDatesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {select.ngayChieu
            ? `${dayjs(select.ngayChieu).format("DD/MM/YYYY")}`
            : "Chọn Ngày Chiếu"}
        </button>
        <div
          className="dropdown-menu dates"
          aria-labelledby="bannerDatesDropdown"
        >
          {renderDate()}
          {/* <a className="dropdown-item" href="#random">
            <span>Hôm nay</span>
            <span className="date">2020-11-19</span>
          </a> */}
        </div>
      </div>
      {/* showtimes dropdown */}
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="bannerShowTimesDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {select.suat ? `${select.suat.slice(11, 16)}` : "Chọn Suất Chiếu"}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="bannerShowTimesDropdown"
        >
          {renderShowtime()}
        </div>
      </div>
      <div className="banner__btn">
        <a href="avascript:;" onClick={handleCheckout}>
          MUA VÉ NGAY
        </a>
      </div>
    </div>
  );
}
