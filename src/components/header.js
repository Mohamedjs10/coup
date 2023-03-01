import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavbarButton from "./mini-components/navbarButton";
import { colors } from "../utils/consts";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Modal from "@mui/material/Modal";

export default function () {
  const [isVisible, setIsVisible] = useState("none");
  const [dropdownType, setDropdownType] = useState("none");
  const [manWomanTab, setManWomanTab] = useState("woman");

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          bgcolor: colors.dark_grey,
          display: "flex",
          justifyContent: "start",
          alightItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100px",
            color: colors.white,
            bgcolor: colors.dark_grey,
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            borderRight: "1px solid white",
            pl: 10,
            pr: 2,
          }}
        >
          <Box
            sx={{ alignSelf: "center", fontWeight: "500", fontSize: "40px" }}
          >
            Coup
          </Box>
        </Box>
        <Box
          onClick={() => {
            setManWomanTab("woman");
          }}
          sx={{
            width: "100px",
            color: colors.white,
            bgcolor:
              manWomanTab === "woman" ? colors.light_grey1 : colors.dark_grey,
            "&:hover": { bgcolor: colors.light_grey1 },
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Box sx={{ alignSelf: "center" }}>Women</Box>
        </Box>
        <Box
          onClick={() => {
            setManWomanTab("man");
          }}
          sx={{
            width: "100px",
            color: colors.white,
            bgcolor:
              manWomanTab === "man" ? colors.light_grey1 : colors.dark_grey,
            "&:hover": { bgcolor: colors.light_grey1 },
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Box sx={{ alignSelf: "center" }}>Men</Box>
        </Box>
        <Box sx={{ width: "800px", p: 1 }}>
          <TextField
            sx={{
              bgcolor: "white",
              borderRadius: "20px",
              borderColor: "white",

              "& .MuiInputBase-root": {
                borderRadius: "20px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment disableTypography position="end">
                  <SearchIcon sx={{ color: "#000" }} />
                </InputAdornment>
              ),
            }}
            fullWidth
            // className="inputRounded"
            placeholder="Search for items and brands"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box
          sx={{
            width: "150px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ml: 5,
          }}
        >
          <Box component={Link} to="/">
            <PersonOutlineIcon
              sx={{ color: colors.white, fontSize: 30 }}
            ></PersonOutlineIcon>
          </Box>
          <Box component={Link} to="/">
            <FavoriteBorderIcon
              sx={{ color: colors.white, fontSize: 28 }}
            ></FavoriteBorderIcon>
          </Box>
          <Box component={Link} to="/">
            <WorkOutlineIcon
              sx={{ color: colors.white, fontSize: 27 }}
            ></WorkOutlineIcon>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: colors.light_grey1,
        }}
      >
        <Box className="w100 flex-r-js-as container">
          <NavbarButton
            title="Ramadan"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="New In"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Clothing"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Dresses"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Shoes"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Sports Wear"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Jeans"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Accessories"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Top Shop"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Face + Body"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Brand"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Outlet"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
          <NavbarButton
            title="Marketplace"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            setDropdownType={setDropdownType}
          />
        </Box>
      </Box>
      <Box
        onMouseEnter={() => {
          setIsVisible("");
        }}
        onMouseLeave={() => {
          setIsVisible("none");
        }}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          ml: "auto",
          mr: "auto",
          width: "1320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
          // transition: "1s",
        }}
      >
        <Box
          sx={{
            display: isVisible,
            width: "100%",
            height: "400px",
            bgcolor: colors.light_grey3,
            color: colors.black,
          }}
        >
          {dropdownType}
        </Box>
      </Box>
      <Box
        sx={{
          display: isVisible ? "none" : "",
          width: "100%",
          height: "200vh",
          bgcolor: "grey",
          opacity: "0.7",
          position: "absolute",
        }}
      ></Box>
    </Box>
  );
}
