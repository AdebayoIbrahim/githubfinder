import React from "react";

import {
  AppBar,
  Toolbar,
  Stack,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Styledbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "50px !important",
});
const iconStyle = {
  marginLeft: "5px",
  textDecoration: "none",
  color: "white",
};
const ListText = styled(ListItemText)({
  color: "white",
  fontSize: "1rem !important",
});
function Navbar({ title }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: "999",

        background: "rgb(51, 39, 39)",
        paddingInline: ".7em",
      }}
    >
      <Styledbar>
        <Stack direction="row" alignItems="center">
          <GitHub />
          <Link to="/" style={iconStyle}>
            {title}
          </Link>
        </Stack>
        <List component="div" disablePadding sx={{ display: "flex" }}>
          <ListItemButton component={Link} to="/">
            <ListText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListText primary="About" />
          </ListItemButton>
        </List>
      </Styledbar>
    </AppBar>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};
export default Navbar;
