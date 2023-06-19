import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Cardbody = styled(Box)({
  background: "inherit",
  paddingBlock: "1rem",
  paddingLeft: "15px",
  width: "100%",
  //   textAlign: "center",
  borderRadius: ".5rem",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
const Paperstyled = styled(Box)({
  background: "inherit",
  paddingBlock: ".3em",
  paddingLeft: "12px",
  width: "100%",
  borderRight: "2px solid grey",
  borderRadius: ".35rem 0 0 .35rem",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
const Blockstyled = styled(Box)({
  background: "#33272766",
  paddingBlock: ".4em",
  paddingLeft: "12px",
  width: "100%",
  // borderRight: "2px solid grey",
  borderRadius: ".34rem",
  boxShadow: "0px 2px 8px -1px rgba(0,0,0,0.2)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "&:hover": {
    background: "#332727a0",
    cursor: "pointer",
  },
});

const Card = ({ children }) => {
  return <Cardbody>{children}</Cardbody>;
};

const Paper = ({ children }) => {
  return <Paperstyled>{children}</Paperstyled>;
};
const RepoBlock = ({ children }) => {
  return <Blockstyled>{children}</Blockstyled>;
};

export { Card, Paper, RepoBlock };
