import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import clsx from "clsx";
// import MuiDialogActions from "@material-ui/core/DialogActions";
// DatePicker Import
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
// import dayjs from "dayjs";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import createAction from "../../redux/Actions";
import { SET_POPUP } from "../../redux/Constants/UserConstants";
import {
  CardMedia,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { addMovie, editMovie } from "../../redux/Actions/MovieActions";
import { PhotoCamera } from "@material-ui/icons";
import DefaultImage from "../../assets/img/default-image.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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

export default function PopupMovie() {
  const dispatch = useDispatch();
  const isPopUp = useSelector((state) => state.movieReducers.isPopUp);
  const classes = useStyles();
  const [posterUrl, setPosterUrl] = useState(null);
  const [form, setForm] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    moTa: "",
    maNhom: "GP09",
    hinhAnh: {},
    ngayKhoiChieu: "",
    danhGia: 0,
  });
  const selectedMovie = useSelector(
    (state) => state.movieReducers.selectedMovie
  );
  const typeOfPopUp = useSelector((state) => state.movieReducers);
  useEffect(() => {
    setForm({
      maPhim: selectedMovie.maPhim,
      tenPhim: selectedMovie.tenPhim,
      biDanh: selectedMovie.biDanh,
      trailer: selectedMovie.trailer,
      moTa: selectedMovie.moTa,
      maNhom: "GP09",
      hinhAnh: selectedMovie.hinhAnh,
      ngayKhoiChieu: selectedMovie.ngayKhoiChieu,
      danhGia: selectedMovie.danhGia,
    });
  }, [selectedMovie]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeOfPopUp.typePopUp === "Cập Nhật Thông Tin") {
      const formData = new FormData();
      for (const key in form) {
        formData.set(
          "ngayKhoiChieu",
          moment(form.ngayKhoiChieu).format("DD/MM/YYYY")
        );
        formData.set("hinhAnh", posterUrl);
        formData.set("danhGia", Number(form.danhGia));
        formData.append(key, form[key]);
      }
      dispatch(editMovie(formData));
    } else if (typeOfPopUp.typePopUp === "Thêm Phim") {
      const formData = new FormData();
      for (const key in form) {
        formData.set(
          "ngayKhoiChieu",
          moment(form.ngayKhoiChieu).format("DD/MM/YYYY")
        );
        formData.set("hinhAnh", posterUrl);
        formData.set("danhGia", Number(form.danhGia));
        formData.append(key, form[key]);
      }
      dispatch(addMovie(formData));
    }
  };

  const handleClosePopup = () => {
    dispatch(createAction(SET_POPUP, false));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  // Change Date Time
  const handleDateChange = (date) => {
    setForm({
      ...form,
      ngayKhoiChieu: date,
    });
  };
  // Change Poster
  const handlePosterChange = (event) => {
    setPosterUrl(event.target.files[0]);
    setForm({
      ...form,
      hinhAnh: URL.createObjectURL(event.target.files[0]),
    });
  };
  return (
    <div className={classes.root}>
      <Dialog
        onClose={handleClosePopup}
        aria-labelledby="customized-dialog-title"
        open={isPopUp}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
          {typeOfPopUp.typePopUp}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {form.hinhAnh ? (
                  <CardMedia
                    style={{
                      width: "100%",
                      height: 600,
                      backgroundSize: "contain",
                    }}
                    image={form.hinhAnh}
                    alt="movie-img"
                  />
                ) : (
                  <CardMedia
                    style={{
                      width: "100%",
                      height: 600,
                      backgroundSize: "contain",
                    }}
                    image={DefaultImage}
                    alt="movie-img"
                  />
                )}
              </Grid>
            </Grid>
            <Grid
              direction="row"
              justifyContent="center"
              alignItems="center"
              container
              spacing={3}
            >
              <Grid item>
                <input
                  style={{ display: "none" }}
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  name="hinhAnh"
                  onChange={handlePosterChange}
                />
                <Tooltip title="Chọn Ảnh">
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  multiline
                  rowsMax={4}
                  name="tenPhim"
                  required
                  fullWidth
                  id="firstName"
                  label="Tên Phim"
                  value={form.tenPhim}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  multiline
                  rowsMax={4}
                  required
                  fullWidth
                  id="lastName"
                  label="Bí Danh"
                  name="biDanh"
                  value={form.biDanh}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  multiline
                  rowsMax={4}
                  required
                  fullWidth
                  id="email"
                  label="Trailer"
                  name="trailer"
                  value={form.trailer}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    fullWidth
                    format="dd/MM/yyyy"
                    name="ngayKhoiChieu"
                    onChange={handleDateChange}
                    id="date-picker-dialog"
                    label="Ngày Khởi Chiếu"
                    value={form.ngayKhoiChieu}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  multiline
                  type="number"
                  name="danhGia"
                  label="Đánh Giá"
                  id="outlined-start-adornment"
                  value={form.danhGia}
                  onChange={handleChange}
                  className={clsx(classes.margin, classes.textField)}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">/10</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rows={4}
                  multiline
                  required
                  fullWidth
                  name="moTa"
                  label="Mô Tả"
                  value={form.moTa}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {typeOfPopUp.typePopUp === "Cập Nhật Thông Tin"
                    ? "Cập Nhật"
                    : "Thêm Phim"}
                </Button>
              </Grid>
              <Grid item xs={6}>
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
