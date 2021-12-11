import React from "react";
import { Typography, Box, Link } from "@mui/material";

export default function FooterPart() {
  return (
    <>
      <Box sx={{}} component="footer">
        <Typography variant="h6" align="center">
          --UnderConstruction--
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Keep Learning - Keep Coding
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/portfolio_sample_reactjs/">
            Kishor Kc
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
