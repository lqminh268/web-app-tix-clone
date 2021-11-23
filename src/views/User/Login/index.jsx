import React, { useEffect, useState } from "react";
import { login } from "../../../redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./index.css";

import logoForm from "../../../assets/img/logo-form.png";

export default function SignInSide(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.credential.isLogin);
  const [form, setForm] = useState({ taiKhoan: "", matKhau: "" });
  const {
    location: { state },
  } = props;
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  useEffect(() => {
    if (isLogin === true && state) {
      return history.push(`${state.next.pathname}`);
    } else if (isLogin === true) {
      return history.push("/");
    }
  }, [isLogin, history, state]);

  return (
    <section className="form-sign-in-up">
      <div className="form-sign-in">
        <div className="logo-form">
          <img src={logoForm} className="img" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sign-in-username">Tên Đăng Nhập</label>
            <input
              name="taiKhoan"
              onChange={handleChange}
              value={form.taiKhoan}
              type="text"
              className="form-control"
              id="sign-in-username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">Mật Khẩu</label>
            <input
              name="matKhau"
              type="password"
              onChange={handleChange}
              value={form.matKhau}
              className="form-control"
              id="sign-in-pass"
            />
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
          <div style={{ textAlign: "center" }}>
            <NavLink to="/signup">Chưa Có Tài Khoản ? Đăng Kí</NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}
