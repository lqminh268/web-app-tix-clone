import React, { useEffect, useState, useRef } from "react";
// @material-ui/core components
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import UserTable from "components/Table/UserTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Box, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "redux/Actions/UserActions";
import { green } from "@material-ui/core/colors";
import PopupUser from "components/Popup/CUUser";
import { CREATE_USER } from "redux/Constants/UserConstants";
import createAction from "redux/Actions";
import { SET_CREATED } from "redux/Constants/UserConstants";
import DetailUser from "components/Popup/DetailUser";
import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import Buttonn from "components/CustomButtons/Button.js";
import { searchUser } from "redux/Actions/UserActions";
import { SET_SEARCH } from "redux/Constants/UserConstants";
import { FETCH_DETAIL_USER } from "redux/Constants/UserConstants";
import Pagination from '@material-ui/lab/Pagination';
// import Swal from "sweetalert2";

const useStyless = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function TableList() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const isEdited = useSelector((state) => state.userReducers.isEdited);
  const isDeleted = useSelector((state) => state.userReducers.isDeleted);
  const isCreated = useSelector((state) => state.userReducers.isCreated);
  const isSearch = useSelector((state) => state.userReducers.isSearch);
  const dispatch = useDispatch();
  const classess = useStyless();
  const classes = useStyles();
  const userInfo = useSelector((state) => state.userReducers.userInfo);

  const refContainer = useRef(React.createRef());

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCancelSearch = (event) => {
    event.preventDefault();
    dispatch(createAction(SET_SEARCH, false));
    dispatch(fetchUserInfo(page, pageSize));
    refContainer.current.value = null;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (refContainer.current.value) {
      dispatch(searchUser(refContainer.current.value, page, pageSize));
      dispatch(createAction(SET_SEARCH, true));
    } else {
      dispatch(fetchUserInfo(page, pageSize));
      dispatch(createAction(SET_SEARCH, false));
    }
  };

  const handleCreateUser = () => {
    dispatch(
      createAction(CREATE_USER, {
        selectedUser: {},
        isPopUp: true,
        typePopUp: "Tạo Người Dùng",
      })
    );
    dispatch(createAction(SET_CREATED, false));
  };

  useEffect(() => {
    dispatch(createAction(FETCH_DETAIL_USER, {isDetail: false}));
    if (isSearch) {
      dispatch(searchUser(refContainer.current.value, page, pageSize));
    } else {
      dispatch(fetchUserInfo(page, pageSize));
    }
  }, [page, pageSize, isEdited, isDeleted, isCreated, dispatch, isSearch]);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>USER LIST</h4>
            <p className={classes.cardCategoryWhite}>
              List of users currently in the system
            </p>
          </CardHeader>
          <CardBody>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={6}>
                <ThemeProvider theme={theme}>
                  <Button
                    onClick={handleCreateUser}
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    Create
                  </Button>
                </ThemeProvider>
              </Grid>
              <Grid item style={{ textAlign: "end" }} xs={6}>
                <div className={classess.searchWrapper}>
                  {/* <input ref={refContainer}></input> */}
                  <CustomInput
                    formControlProps={{
                      className: classess.margin + " " + classess.search,
                    }}
                    inputProps={{
                      placeholder: "Tìm Kiếm",
                      inputProps: {
                        "aria-label": "Search",
                      },
                      name: "keyword",
                      inputRef: refContainer,
                    }}
                  />
                  <Buttonn
                    onClick={handleSearch}
                    color="info"
                    aria-label="edit"
                    justIcon
                    round
                  >
                    <Search />
                  </Buttonn>
                  {isSearch ? (
                    <Buttonn
                      onClick={handleCancelSearch}
                      color="rose"
                      aria-label="edit"
                      justIcon
                      round
                    >
                      <ClearIcon />
                    </Buttonn>
                  ) : null}
                </div>
              </Grid>
            </Grid>

            <UserTable
              tableHeaderColor="info"
              tableHead={[
                "Account",
                "Password",
                "Name",
                "Gmail",
                "Phone",
                "Actions",
              ]}
              tableData={userInfo}
            />
            <PopupUser />
            <div className={classes.root}>
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={userInfo.totalPages}
                  page={page}
                  onChange={handleChangePage}
                  shape="rounded"
                />
                <DetailUser />
              </Box>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
