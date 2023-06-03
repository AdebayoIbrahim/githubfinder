import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Cardbody = styled(Box)({
  background: "332727d0",
  paddingBlock: "1rem",
  paddingLeft: "15px",
  width: "100%",
  //   textAlign: "center",
  borderRadius: ".5rem",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
});

const Card = ({ children }) => {
  return <Cardbody>{children}</Cardbody>;
};

export default Card;