import React from "react";
import { AppBar, Typography, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Box
          sx={{
            display: "inline flex",
            margin: "10px",
          }}
        >
          <AccountCircleIcon sx={{ margin: "8px" }} />
          <Typography sx={{ margin: "8px" }}>Portfolio</Typography>
        </Box>
      </AppBar>
    </>
  );
}
