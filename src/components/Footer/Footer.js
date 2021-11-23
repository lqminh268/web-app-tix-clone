/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer style={{background: "#fff"}} className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/user" className={classes.block}>
                User Manager
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/admin/movie" className={classes.block}>
                Movie Manager
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink to="/" className={classes.block}>
                Back To Homepage
              </NavLink>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              // href="https://www.creative-tim.com?ref=mdr-footer"
              target="_blank"
              className={classes.a}
            >
              Lê Quang Minh
            </a>
            , From CyberSoft With Love
          </span>
        </p>
      </div>
    </footer>
  );
}
