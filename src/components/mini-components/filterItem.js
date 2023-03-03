import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { colors } from "../../utils/consts";
export default function FilterItem({ title, selectedNum, setSelectedNum }) {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");
  console.log(selectedNum);
  useEffect(() => {
    if (selectedNum == 0) {
      setColor("black");
      setBgColor("white");
    }
    //   return () => {
    //     setSelectedNum(0);
    //   };
  }, [selectedNum]);
  return (
    <Box
      onClick={() => {
        // update count of selected
        if (bgColor === "white") {
          setSelectedNum((prev) => prev + 1);
        } else {
          setSelectedNum((prev) => prev - 1);
        }
        // change bgcolor
        setBgColor((prev) => {
          if (prev === "white") {
            return colors.baby_blue;
          } else {
            return "white";
          }
        });
        // change color
        setColor((prev) => {
          if (prev === "white") {
            return "black";
          } else {
            return "white";
          }
        });
      }}
      sx={{
        p: "14px",
        bgcolor: bgColor,
        color: color,
        borderRadius: "5px",
        m: "10px",
        "&:hover": {
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          cursor: "pointer",
        },
      }}
    >
      {title}
    </Box>
  );
}
