/*eslint-disable*/
import React, { createRef, useEffect, useState } from "react";
// @material-ui/core components
import Hidden from "@material-ui/core/Hidden";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieShowtime } from "redux/Actions/MovieActions";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { CREATE_MOVIE, SET_CREATED } from "redux/Constants/MovieConstants";
import createAction from "redux/Actions";
import AddShowtime from "components/Popup/AddShowtime";
import dayjs from "dayjs";
import { TimeFormat, DateFormat } from "redux/Constants/TimeConstants";

const useStyles = makeStyles(styles);
const columns = [
  { id: "name", label: "Mã Lịch Chiếu", minWidth: 170 },
  { id: "code", label: "Tên Cụm Rạp", minWidth: 100 },
  {
    id: "population",
    label: "Tên Rạp",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Ngày Giờ Chiếu",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Giá Vé",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function ShowtimeMovie(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const movieDetail = useSelector((state) => state.movieReducers.movieDetail);
  const isCreated = useSelector((state) => state.movieReducers.isCreated);
  const isLoaded = useSelector((state) => state.movieReducers.isLoaded);
  const data = movieDetail;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCreateMovieShowtime = () => {
    dispatch(
      createAction(CREATE_MOVIE, {
        selectedMovie: {},
        isPopUp: true,
        typePopUp: "Tạo Lịch Chiếu",
      })
    );
    dispatch(createAction(SET_CREATED, false));
  };

  useEffect(() => {
    dispatch(fetchMovieShowtime(props.match.params.id));
  }, [isCreated]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Lịch Chiếu</h4>
            <p className={classes.cardCategoryWhite}>
              Thông tin lịch chiếu và rạp của "{data.tenPhim}"
            </p>
          </CardHeader>
          <CardBody>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={handleCreateMovieShowtime}
                >
                  Tạo Lịch Chiếu
                </Button>
              </ThemeProvider>
            </Grid>
            {isLoaded ? (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  style={{ textAlign: "center", marginTop: 20 }}
                  item
                  xs={12}
                >
                  <CircularProgress />
                </Grid>
              </Grid>
            ) : (
              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.lichChieu
                        ?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((lichChieu, index) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={index}
                            >
                              <TableCell>{lichChieu.maLichChieu}</TableCell>
                              <TableCell>
                                {lichChieu.thongTinRap.tenCumRap}
                              </TableCell>
                              <TableCell>
                                {lichChieu.thongTinRap.tenRap}
                              </TableCell>
                              <TableCell>
                                {dayjs(lichChieu.ngayChieuGioChieu).format(`${DateFormat} ${TimeFormat}`)}
                              </TableCell>
                              <TableCell>{lichChieu.giaVe} VND</TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                  <AddShowtime data={props.match.params.id} />
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={data.lichChieu?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </Paper>
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
