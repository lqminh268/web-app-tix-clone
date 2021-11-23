import React, { useEffect, useState } from "react";
import "./index.css";
import userImg from "../../../assets/img/faces/marc.jpg";
import zaloPay from "../../../assets/img/payment-zalo.jpg";
import visaPay from "../../../assets/img/payment-visa.png";
import atmPay from "../../../assets/img/payment-atm.png";
import tienIchPay from "../../../assets/img/payment-payoo.png";
import screen from "../../../assets/img/screen.png";
import warning from "../../../assets/img/exclamation.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeatList, bookingTicket } from "redux/Actions/TicketAction";
import dayjs from "dayjs";
import { Fragment } from "react";
import createAction from "redux/Actions";
import { BOOKING } from "redux/Constants/TicketConstants";
import Swal from "sweetalert2";
import { fetchCinemaSystemList } from "redux/Actions/MovieTheaterAction";
import Countdown from "react-countdown";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CLEAR } from "redux/Constants/TicketConstants";
import { Redirect, useHistory } from "react-router";
import PreLoader from "components/PreLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: 630,
    alignItems: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Checkout(props) {
  const classes = useStyles();
  const history = useHistory();
  const isLogin = useSelector((state) => state.credential.isLogin);
  const dataLogin = useSelector((state) => state.credential.dataLogin);
  const dispatch = useDispatch();
  const movieInfor = useSelector((state) => state.ticketReducers.movieInfor);
  const seatList = useSelector((state) => state.ticketReducers.seatList);
  const isLoading = useSelector((state) => state.ticketReducers.isLoading);
  const cinemaSystemList = useSelector(
    (state) => state.movieTheaterReducers.cinemaSystemList
  );
  const maHTRSelected = localStorage.getItem("maHeThongRap");
  const selectedList = useSelector(
    (state) => state.ticketReducers.selectedList
  );

  const [minuteTime] = useState(Date.now());
  const [timeClick, setTimeClick] = useState();
  const renderer = (props) => {
    if (props.completed) {
      Swal.fire({
        title: "Oops !!!",
        text:
          "Đã Hết Thời Gian Giữ Ghế, Vui Lòng Thực Hiện Đơn Hàng Trong 5 Phút !!!",
        icon: "warning",
        confirmButtonText: "Đặt Vé Lại",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          window.location.reload();
        } else {
          window.location.reload();
        }
      });
      return <span>00:00</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {props.formatted.minutes}:{props.formatted.seconds}
        </span>
      );
    }
  };

  const renderLogo = () => {
    let x = cinemaSystemList.find(
      (maHeThongRap) => maHeThongRap.maHeThongRap === maHTRSelected
    );
    return x?.logo;
  };

  const renderDayInWeek = () => {
    let date = "";
    let time = "";
    let newdate = "";
    let formated = "";
    if (movieInfor.ngayChieu !== undefined) {
      date = movieInfor.ngayChieu;
      time = movieInfor.gioChieu;
      newdate = date.split("/").reverse().join("/");
      formated = dayjs(newdate).day();
    }
    if (formated === 0) {
      return `Chủ Nhật ${date} - ${time} - ${movieInfor.tenRap}`;
    } else {
      return `Thứ ${formated + 1} ${date} - ${time} - ${movieInfor.tenRap}`;
    }
  };

  const booking = (maGhe, giaVe, stt, loaiGhe) => () => {
    dispatch(
      createAction(BOOKING, {
        selectedList: {
          maGhe: maGhe,
          giaVe: giaVe,
          stt: stt,
          loaiGhe: loaiGhe,
        },
      })
    );
    setTimeClick(Date.now());
  };

  const payment = () => {
    if (selectedList.length === 0) {
      Swal.fire({
        title: "Oops !!!",
        text: `Bạn Chưa Chọn Vé !!!`,
        icon: "error",
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        title: "Xác nhận đặt vé ?",
        text: "Vé đã mua không thể đổi hoặc hoàn tiền !!!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Đặt Vé",
        cancelButtonText: "Hủy",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          if (localStorage.getItem("currentUser")) {
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let dataPost = {
              maLichChieu: props.match.params.id,
              danhSachVe: selectedList,
              taiKhoanNguoiDung: currentUser.taiKhoan,
            };
            dispatch(bookingTicket(dataPost));
            // setMinuteTime(Date.now())
          }
          // });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire("Oh !!!", "Bạn đã hủy tác vụ này !!!", "warning");
        }
      });
    }
  };

  useEffect(() => {
    dispatch(fetchSeatList(props.match.params.id));
    dispatch(fetchCinemaSystemList());
    dispatch(createAction(CLEAR, { selectedList: [] }));
  }, [dispatch, props.match.params.id]);

  if (isLoading === false) {
    if (isLogin === true) {
      return (
        <section className="checkout-wrap">
          {/* Step checkout */}
          <div className="step-checkout">
            <div className="left-steps">
              <p className="step-item">
                <span className="step-number">01</span>
                CHỌN GHẾ & THANH TOÁN
              </p>
              <p className="step-item">
                <span className="step-number">02</span>
                KẾT QUẢ ĐẶT VÉ
              </p>
              <a
                className="step-item"
                href="#!"
                onClick={() => history.push("/")}
              >
                <span className="step-number">#</span>
                VỀ TRANG CHỦ
              </a>
            </div>
            <div className="step-user">
              <img src={userImg} className="img step--img" alt="" />
              <span>{dataLogin.hoTen}</span>
            </div>
          </div>
          {/* End step checkout */}
          {/* all-chairs */}
          <div className="cinema-chairs">
            {seatList.length !== 0 ? (
              <>
                <div
                  className="film-bg"
                  style={{ backgroundImage: `url('${movieInfor.hinhAnh}')` }}
                ></div>
                <div className="cinema-screen">
                  <div className="cinema-screen-info">
                    <div className="info-left">
                      <img
                        src={renderLogo()}
                        className="img img--screen-cinema"
                        alt=""
                      />
                      <div className="screen-title">
                        <p className="name">
                          <span className="bhd-color">
                            {movieInfor.tenCumRap}
                          </span>
                        </p>
                        <p className="date">
                          {movieInfor.ngayChieu} - {movieInfor.gioChieu} -{" "}
                          {movieInfor.tenRap}
                        </p>
                      </div>
                    </div>
                    <div className="info-right">
                      <p>thời gian giữ ghế</p>
                      <p className="time-delay">
                        <Countdown
                          date={
                            timeClick
                              ? Number(Date.now() + 301500) -
                                (Number(timeClick) - Number(minuteTime))
                              : Date.now() + 300000
                          }
                          renderer={renderer}
                        />
                      </p>
                    </div>
                  </div>
                  <img src={screen} className="img img--screen" alt="" />
                  <div className="seats-wrap">
                    {seatList?.map((seat, index) => {
                      let vip = seat.loaiGhe === "Vip" ? "vip" : "";
                      let isBooked = seat.daDat ? "booked" : "";
                      let disabled = seat.daDat ? true : false;
                      let check = selectedList.findIndex(
                        (selectedSeat) => seat.maGhe === selectedSeat.maGhe
                      );
                      let isBooking = check !== -1 ? "booking" : "";
                      return (
                        <Fragment key={index}>
                          <button
                            disabled={disabled}
                            className={`seat ${vip} ${isBooking} ${isBooked}`}
                            onClick={booking(
                              seat.maGhe,
                              seat.giaVe,
                              seat.stt,
                              seat.loaiGhe
                            )}
                          >
                            <span>{isBooked ? "X" : seat.stt}</span>
                          </button>
                          {(index + 1) % 16 === 0 ? <br /> : ""}
                        </Fragment>
                      );
                    })}
                  </div>
                  <div className="explain-seats">
                    {/* explain item */}
                    <div className="explain-item">
                      <span className="seat"></span>
                      <p>Ghế thường</p>
                    </div>
                    {/* end explain item */}
                    {/* explain item */}
                    <div className="explain-item">
                      <span className="seat seat-vip"></span>
                      <p>Ghế vip</p>
                    </div>
                    {/* end explain item */}
                    {/* explain item */}
                    {/* <div className="explain-item">
                <span className="seat seat-couple"></span>
                <p>Ghế đôi</p>
              </div> */}
                    {/* end explain item */}
                    {/* explain item */}
                    <div className="explain-item">
                      <span className="seat seat-selected"></span>
                      <p>Ghế đã chọn</p>
                    </div>
                    {/* end explain item */}
                    {/* explain item */}
                    <div className="explain-item">
                      <span className="seat seat-on-select"></span>
                      <p>Ghế đang chọn</p>
                    </div>
                    {/* end explain item */}
                  </div>
                </div>
              </>
            ) : (
              <div className={classes.root}>
                <CircularProgress />
              </div>
            )}
          </div>

          {/* end all chairs */}
          {/* Checkout Info */}
          <div className="checkout-info-wrap">
            <div className="checkout-info">
              <h3 className="total-price title">
                {selectedList
                  .reduce((total, selectedSeat, index) => {
                    return (total += selectedSeat.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ
              </h3>
              {/* Checkout film info */}
              <div className="checkout-film-info">
                <p className="film-name">
                  {" "}
                  <span className="common-age-type">C16</span>{" "}
                  {movieInfor.tenPhim}
                </p>
                <p className="checkout-cinema">{movieInfor.tenCumRap}</p>
                <p className="checkout-date">{renderDayInWeek()}</p>
              </div>
              {/* End checkout film info */}
              {/* Checkout chair */}
              <div className="checkout-chair">
                <p className="chairs">
                  Ghế:{" "}
                  {selectedList.map((seat, index) => {
                    let type =
                      seat.loaiGhe === "Vip" ? "vipSeat" : "normalSeat";
                    return (
                      <Fragment key={index}>
                        <span className={`chair ${type}`}>{seat.stt}</span>
                        <span className="normalSeat">, </span>
                      </Fragment>
                    );
                  })}
                </p>
                {/* <p className="total-price">150.000 đ</p> */}
              </div>
              <div className="checkout-user">
                {/* checkout user item */}
                <div className="checkout-user-item">
                  <label htmlFor="checkout-user-email">E-mail</label>
                  <input
                    type="text"
                    id="checkout-user-email"
                    placeholder="email-user"
                  />
                </div>
                {/* end checkout user item */}
                {/* checkout user item */}
                <div className="checkout-user-item">
                  <label htmlFor="checkout-user-phone">Phone</label>
                  <input
                    type="text"
                    id="checkout-user-phone"
                    placeholder="phone-user"
                  />
                </div>
                {/* end checkout user item */}
                {/* checkout user item */}
                <div className="checkout-user-item">
                  <label htmlFor="checkout-user-promotion">Mã giảm giá</label>
                  <input
                    type="text"
                    id="checkout-user-promotion"
                    placeholder="Nhập tại đây..."
                  />
                  <button className="btn btn-apply">Áp dụng</button>
                </div>
                {/* end checkout user item */}
              </div>

              <div className="checkout-payments">
                <h3>Hình thức thanh toán</h3>
                <div className="payment-methods">
                  {/* Method item */}
                  <div className="payment-method-item">
                    <input type="radio" name="method" />
                    <img src={zaloPay} className="img img--payment" alt="" />
                    <p className="payment-intro">Thanh toán qua ZaloPay</p>
                  </div>
                  {/* end Method item */}
                  {/* Method item */}
                  <div className="payment-method-item">
                    <input type="radio" name="method" />
                    <img src={visaPay} className="img img--payment" alt="" />
                    <p className="payment-intro">Visa, Master, JCB</p>
                  </div>
                  {/* end Method item */}
                  {/* Method item */}
                  <div className="payment-method-item">
                    <input type="radio" name="method" />
                    <img src={atmPay} className="img img--payment" alt="" />
                    <p className="payment-intro">Thẻ ATM nội địa</p>
                  </div>
                  {/* end Method item */}
                  {/* Method item */}
                  <div className="payment-method-item">
                    <input type="radio" name="method" />
                    <img src={tienIchPay} className="img img--payment" alt="" />
                    <p className="payment-intro">
                      Thanh toán tại cửa hàng tiện ích
                    </p>
                  </div>
                  {/* end Method item */}
                </div>
              </div>
              <div className="book-ticket">
                <div className="book-note">
                  <p className="note">
                    <img className="warning" src={warning} alt="" />
                    Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua
                    tin nhắn <span>ZMS</span> (tin nhắn Zalo) và{" "}
                    <span>Email</span> đã nhập
                  </p>
                </div>
                <button onClick={payment} className="btn btn-book-ticket">
                  Đặt Vé
                </button>
              </div>
              {/* end book ticket */}
            </div>
          </div>
          {/* End Checkout Info */}
        </section>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { next: props.location },
          }}
        />
      );
    }
  } else {
    return <PreLoader />;
  }
}
