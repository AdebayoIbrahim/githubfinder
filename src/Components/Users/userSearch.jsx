import React, { useState, useContext } from "react";
import { Stack, Box, Button } from "@mui/material";
import GithubContext from "../../Context/github/githubContext";
import { AiOutlineClear } from "react-icons/ai";
const UserSearch = () => {
  const [value, setValue] = useState("");
  const { users, searchUsers, clearUsers, setAlert } =
    useContext(GithubContext);
  //getting if users.length !== 0
  const userlength = users.length > 0;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      // alert("Please input something!");
      setAlert("Please input something!");
    } else {
      searchUsers(value);
      setValue("");
    }
  };

  //clear btn function
  const hanleClick = () => {
    userlength && clearUsers();
  };

  return (
    <Box pb={5} pl={4} sx={{ marginInline: "3%" }}>
      <Stack
        gap={2}
        direction="row"
        width="100%"
        alignItems="center"
        sx={{ flexWrap: "wrap" }}
      >
        <Box flex={{ md: 4, lg: 5, sm: 4, xl: 7 }}>
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
        <Box flex={{ md: 1, lg: 4, xl: 6, sm: 2 }}>
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
                onClick={hanleClick}
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
