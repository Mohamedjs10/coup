import React, { useState } from "react";
import Box from "@mui/material/Box";
import { colors, items } from "../utils/consts";
import { Link } from "react-router-dom";

export default function Login() {
  const [clicked, setClicked] = useState("sign-in");
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
            color: colors.dark_grey,
            mb: 4,
          }}
        >
          <Link style={{ textDecoration: "none" }}>
            <Box
              onClick={() => {
                setClicked("join");
              }}
              sx={{
                borderBottom: `2px solid ${
                  clicked == "join" ? colors.baby_blue : colors.light_grey2
                }`,
                transition: "1s",
                "&:hover": {
                  // borderBottom: `2px solid ${colors.baby_blue}`,
                },
              }}
            >
              <Box
                sx={{
                  pb: 2,
                  pr: 15.5,
                  pl: 15.5,
                  color: clicked == "join" ? colors.dark_grey : "grey",

                  transition: ".2s",
                  "&:hover": {
                    opacity: clicked == "join" ? "" : ".4",
                  },
                }}
              >
                Join
              </Box>
            </Box>
          </Link>
          <Box
            sx={{
              borderBottom: `2px solid ${colors.light_grey2}`,
              pb: 2,
            }}
          >
            |
          </Box>
          <Link style={{ textDecoration: "none" }}>
            <Box
              onClick={() => {
                setClicked("sign-in");
              }}
              sx={{
                borderBottom: `2px solid ${
                  clicked == "sign-in" ? colors.baby_blue : colors.light_grey2
                }`,

                transition: "1s",
                "&:hover": {
                  // borderBottom: `2px solid ${colors.baby_blue}`,
                },
              }}
            >
              <Box
                sx={{
                  pb: 2,
                  pl: 15.5,
                  pr: 15.5,
                  transition: ".2s",
                  color: clicked == "sign-in" ? colors.dark_grey : "grey",

                  "&:hover": {
                    opacity: clicked == "sign-in" ? "" : ".4",
                  },
                }}
              >
                Sign In
              </Box>
            </Box>
          </Link>
        </Box>

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
          <Box sx={{ fontSize: "15px", textAlign: "center", mt: "10px" }}>
            forget password
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              textAlign: "center",
              mt: "20px",
              color: colors.black,
            }}
          >
            OR SIGN IN WITH...
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 5,
            color: colors.dark_grey,
            fontSize: "20px",
            mt: "30px",
          }}
        >
          <Box
            onClick={() => {
              window.location.href = "https://www.google.com/";
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              pb: 1,
              pr: 4,
              pl: 4,
              border: `2px solid ${colors.light_grey2}`,
              "&:hover": { opacity: ".6" },
              cursor: "pointer",
            }}
          >
            <img
              src="google.png"
              width="20px"
              style={{ paddingRight: "15px" }}
            />
            Google
          </Box>
          <Box
            onClick={() => {
              window.location.href = "https://www.apple.com/eg/";
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              pb: 1,
              pr: 4,
              pl: 4,
              border: `2px solid ${colors.light_grey2}`,
              "&:hover": { opacity: ".6" },
              cursor: "pointer",
            }}
          >
            <img
              src="apple.png"
              width="20px"
              style={{ paddingRight: "15px" }}
            />
            Apple
          </Box>
          <Box
            onClick={() => {
              window.location.href = "https://www.facebook.com/";
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              pb: 1,
              pr: 4,
              pl: 4,
              border: `2px solid ${colors.light_grey2}`,
              "&:hover": { opacity: ".6" },
              cursor: "pointer",
            }}
          >
            <img src="fb.png" width="20px" style={{ paddingRight: "15px" }} />
            Facebook
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
