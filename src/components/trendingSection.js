import React from "react";
import TrendingCard from "./trendingCard";
import Box from "@mui/material/Box";
const imgs = [
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_tailoring_moment_870x1110.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_new_balance_moment_870x1110.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_finishing_touch_accessories_moment_870x1110.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/events-2023/ramadan/wk27-28-prime/mw/moments/mw_global_asos_design_denim_moment_870x1110.jpg",
];
export default function trendingSection() {
  return (
    <Box
      className="container vertical-container"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      {imgs.map((item, i) => (
        <TrendingCard img={imgs[i]} />
      ))}
    </Box>
  );
}
