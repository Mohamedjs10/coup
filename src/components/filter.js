import React, { useState } from "react";
import Box from "@mui/material/Box";
import { colors } from "../utils/consts";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function Filter() {
  const [isopen, setIsOpen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        onClick={(event) => {
          setIsOpen((prev) => !prev);
          setAnchorEl(event.currentTarget);
        }}
        sx={{
          p: 0.5,
          m: 1,
          width: "220px",
          height: "40px",
          borderTop: `1px solid ${colors.transparent_grey}`,
          borderBottom: `1px solid ${colors.transparent_grey}`,
          color: colors.transparent_grey,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow:
            isopen &&
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          cursor: isopen && "pointer",
          color: isopen && colors.baby_blue,
          bgcolor: isopen && colors.white,
          border: isopen && `1px solid ${colors.baby_blue}`,
        }}
      >
        filter
        {isopen == true ? (
          <KeyboardArrowDownIcon sx={{}} />
        ) : (
          <KeyboardArrowUpIcon sx={{}} />
        )}
      </Box>
      <div>
        <Popover
          sx={{ "& .MuiPaper-root": { borderRadius: 0 }, mt: "5px" }}
          elevation={0}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{}}>The content of the Popover.</Typography>
        </Popover>
      </div>
    </Box>
  );
}
