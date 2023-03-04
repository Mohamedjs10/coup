import React from "react";
import { Box } from "@mui/system";
import { colors } from "../utils/consts";

export default function Icon({ img, type, to }) {
  return (
    <Box
      onClick={() => {
        window.location.href =
          to == "fb"
            ? "https://www.facebook.com/"
            : to == "insta"
            ? "https://www.instagram.com/"
            : "https://www.snapchat.com/";
      }}
      src={img}
      width="30px"
      component="img"
      sx={{
        borderRadius: type == "social" ? "50%" : "",
        border: type == "social" ? `2px solid ${colors.white}` : "",

        "&:hover": {
          border: type == "social" ? `2px solid ${colors.baby_blue}` : "",
          cursor: type == "social" ? "pointer" : "",
        },
      }}
    ></Box>
  );
}
