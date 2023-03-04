import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

export default function BrandImg({ img, i, focused, setFocused }) {
  console.log(focused);
  return (
    <Link>
      <Box
        onMouseEnter={() => {
          setFocused(`${i}`);
        }}
        onMouseLeave={() => {
          setFocused("all");
        }}
        sx={{
          opacity: focused == i ? 1 : focused == "all" ? 1 : 0.3,
          transition: "1s",
        }}
      >
        <img src={img} width="193px" />
      </Box>
    </Link>
  );
}
