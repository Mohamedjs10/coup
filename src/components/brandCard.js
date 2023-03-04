import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../utils/consts";
export default function TrendingCard({ img }) {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "black",
        "&:hover": { color: "black" },
      }}
    >
      <Box
        sx={{
          width: "500px",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            margin: "auto",
            height: "630px",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            // borderRadius: "2px",
            borderLeft: `10px solid ${colors.glory_pink}`,
            borderRight: `10px solid ${colors.green}`,
            borderTop: `10px solid ${colors.purple}`,
            borderBottom: `10px solid ${colors.pink}`,
            transition: "all .3s ease-in-out",
            "&:hover": {
              // transform: "scale(1.02)",
            },
          }}
        ></Box>
        <Box sx={{ textAlign: "center", pt: 2, fontSize: "34px" }}>TOPMAN</Box>
        <Box sx={{ textAlign: "center", pt: 2, pb: 2 }}>
          We've thought of *everything*
        </Box>
        <Box
          onClick={() => {}}
          sx={{
            display: "inline-block",
            fontSize: "20px",
            // width: "70px",
            // height: "35px",
            p: 1.5,
            color: colors.black,
            border: `2px solid ${colors.black}`,
            transition: ".5s",

            "&:hover": {
              cursor: "pointer",
              color: colors.white,
              bgcolor: colors.black,
            },
          }}
        >
          SHOP THE EDIT
        </Box>
      </Box>
    </Link>
  );
}
