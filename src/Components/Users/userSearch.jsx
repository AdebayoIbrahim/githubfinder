import React from "react";
import { Stack, Box, Button } from "@mui/material";
const UserSearch = () => {
  return (
    <Box pb={5} pl={7} sx={{ marginInline: "3%" }}>
      <Stack gap={2} direction="row" width="100%">
        <Box flex={{ xs: 15, sm: 5 }}>
          <Box>
            <form>
              <Box sx={{ width: "100%" }}>
                <Stack direction="row">
                  <input
                    placeholder="Search.."
                    type="text"
                    id="outlined-search"
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
          <Box>
            <Button>Clear</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserSearch;
