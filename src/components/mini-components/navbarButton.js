import React from "react";
import Box from "@mui/material/Box";
import { colors } from "../../utils/consts";

export default function navbarButton({ title, setIsVisible, setDropdownType }) {
  return (
    <Box
      onMouseEnter={() => {
        setIsVisible("");
        setDropdownType(title);
      }}
      onMouseLeave={() => {
        setIsVisible("none");
      }}
      sx={{
        color: colors.white,
        fontSize: "14px",
        // ml: "5px",
        // mr: "5px",
        zIndex: `${title === "Outlet" ? "" : "1"}`,
        fontWeight: `${title === "Outlet" ? "bold" : ""}`,
        bgcolor: `${title === "Outlet" ? colors.red : ""}`,
        color: colors.white,
        transform: `${title === "Outlet" ? "skewX(-20deg)" : ""}`,
        "&:hover": {
          bgcolor: colors.light_grey3,
          color: colors.black,
          cursor: "pointer",
          transform: `${title === "Outlet" ? "skewX(0deg)" : ""}`,
        },
      }}
      className="red"
    >
      <Box
        sx={{
          pt: "15px",
          pb: "15px",
          pr: "10px",
          pl: "10px",
          transform: `${title === "Outlet" ? "skewX(20deg)" : ""}`,
          "&:hover": {
            transform: `${title === "Outlet" ? "skewX(0deg)" : ""}`,
          },
        }}
      >
        {title}
      </Box>
    </Box>
  );
}
