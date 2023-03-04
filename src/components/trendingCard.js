import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

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
      <Box sx={{ width: "300px", textDecoration: "none" }}>
        <Box
          sx={{
            cursor: "pointer",
            margin: "auto",
            height: "400px",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
            transition: "all .3s ease-in-out",
            "&:hover": {
              // transform: "scale(1.02)",
            },
          }}
        ></Box>
        <Box sx={{ textAlign: "center", pt: 2 }}>TAILORING</Box>
        <Box sx={{ textAlign: "center", pt: 2, pb: 2 }}>
          Suit up, look sharp
        </Box>
      </Box>
    </Link>
  );
}
