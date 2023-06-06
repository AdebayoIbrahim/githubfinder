import React, { useState, useContext } from "react";
import { Stack, Box, Button } from "@mui/material";
import GithubContext from "../../Context/github/githubContext";
import { AiOutlineClear } from "react-icons/ai";
const UserSearch = () => {
  const [value, setValue] = useState("");
  const { users } = useContext(GithubContext);
  //getting if users.length !== 0
  const userlength = users.length >= 0;

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please input something!");
    } else {
      // send request
    }
  };

  return (
    <Box pb={5} pl={7} sx={{ marginInline: "3%" }}>
      <Stack gap={2} direction="row" width="100%" alignItems="center">
        <Box flex={{ xs: 15, sm: 5 }}>
          <Box>
            <form onSubmit={handleSubmit}>
              <Box sx={{ width: "100%" }}>
                <Stack direction="row">
                  <input
                    placeholder="Search.."
                    type="text"
                    id="outlined-search"
                    value={value}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    sx={{
                      height: "inherit",
                      borderRadius: "0 5px 5px 0",
                      background: "rgb(51, 39, 39)",
                      width: "100px",
                      "&:hover": {
                        background: "rgb(51 39 39 / .7)",
                      },
                    }}
                    variant="contained"
                  >
                    Go
                  </Button>
                </Stack>
              </Box>
            </form>
          </Box>
        </Box>
        <Box flex={{ xs: 5, sm: 3 }}>
          {userlength && (
            <Box>
              <Button
                sx={{
                  color: "#f32cad",
                  background: "#42095a",
                  "&:hover": {
                    background: "rgb(66 9 90 /.75)",
                    color: "#ef06a7",
                  },
                }}
                variant="contained"
              >
                <AiOutlineClear
                  color="white"
                  size={15}
                  style={{ marginRight: "5px" }}
                />
                Clear
              </Button>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default UserSearch;
