import Icon from "./Icon";
import { Box } from "@mui/system";
import { colors } from "../utils/consts";
import React from "react";
const socialIcons = [
  "https://i.postimg.cc/7PGMNtsS/fb.png",
  "https://i.postimg.cc/bYxd8QdK/insta.png",
  "https://i.postimg.cc/c4Wg8FVx/snap.png",
];
const paymentIcons = [
  "https://images.asos-media.com/navigation/visa-png",
  "https://images.asos-media.com/navigation/mastercard-png",
  "https://images.asos-media.com/navigation/pay-pal-png",
  "https://images.asos-media.com/navigation/american-express-png",
  "https://images.asos-media.com/navigation/visa-electron-png",
];
export default function IconsSection() {
  return (
    <Box
      className="container vertical-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Icon img={socialIcons[0]} type="social" to="fb" />
        <Icon img={socialIcons[1]} type="social" to="insta" />
        <Icon img={socialIcons[2]} type="social" to="snap" />
      </Box>
      <Box
        sx={{ border: `1px solid ${colors.dark_grey}`, height: "20px" }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Icon img={paymentIcons[0]} />
        <Icon img={paymentIcons[1]} />
        <Icon img={paymentIcons[2]} />
        <Icon img={paymentIcons[3]} />
        <Icon img={paymentIcons[4]} />
      </Box>
    </Box>
  );
}
