import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import createAction from "redux/Actions";
import { SET_REDIRECT } from "redux/Constants/UserConstants";
import logoForm from "../../../assets/img/logo-form.png";
import { signup } from "../../../redux/Actions/UserActions";

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isRedirect = useSelector((state) => state.userReducers.isRedirect);
  const [form, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    hoTen: "",
    maLoaiNguoiDung: "KhachHang",
    soDt: "",
    maNhom: "GP09",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form));
  };

  useEffect(() => {
    dispatch(createAction(SET_REDIRECT, false));
    if (isRedirect === true) {
      return history.push("/login");
    }
  }, [isRedirect, dispatch, history]);

  return (
    <section className="form-sign-in-up">
      <div className="form-sign-in">
        <div className="logo-form">
          <img src={logoForm} className="img" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="sign-up-name">Họ Tên</label>
              <input
                name="hoTen"
                value={form.hoTen}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="sign-up-name"
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label htmlFor="sign-up-username">Số Điện Thoại</label>
              <input
                name="soDt"
                value={form.soDt}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="sign-up-username"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-phone">Tài Khoản</label>
            <input
              name="taiKhoan"
              value={form.taiKhoan}
              onChange={handleChange}
              type="tel"
              className="form-control"
              id="sign-up-phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-pass">Mật Khẩu</label>
            <input
              name="matKhau"
              value={form.matKhau}
              onChange={handleChange}
              type="password"
              className="form-control"
              id="sign-up-pass"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sign-up-email">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="sign-up-email"
            />
          </div>
          <button type="submit" className="btn">
            Đăng Ký
          </button>
          <div style={{textAlign: "center"}}>
            <NavLink to="/login">Đã Có Tài Khoản ? Đăng Nhập</NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}
