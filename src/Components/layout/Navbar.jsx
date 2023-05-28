import React from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";

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
          <a href="#" style={iconStyle}>
            {title}
          </a>
        </Stack>
        <List component="div" disablePadding sx={{ display: "flex" }}>
          <ListItemButton component="a" href="#">
            <ListText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
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
