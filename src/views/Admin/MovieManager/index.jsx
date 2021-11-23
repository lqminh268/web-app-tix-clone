import React, { useEffect, useState } from "react";
// @material-ui/core components
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import MovieTable from "components/Table/MovieTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Box, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieInfo } from "redux/Actions/MovieActions";
import { green } from "@material-ui/core/colors";
import PopupMovie from "components/Popup/CUMovie";
import createAction from "redux/Actions";
import { SET_CREATED } from "redux/Constants/MovieConstants";
import { CREATE_MOVIE } from "redux/Constants/MovieConstants";
import Pagination from '@material-ui/lab/Pagination';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const movieInfor = useSelector((state) => state.movieReducers.movieInfor);
  const isEdited = useSelector((state) => state.movieReducers.isEdited);
  const isCreated = useSelector((state) => state.movieReducers.isCreated);
  const isDeleted = useSelector((state) => state.movieReducers.isDeleted);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchMovieInfo(page, pageSize));
  }, [page, pageSize, dispatch, isEdited, isCreated, isDeleted]);

  const handleCreateMovie = () => {
    dispatch(
      createAction(CREATE_MOVIE, {
        selectedMovie: {},
        isPopUp: true,
        typePopUp: "Thêm Phim",
      })
    );
    dispatch(createAction(SET_CREATED, false));
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>MOVIE LIST</h4>
            <p className={classes.cardCategoryWhite}>
              List of movies currently in the system
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
                  onClick={handleCreateMovie}
                >
                  Create
                </Button>
              </ThemeProvider>
            </Grid>
            <MovieTable
              tableHeaderColor="rose"
              tableHead={[
                "ID",
                "Name",
                "Poster",
                "Grade",
                "Release Date",
                "Actions",
              ]}
              tableData={movieInfor}
            />
            <PopupMovie />
            <div className={classes.root}>
              <Box display="flex" justifyContent="center" mt={3}>
                <Pagination
                  count={movieInfor.totalPages}
                  page={page}
                  onChange={handleChangePage}
                  shape="rounded"
                />
              </Box>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
