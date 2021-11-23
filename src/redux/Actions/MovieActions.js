import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

import createAction from ".";
import {
  SET_LOADED,
  SET_CREATED,
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_SHOWTIME,
  SET_DELETED,
  SET_EDITED,
  SET_POPUP,
  FETCH_MOVIE_INFORMATION,
} from "../Constants/MovieConstants";
import { DateFormat, TimeFormat } from "redux/Constants/TimeConstants";
import { FETCH_THEATERS_INFORMATION } from "redux/Constants/MovieTheaterConstants";

export const fetchMovie = () => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
        method: "GET",
      })
        .then((res) => {
          dispatch(createAction(FETCH_MOVIE_INFORMATION, res.data));
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const fetchMovieInfo = (page, pageSize) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
        method: "GET",
      })
        .then((res) => {
          // res.data.ngayKhoiChieu = dayjs(res.data.ngayKhoiChieu).format("DD/MM/YYYY")
          dispatch(createAction(FETCH_MOVIE_LIST, res.data));
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const fetchMovieShowtime = (maPhim) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      })
        .then((res) => {
          dispatch(createAction(SET_LOADED, false));
          dispatch(createAction(FETCH_MOVIE_SHOWTIME, res.data));
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const editMovie = (form) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload`,
        method: "POST",
        data: form,
        headers: {
          Authorization: `Bearer ` + accessToken,
        },
      })
        .then((res) => {
          Swal.fire({
            title: "Yeah !!!",
            text: "Chỉnh Sửa Thông Tin Phim Thành Công !!!",
            icon: "success",
            allowOutsideClick: false,
          });
          dispatch(createAction(SET_POPUP, false));
          dispatch(createAction(SET_EDITED, true));
        })
        .catch((err) => {
          // console.log(err.response?.data);
          Swal.fire({
            title: "Oops !!!",
            text: `${err.response?.data} !!!`,
            icon: "error",
            allowOutsideClick: false,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const addMovie = (form) => {
  return (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
        method: "POST",
        data: form,
        headers: {
          Authorization: `Bearer ` + accessToken,
        },
      })
        .then((res) => {
          Swal.fire({
            title: "Yeah !!!",
            text: "Thêm Phim Thành Công !!!",
            icon: "success",
            allowOutsideClick: false,
          });
          dispatch(createAction(SET_POPUP, false));
          dispatch(createAction(SET_CREATED, true));
        })
        .catch((err) => {
          // console.log(err.response?.data);
          Swal.fire({
            title: "Oops !!!",
            text: `${err.response?.data} !!!`,
            icon: "error",
            allowOutsideClick: false,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const deleteMovie = (maPhim) => {
  return (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      axios({
        method: "DELETE",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          Swal.fire({
            title: "Yeah !!!",
            text: "Xoá Phim Thành Công !!!",
            icon: "success",
            allowOutsideClick: false,
          });
          dispatch(createAction(SET_POPUP, false));
          dispatch(createAction(SET_DELETED, true));
        })
        .catch((err) => {
          if (err.response.status) {
            Swal.fire({
              title: "Oops !!!",
              text: `${err.response?.data} !!!`,
              icon: "error",
              allowOutsideClick: false,
            });
          } else {
            Swal.fire({
              title: "Yeah !!!",
              text: "Xoá Phim Thành Công !!!",
              icon: "success",
              allowOutsideClick: false,
            });
            dispatch(createAction(SET_POPUP, false));
            dispatch(createAction(SET_DELETED, true));
          }
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const addShowtimeMovie = (form) => {
  return (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      Swal.fire({
        title: "Waiting ...",
        text: "Đang xử lý ...",
        icon: "info",
        showConfirmButton: false,
        allowOutsideClick: false,
      });
      axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
        method: "POST",
        data: {
          ...form,
          ngayChieuGioChieu: dayjs(form.ngayChieuGioChieu).format(
            `${DateFormat} ${TimeFormat}`
          ),
        },
        headers: {
          Authorization: `Bearer ` + accessToken,
        },
      })
        .then((res) => {
          Swal.fire({
            title: "Yeah !!!",
            text: "Tạo Lịch Chiếu Thành Công !!!",
            icon: "success",
            allowOutsideClick: false,
          });
          dispatch(createAction(SET_CREATED, true));
          dispatch(createAction(SET_POPUP, false));
        })
        .catch((err) => {
          // console.log(err.response?.data);
          Swal.fire({
            title: "Oops !!!",
            text: `Giá Vé Phải Từ 75.000VND đến 200.000VND !!!`,
            icon: "error",
            allowOutsideClick: false,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };
};

export const fetchMovieDetail = (maPhim) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      })
        .then((res) => {
          dispatch(createAction(FETCH_MOVIE_SHOWTIME, res.data));
          // dispatch(createAction(FETCH_THEATERS_LIST, res.data.heThongRapChieu))
          dispatch(
            createAction(FETCH_THEATERS_INFORMATION, res.data.heThongRapChieu)
          );
        })
        .catch((err) => {
          // console.log(err);
        });
    } catch (err) {
      // console.log(err);
    }
  };
};
