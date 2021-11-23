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
import { EDIT_USER } from "redux/Constants/UserConstants";
import { SET_EDITED } from "redux/Constants/UserConstants";
import Swal from "sweetalert2";
import { SET_DELETED } from "redux/Constants/UserConstants";
import { deleteUser } from "redux/Actions/UserActions";
import { fetchDetailUser } from "redux/Actions/UserActions";

const useStyles = makeStyles(styles);

export default function UserTable(props) {
  const classes = useStyles();
  const userInfo = useSelector((state) => state.userReducers.userInfo);
  const dispatch = useDispatch();
  const { tableHead, tableData, tableHeaderColor } = props;

  const handleDetailUser = (taiKhoan) => () => {
    dispatch(fetchDetailUser(taiKhoan));
  };

  const handleEditUser = (taiKhoan) => () => {
    let userSelected = {};
    let haveUser = false;
    for (let user of userInfo.items) {
      if (taiKhoan === user.taiKhoan) {
        userSelected = { ...user };
        haveUser = true;
      }
    }
    if (haveUser) {
      dispatch(
        createAction(EDIT_USER, {
          selectedUser: { ...userSelected },
          isPopUp: true,
          typePopUp: "Cập Nhật Thông Tin",
        })
      );
      dispatch(createAction(SET_EDITED, false));
    }
  };

  const handleDeleteUser = (taiKhoan) => () => {
    let userSelected = {};
    let haveUser = false;
    for (let user of userInfo.items) {
      if (taiKhoan === user.taiKhoan) {
        userSelected = user.taiKhoan;
        haveUser = true;
      }
    }
    if (haveUser) {
      Swal.fire({
        title: "Xác nhận xóa ?",
        text: "Bạn xem không thể hoàn tác lại tác vụ này !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteUser(userSelected));
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
    }
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
                  {prop.taiKhoan}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.matKhau}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.hoTen}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.email}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.soDt}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Button onClick={handleEditUser(prop.taiKhoan)} variant="outlined" color="primary">
                    Edit
                </Button>
                  <Button onClick={handleDetailUser(prop.taiKhoan)} variant="outlined" color="default">
                    Detail
                </Button>
                  <Button onClick={handleDeleteUser(prop.taiKhoan)} variant="outlined" color="secondary">
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

UserTable.defaultProps = {
  tableHeaderColor: "gray"
};

UserTable.propTypes = {
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
