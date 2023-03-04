import React, { useState } from "react";
import { colors, items } from "../utils/consts";
import { Link, useNavigate, navigate } from "react-router-dom";

import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function ItemCard({ discount, sellingFast, moreColors, imgs }) {
  const navigate = useNavigate();
  const [currentBg, setCurrentBg] = useState(imgs[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Box
      sx={{
        m: 1.5,
        width: "300px",
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      <Box
        onMouseEnter={() => {
          setCurrentBg(imgs[1]);
        }}
        onMouseLeave={() => {
          setCurrentBg(imgs[0]);
        }}
        sx={{
          cursor: "pointer",
          position: "relative",
          margin: "auto",
          //   width: "300px",
          height: "400px",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          // borderRadius: "2px",
          transition: "all .3s ease-in-out",
          "&:hover": {
            // transform: "scale(1.02)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "90px",
            top: "88%",
            color: colors.dark_grey,
            bgcolor: colors.white,
          }}
        >
          <Box
            sx={{
              pl: 1,
              pr: 1,
              pt: 0.5,
              pb: 0.5,
              fontSize: "10px",
            }}
          >
            MORE COLORS
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "45px",
            top: "5%",
            color: colors.dark_pink,
            bgcolor: colors.white,
          }}
        >
          <Box
            sx={{
              pl: 1,
              pr: 1,
              pt: 0.5,
              pb: 0.5,
              fontSize: "10px",
            }}
          >
            -10 %
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "90px",
            top: "80%",
            left: "70%",
            color: "white",
            bgcolor: "rgb(50,50,50,.7)",
            borderRadius: "50px 0px 0px 50px",
          }}
        >
          <Box
            sx={{
              pl: 1,
              pr: 1,
              pt: 0.5,
              pb: 0.5,
              fontSize: "12px",
            }}
          >
            SELLING FAST
          </Box>
        </Box>
        <Box
          onClick={(e) => {
            e.stopPropagation();
            console.log("heart");
            setIsFavorite(!isFavorite);
          }}
          sx={{
            position: "absolute",
            height: "35px",
            width: "35px",
            top: "88%",
            left: "85%",
            bgcolor: "#f9f8f8",
            borderRadius: "50%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Box sx={{ fontSize: 30, margin: "auto" }}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ mt: 2 }}>
          adidas Originals x Thebe Magugu t-shirt in off white
        </Box>
        <Box
          component="span"
          sx={{ mt: 2, mb: 2, mr: 1.5, textDecoration: "line-through" }}
        >
          £33.00
        </Box>
        <Box component="span" sx={{ mb: 2, color: colors.red }}>
          £29.70
        </Box>
      </Box>
    </Box>
  );
}
