import React, { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import { colors } from "../utils/consts";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FilterItem from "./mini-components/filterItem";

export default function Filter() {
  // ----------
  // Hook that alerts clicks outside of the passed ref
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  // ----------
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  // ----------------------------------------------------------------------------
  const [selectedNum, setSelectedNum] = useState(0);
  const [isopen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // useEffect(() => {
  //   return () => {
  //     setSelectedNum(0);
  //   };
  // }, []);
  return (
    <Box sx={{ position: "relative" }} ref={wrapperRef}>
      <Box
        onClick={(event) => {
          setIsOpen((prev) => !prev);
          setIsOpen(true);
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
        Sort
        {isopen == true ? (
          <KeyboardArrowDownIcon sx={{}} />
        ) : (
          <KeyboardArrowUpIcon sx={{}} />
        )}
      </Box>
      <div>
        <Popover
          sx={{ "& .MuiPaper-root": { borderRadius: 0 }, mt: "5px" }}
          elevation={5}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Box
            ref={wrapperRef}
            sx={{
              p: "10px",
              width: "350px",
              bgcolor: colors.light_grey3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                ml: "10px",
                mr: "10px",
              }}
            >
              <Box>{selectedNum} selected</Box>
              <Box
                onClick={() => {
                  setSelectedNum(0);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "35px",
                  border: `2px solid ${colors.dark_grey}`,
                  "&:hover": {
                    cursor: "pointer",
                    color: colors.baby_blue,
                    border: `2px solid ${colors.baby_blue}`,
                  },
                }}
              >
                CLEAR
              </Box>
            </Box>
            <FilterItem
              title="Recommended"
              setSelectedNum={setSelectedNum}
              selectedNum={selectedNum}
            />
            <FilterItem
              title="What's New"
              setSelectedNum={setSelectedNum}
              selectedNum={selectedNum}
            />
            <FilterItem
              title="Price hight to low"
              setSelectedNum={setSelectedNum}
              selectedNum={selectedNum}
            />
            <FilterItem
              title="Price low to high"
              setSelectedNum={setSelectedNum}
              selectedNum={selectedNum}
            />
          </Box>
        </Popover>
      </div>
    </Box>
  );
}
