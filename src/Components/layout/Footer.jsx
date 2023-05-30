import React from "react";
import { Box } from "@mui/material";
import { FaHashtag } from "react-icons/fa";

const styles = {
  textAlign: "center",
  color: "white",
  padding: "20px",
  background: "rgb(51 39 39 /.7)",
};
const Footer = () => {
  return (
    <footer style={styles}>
      <Box>
        <FaHashtag size={30} />
        <p>Copyright&copy; {new Date().getFullYear()}</p>
      </Box>
    </footer>
  );
};

export default Footer;
