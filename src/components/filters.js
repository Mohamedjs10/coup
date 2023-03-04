import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { colors } from "../utils/consts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Filter from "./filter";
import { display } from "@mui/system";
export default function Filters() {
  const [isTextOPen, setIsTextOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "1px solid grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "13px",
          }}
          className="container"
        >
          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Home
          </Box>
          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Women
          </Box>

          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            A To Z Of Brands
          </Box>
          <ArrowForwardIosIcon sx={{ fontSize: "8px" }} />

          <Box
            sx={{
              color: colors.dark_grey,
              textDecoration: "none",
              p: 1,
              m: 1,
            }}
            component={Link}
          >
            Dr Martens
          </Box>
        </Box>
      </Box>
      <Box className="vertical-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          Women's Purses, Bags & Handbags
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "550px",
                // wordbreak: "break-all",
              }}
            >
              {!isTextOPen && (
                <Box>
                  Score an accessory win with our edit of women’s bags ...
                </Box>
              )}
              {isTextOPen && (
                <Box>
                  Score an accessory win with our edit of women’s bags. With
                  graphic-printed tote bags and 90s-inspired shoulder bags
                  ruling the plus-one game RN, ASOS DESIGN is your go-to when it
                  comes to staying on trend. Mix things up with quilted and
                  embellished cross-body bags from Love Moschino and River
                  Island, or shop something a little roomier with backpacks,
                  holdalls and travel bags for upcoming vacays (and stay-cays).
                  And if it’s purses and card holders you’re after, mock-croc
                  styles from SVNX and Accessorize have your ‘fashion and
                  function’ quota nailed.
                </Box>
              )}
              <Box>
                {!isTextOPen ? (
                  <KeyboardArrowDownIcon
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsTextOpen(true);
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsTextOpen(false);
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: colors.light_grey3,
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
        }}
      >
        <Box
          className="container vertical-container"
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </Box>
      </Box>
    </Box>
  );
}
