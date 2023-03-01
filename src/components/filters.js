import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { colors } from "../utils/consts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function filters() {
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "1px solid grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "13px",
          }}
          className="container"
        >
          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Home
          </Box>
          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Women
          </Box>

          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            A To Z Of Brands
          </Box>
          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Dr Martens
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Women's Dr. Martens
      </Box>
      <Box
        sx={{
          bgcolor: colors.light_grey3,
          height: "200px",
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
        }}
      >
        <Box className="container">xxxxxxxx</Box>
      </Box>
    </Box>
  );
}
