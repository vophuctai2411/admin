import React, { useState, forwardRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
// material-ui
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../theme/styles/NavBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
//
import pages from "../utils/pages";
import { setCookiesValue } from "../utils/helpers";

function NavBar(props) {
  const classes = makeStyles(styles)();
  // state, props
  const [openSidebar, setOpenSidebar] = useState(true);
  const history = useHistory();
  // functions
  const handleSignOutClick = () => {
    setCookiesValue("authToken");
    history.push("/admin/auth");
  };
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  // render
  const isDesktop = useMediaQuery(useTheme().breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  return (
    <>
      <AppBar className={classes.appbar} color="primary" position="fixed">
        <Toolbar>
          <a
            className="navbar-brand"
            rel="noopener noreferrer"
            href="http://localhost:3000"
            target="_blank"
          >
            Content<small>Management</small>
          </a>
          <div className={classes.flexGrow} />
          <Hidden lgUp>
            <IconButton
              className={classes.iconButton}
              color="inherit"
              onClick={handleSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <NavLink {...props} />
  </div>
));
