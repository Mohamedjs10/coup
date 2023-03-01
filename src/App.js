import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderFooerWrapper from "./components/headerFooerWrapper";
import Box from "@mui/material/Box";
import ItemCard from "./components/itemCard";
import Filters from "./components/filters";
import { colors, items } from "./utils/consts";

function App() {
  return (
    <div className="App">
      <HeaderFooerWrapper>
        <Filters />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            // p: 5,
            zIndex: 1,
          }}
          className="container"
        >
          {items.map((items) => (
            <ItemCard discount sellingFast moreColors imgs={items.imgs} />
          ))}
        </Box>
        {/* <Box sx={{ height: "500px" }}></Box> */}
      </HeaderFooerWrapper>
      <Routes>
        <Route path="/quotes" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
