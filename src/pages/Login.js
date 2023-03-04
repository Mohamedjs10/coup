import React from "react";
import Box from "@mui/material/Box";
import { colors, items } from "../utils/consts";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: colors.light_grey2,
        display: "flex",
        gap: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{}}>
        <img src="coup-transparent.png" width="100px"></img>
      </Box>
      <Box
        className="vertical-container-p"
        sx={{
          color: "#aaa",
          bgcolor: colors.white,
          width: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: "" }}>Join & Sign In</Box>
        <Box>
          <Box sx={{ mt: "10px" }}>EMAIL ADDRESS:</Box>
          <input
            type="text"
            className="login-input"
            style={{ marginTop: "10px" }}
          />
          <Box sx={{ mt: "10px" }}>PASSWORD:</Box>
          <input
            type="text"
            className="login-input"
            style={{ marginTop: "10px" }}
          />
          <Link style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: "349px",
                height: "45px",
                mt: "10px",
                bgcolor: colors.dark_grey,
                color: colors.white,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "1s",
                "&:hover": { opacity: ".5" },
              }}
            >
              Sign In
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
