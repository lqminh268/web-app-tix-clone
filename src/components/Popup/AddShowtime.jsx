import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AlarmIcon from "@material-ui/icons/AddAlarm";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { SET_POPUP } from "redux/Constants/MovieConstants";
import createAction from "redux/Actions";
import {
  CardMedia,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import clsx from "clsx";
import DateFnsUtils from "@date-io/date-fns";
// import { Label } from "@material-ui/icons";
import { fetchCinemaSystemList } from "redux/Actions/MovieTheaterAction";
import { fetchTheaterList } from "redux/Actions/MovieTheaterAction";
import { FETCH_ROOM_LIST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_THEATERS_LIST } from "redux/Constants/MovieTheaterConstants";
// import dayjs from "dayjs";
import { addShowtimeMovie } from "redux/Actions/MovieActions";
import FormControl from "@material-ui/core/FormControl";

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

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function AddShowtime(props) {
  const { data } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const isPopUp = useSelector((state) => state.movieReducers.isPopUp);
  const typeOfPopUp = useSelector((state) => state.movieReducers);
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const isCreated = useSelector((state) => state.movieReducers.isCreated);
  const cinemaSystemList = useSelector(
    (state) => state.movieTheaterReducers.cinemaSystemList
  );
  const theatersList = useSelector(
    (state) => state.movieTheaterReducers.theatersList
  );
  const roomList = useSelector((state) => state.movieTheaterReducers.roomList);
  const [form2, setForm2] = useState({
    heThongRap: "",
    rap: "",
    tenRap: "",
  });

  const [form, setForm] = useState({
    maPhim: data,
    ngayChieuGioChieu: new Date(),
    maRap: "",
    giaVe: "",
  });

  const handleChangeCinemaSystem = (event) => {
    const { value } = event.target;
    if (value !== "") {
      dispatch(fetchTheaterList(value));
      setForm2({ rap: "", heThongRap: value });
      setForm({ ...form, maRap: "" });
      setError(false);
    } else {
      dispatch(createAction(FETCH_THEATERS_LIST, []));
      dispatch(createAction(FETCH_ROOM_LIST, []));
      setForm2({ rap: "", heThongRap: "" });
      setForm({ ...form, maRap: "" });
    }
  };

  const handleChangeTheaters = (event) => {
    let roomList = [];
    const { value } = event.target;
    setError1(false);
    let index = theatersList.findIndex((room) => room.maCumRap === value);
    if (index !== -1) {
      roomList.push({
        danhSachRap: theatersList[index].danhSachRap,
      });
      dispatch(createAction(FETCH_ROOM_LIST, roomList));
      setForm2({
        ...form2,
        rap: theatersList[index].maCumRap,
        tenRap: theatersList[index].tenCumRap,
      });
      setForm({ ...form, maRap: "" });
    }
    if (value === "") {
      dispatch(createAction(FETCH_ROOM_LIST, []));
      setForm2({ ...form2, rap: "" });
      setForm({ ...form, maRap: "" });
    }
  };

  const handleChangeRoom = (event) => {
    event.preventDefault();
    setError2(false);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChangePrice = (event) => {
    event.preventDefault();
    setError3(false);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setForm({
      ...form,
      ngayChieuGioChieu: date,
    });
  };

  const handleClose = () => {
    dispatch(createAction(SET_POPUP, false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setError1(false);
    setError2(false);
    setError3(false);
    if (!form2.heThongRap) {
      setError(true);
      // return;
    }
    if (!form2.rap) {
      setError1(true);
      // return;
    }
    if (!form.maRap) {
      setError2(true);
      // return;
    }
    if (!form.giaVe) {
      setError3(true);
      // return;
    }
    if (!form2.heThongRap || !form2.rap || !form.maRap || !form.giaVe) {
      return;
    } else {
      dispatch(addShowtimeMovie(form));
    }
  };

  useEffect(() => {
    dispatch(fetchCinemaSystemList());
  }, [dispatch]);

  useEffect(() => {
    if (isCreated) {
      setForm((prevState) => ({ ...prevState, maRap: "", giaVe: "" }));
      setForm2((prevState) => ({ ...prevState, heThongRap: "", rap: "" }));
    }
  }, [isCreated]);

  return (
    <div className={classes.root}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isPopUp}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {typeOfPopUp.typePopUp}
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CardMedia
                  style={{
                    width: "100%",
                    height: 600,
                    backgroundSize: "contain",
                  }}
                  alt="movie-img"
                  image={movieDetail.hinhAnh}
                />
                <Typography align="center" variant="h6" gutterBottom>
                  Phim: {movieDetail.tenPhim}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <FormControl
                  fullWidth
                  className={classes.formControl}
                  error={error}
                >
                  <InputLabel id="demo-simple-select-label">
                    Chọn Hệ Thống Rạp
                  </InputLabel>
                  <Select
                    label="Chọn Hệ Thống Rạp"
                    name="heThongRap"
                    defaultValue=""
                    onChange={handleChangeCinemaSystem}
                  >
                    <MenuItem value="">Chọn Hệ Thống Rạp</MenuItem>
                    {cinemaSystemList?.map((cinemaSystem) => {
                      return (
                        <MenuItem value={cinemaSystem.maHeThongRap}>
                          {cinemaSystem.tenHeThongRap}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {error && (
                    <FormHelperText>Hãy Chọn Hệ Thống Rạp</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  fullWidth
                  className={classes.formControl}
                  error={error1}
                >
                  <InputLabel id="demo-simple-select-label">
                    Chọn Cụm Rạp
                  </InputLabel>
                  <Select
                    label="Chọn Cụm Rạp"
                    name="rap"
                    value={form2.rap}
                    defaultValue=""
                    onChange={handleChangeTheaters}
                  >
                    <MenuItem value="">Chọn Cụm Rạp</MenuItem>
                    {theatersList?.map((theatersList) => {
                      return (
                        <MenuItem value={theatersList.maCumRap}>
                          {theatersList.tenCumRap}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {error1 && <FormHelperText>Hãy Chọn Cụm Rạp</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  fullWidth
                  className={classes.formControl}
                  error={error2}
                >
                  <InputLabel id="demo-simple-select-label">
                    Chọn Rạp
                  </InputLabel>
                  <Select
                    label="Chọn Rạp"
                    defaultValue=""
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="maRap"
                    value={form.maRap}
                    onChange={handleChangeRoom}
                  >
                    <MenuItem value="">Chọn Rạp</MenuItem>
                    {roomList?.map((roomList) => {
                      return roomList.danhSachRap?.map((list) => {
                        return (
                          <MenuItem value={list.maRap}>
                            {form2.tenRap} - {list.tenRap}
                          </MenuItem>
                        );
                      });
                    })}
                  </Select>
                  {error2 && <FormHelperText>Hãy Chọn Rạp</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    fullWidth
                    ampm
                    name="ngayChieuGioChieu"
                    label="Ngày Giờ Khởi Chiếu"
                    format="dd/MM/yyyy - hh:mm a"
                    value={form.ngayChieuGioChieu}
                    onChange={handleDateChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <AlarmIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={error3}
                  name="giaVe"
                  label="Giá Vé"
                  id="outlined-start-adornment"
                  value={form.giaVe}
                  onChange={handleChangePrice}
                  className={clsx(classes.margin, classes.textField)}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">VND</InputAdornment>
                    ),
                  }}
                />
                {error3 && (
                  <FormHelperText error>Hãy Nhập Giá Vé</FormHelperText>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.submit}
                >
                  Tạo Lịch Chiếu
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
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
