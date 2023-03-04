import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderFooerWrapper from "./components/headerFooerWrapper";
import Box from "@mui/material/Box";
import ItemCard from "./components/itemCard";
import Filters from "./components/filters";
import { colors, items } from "./utils/consts";
import TrendingSection from "./components/trendingSection";
import BrandsSection from "./components/brandsSection";
import BrandsImgsSection from "./components/brandsImgsSection";
import IconsSection from "./components/IconsSection";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Login></Login>
      {/* <HeaderFooerWrapper>
        <Filters />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            // p: 5,
            zIndex: 1,
          }}
          className="container vertical-container"
        >
          {items.map((items) => (
            <ItemCard discount sellingFast moreColors imgs={items.imgs} />
          ))}
        </Box>
        <Box
          className="vertical-container-p"
          sx={{
            bgcolor: colors.sky_blue,
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box component="img" src="clock.webp"></Box>
          <Box sx={{ fontSize: "50px" }}>EXTRA 25% OFF</Box>
          <Box sx={{ fontSize: "50px", pb: 3 }}>SHOES & ACCESSORIES!</Box>
          <Box sx={{ fontSize: "32px" }}>UP TO 70% OFF ALREADY</Box>
          <Box
            sx={{
              m: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              <Box>With Code:</Box>
              <Box
                onClick={() => {}}
                sx={{
                  ml: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "35px",
                  border: `2px solid ${colors.black}`,
                }}
              >
                ICE
              </Box>
            </Box>
          </Box>
          <Box sx={{ fontSize: "12px", pt: 3 }}>
            Outlet items only. See website banner for Ts&Cs. Selected marked
            products excluded from promo.
          </Box>
        </Box>
        <Box
          className="container-p vertical-container-p"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src="home-cover.png" width="1250px" />
        </Box>
        <TrendingSection />
        <BrandsSection />
        <BrandsImgsSection />
        <IconsSection />
      </HeaderFooerWrapper>
      <Routes>
        <Route path="/quotes" element={<></>} />
      </Routes> */}
    </div>
  );
}

export default App;
