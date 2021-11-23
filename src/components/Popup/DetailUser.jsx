import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import createAction from "redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { SET_DETAIL } from "redux/Constants/UserConstants";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Box, Collapse } from "@material-ui/core";
import dayjs from "dayjs";
import { TimeFormat, DateFormat } from "redux/Constants/TimeConstants";

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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DetailUser() {
  const isDetail = useSelector((state) => state.userReducers.isDetail);
  const DetailUser = useSelector((state) => state.userReducers.detailUser);
  const dispatch = useDispatch();
  const handleClosePopup = () => {
    dispatch(createAction(SET_DETAIL, false));
  };

  
  const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
  });
  
  function Row(props) {
    const { item } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const ngayDat = item.ngayDat;

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {item.maVe}
          </TableCell>
          <TableCell align="right">{item.tenPhim}</TableCell>
          <TableCell align="right">{item.thoiLuongPhim}</TableCell>
          <TableCell align="right">{item.giaVe}</TableCell>
          <TableCell align="right">{dayjs(ngayDat).format(`${DateFormat} ${TimeFormat}`)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Thông Tin Ghế
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Hệ Thống Rạp</TableCell>
                      <TableCell>Cụm</TableCell>
                      <TableCell align="right">Tên Rạp</TableCell>
                      <TableCell align="right">Số Ghế</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.danhSachGhe?.map((dsGhe, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {dsGhe.tenHeThongRap}
                        </TableCell>
                        <TableCell>{dsGhe.tenCumRap}</TableCell>
                        <TableCell align="right">{dsGhe.tenRap}</TableCell>
                        <TableCell align="right">
                          {dsGhe.tenGhe}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Dialog
        // onClose={handleClosePopup}
        aria-labelledby="customized-dialog-title"
        open={isDetail}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
          Thông Tin Đặt Vé Của "{DetailUser?.hoTen}"
        </DialogTitle>
        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Mã Vé</TableCell>
                  <TableCell align="right">Tên Phim</TableCell>
                  <TableCell align="right">Thời Lượng</TableCell>
                  <TableCell align="right">Giá Vé</TableCell>
                  <TableCell align="right">Ngày Đặt Vé</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DetailUser.thongTinDatVe?.map((item, index) => (
                  <Row key={index} item={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosePopup} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
