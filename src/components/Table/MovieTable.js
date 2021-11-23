import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import createAction from "redux/Actions";
import { EDIT_MOVIE } from "redux/Constants/MovieConstants";
import { SET_EDITED } from "redux/Constants/UserConstants";
import Swal from "sweetalert2";
import { deleteMovie } from "redux/Actions/MovieActions";
import { SET_DELETED } from "redux/Constants/MovieConstants";
import { useHistory } from "react-router-dom";
import { FETCH_MOVIE_SHOWTIME } from "redux/Constants/MovieConstants";
import { fetchMovieShowtime } from "redux/Actions/MovieActions";
import dayjs from "dayjs";
import { TimeFormat, DateFormat } from "redux/Constants/TimeConstants";
import { SET_LOADED } from "redux/Constants/MovieConstants";

const useStyles = makeStyles(styles);

export default function MovieTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShowtimeMovie = (maPhim) => () => {
    history.push(`/admin/showtime/${maPhim}`)
    dispatch(createAction(FETCH_MOVIE_SHOWTIME, {}))
    dispatch(fetchMovieShowtime(maPhim));
    dispatch(createAction(SET_LOADED, true))
  }

  const handleEditMovie = (maPhim) => () => {
    let movieSelected = {};
    let haveMovie = false;
    for (let movie of movieInfor.items) {
      if (maPhim === movie.maPhim) {
        movieSelected = { ...movie };
        haveMovie = true;
      }
    }
    if (haveMovie) {
      dispatch(
        createAction(EDIT_MOVIE, {
          selectedMovie: { ...movieSelected },
          isPopUp: true,
          typePopUp: "Cập Nhật Thông Tin",
        })
      );
      dispatch(createAction(SET_EDITED, false));
    }
  };

  const handleDeleteMovie = (maPhim) => () => {
    Swal.fire({
      title: "Xác nhận xóa ?",
      text: "Bạn không thể hoàn tác lại tác vụ này !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMovie(maPhim));
        dispatch(createAction(SET_DELETED, false));
        // });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          "Oh !!!",
          "Bạn đã hủy tác vụ này !!!",
          "warning"
        );
      }
    });
    // }
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.items?.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell}>
                  {prop.maPhim}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.tenPhim}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <img className={classes.poster} src={prop.hinhAnh} alt="movie-img"></img>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.danhGia}/10
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {dayjs(prop.ngayKhoiChieu).format(`${DateFormat} ${TimeFormat}`)}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Button onClick={handleEditMovie(prop.maPhim)} variant="outlined" color="primary">
                    Edit
                </Button>
                  <Button onClick={handleShowtimeMovie(prop.maPhim)} variant="outlined" color="default">
                    Showtimes
                </Button>
                  <Button onClick={handleDeleteMovie(prop.maPhim)} variant="outlined" color="secondary">
                    Delete
                </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

MovieTable.defaultProps = {
  tableHeaderColor: "gray"
};

MovieTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
