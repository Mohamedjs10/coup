import React, { useState } from "react";
import Box from "@mui/material/Box";
import BrandImg from "./brandImg";

const imgs = [
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png",
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png",
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg",
  "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg",
];
export default function BrandsImgsSection() {
  const [focused, setFocused] = useState("all");

  return (
    <Box className="bottom-line">
      <Box
        className="container vertical-container "
        sx={{ textAlign: "center", fontSize: "25px" }}
      >
        <Box>TRENDING BRANDS</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {imgs.map((item, i) => (
            <BrandImg
              img={imgs[i]}
              i={i}
              focused={focused}
              setFocused={setFocused}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
