import React from "react";
import BrandCard from "./brandCard";
import Box from "@mui/material/Box";
const imgs = [
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_tailoring_moment_870x1110.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_new_balance_moment_870x1110.jpg",
];
export default function trendingSection() {
  return (
    <Box
      className="container vertical-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 6,
        flexWrap: "wrap",
      }}
    >
      {imgs.map((item, i) => (
        <BrandCard img={imgs[i]} />
      ))}
    </Box>
  );
}
