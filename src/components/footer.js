import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../utils/consts";

export default function footer() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          color: colors.light_grey1,
          backgroundColor: colors.light_grey3,
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
        <Box>a</Box>
      </Box>
      <Box
        sx={{
          pl: 5,
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
