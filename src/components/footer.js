import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../utils/consts";
import { EG } from "country-flag-icons/react/3x2";
import { CountryDropdown } from "react-country-region-selector";

export default function Footer() {
  const [country, selectCountry] = useState("");
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          color: colors.light_grey1,
          backgroundColor: colors.light_grey3,
          pt: 3,
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
            }}
          >
            HELP & INFORMATION
          </Box>

          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Help
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Track order
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Delivery & returns
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Sitemap
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
            }}
          >
            About us
          </Box>

          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Careers at ASOS
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Corporate responsibility
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Investors' site
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Sitemap
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
            }}
          >
            MORE FROM ASOS
          </Box>

          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Mobile and ASOS apps
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            ASOS Marketplace
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Gift vouchers
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            Black Friday
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
              "&:hover": { color: colors.baby_blue },
            }}
          >
            ASOS x Thrift+
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
            }}
          >
            Shopping From
          </Box>

          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              fontSize: "13px",
              textDecoration: "none",
              color: colors.light_grey1,
            }}
          >
            <Box>You are in</Box>
            <Box sx={{ ml: 1, width: 20, height: 20 }}>
              <EG title="United States" />
            </Box>
            <Box
              sx={{
                ml: 1,
                mr: 1,
              }}
            >
              |
            </Box>
            <Box sx={{ "& MuiBox-root select": { width: "50px" } }}>
              <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          pl: 5,
          pt: 1,
          pb: 1,
          color: colors.light_grey1,
          backgroundColor: "#cfcfcf",
          textAlign: "left",
        }}
      >
        © 2023 Coup
      </Box>
    </div>
  );
}
