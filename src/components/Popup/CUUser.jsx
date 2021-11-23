import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import createAction from "../../redux/Actions";
import { SET_POPUP } from "../../redux/Constants/UserConstants";
import {
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from "@material-ui/core";
import {
  createUser,
  editProfile,
  editUser,
} from "../../redux/Actions/UserActions";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function PopupUser() {
  const dispatch = useDispatch();
  const isPopUp = useSelector((state) => state.userReducers.isPopUp);
  const classes = useStyles();
  const selectedUser = useSelector((state) => state.userReducers.selectedUser);
  const typeOfPopUp = useSelector((state) => state.userReducers);

  const [form, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    soDt: "",
    maNhom: "GP09",
  });

  useEffect(() => {
    setForm({
      taiKhoan: selectedUser.taiKhoan,
      matKhau: selectedUser.matKhau,
      email: selectedUser.email,
      hoTen: selectedUser.hoTen,
      soDt: selectedUser.soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: selectedUser.maLoaiNguoiDung,
    });
  }, [selectedUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeOfPopUp.typePopUp === "Cập Nhật Thông Tin") {
      dispatch(editUser(form));
    } else if (typeOfPopUp.typePopUp === "Tạo Người Dùng") {
      dispatch(createUser(form));
    } else {
      dispatch(editProfile(form));
    }
  };

  const handleClosePopup = () => {
    dispatch(createAction(SET_POPUP, false));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChangeRole = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      maLoaiNguoiDung: event.target.value,
    });
  };

  return (
    <div>
      <Dialog
        onClose={handleClosePopup}
        aria-labelledby="customized-dialog-title"
        open={isPopUp}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
          {typeOfPopUp.typePopUp}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="hoTen"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Họ Và Tên"
                  value={form.hoTen}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Số Điện Thoại"
                  name="soDt"
                  value={form.soDt}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                {typeOfPopUp.typePopUp === "Tạo Người Dùng" && (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Tài Khoản"
                    name="taiKhoan"
                    value={form.taiKhoan}
                    onChange={handleChange}
                  />
                )}
              </Grid>
              {typeOfPopUp.typePopUp === "Cập Nhật Thông Tin Cá Nhân" ? (
                <></>
              ) : typeOfPopUp.typePopUp === "Tạo Người Dùng" ? (
                <Grid item xs={6}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Chọn Loại Tài Khoản
                    </InputLabel>
                    <Select
                      native
                      value={form.maLoaiNguoiDung}
                      required
                      defaultValue=""
                      fullWidth
                      name="maLoaiNguoiDung"
                      label="Chọn Loại Tài Khoản"
                      onChange={handleChangeRole}
                    >
                      <option value="">Chọn Loại Tài Khoản</option>
                      <option value="KhachHang">Khách Hàng</option>
                      <option value="QuanTri">Quản Trị</option>
                    </Select>
                  </FormControl>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Chọn Loại Tài Khoản
                    </InputLabel>
                    <Select
                      native
                      value={form.maLoaiNguoiDung}
                      required
                      defaultValue="KhachHang"
                      fullWidth
                      name="maLoaiNguoiDung"
                      label="Chọn Loại Tài Khoản"
                      onChange={handleChangeRole}
                    >
                      <option value="KhachHang">Khách Hàng</option>
                      <option value="QuanTri">Quản Trị</option>
                    </Select>
                  </FormControl>
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật Khẩu"
                  value={form.matKhau}
                  onChange={handleChange}
                  id="password"
                  //   autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {typeOfPopUp.typePopUp === "Cập Nhật Thông Tin" ||
                  typeOfPopUp.typePopUp === "Cập Nhật Thông Tin Cá Nhân"
                    ? "Cập Nhật"
                    : "Tạo Người Dùng"}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleClosePopup}
                  className={classes.submit}
                >
                  Hủy
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
