import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderFooerWrapper from "./components/headerFooerWrapper";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <HeaderFooerWrapper>
        <Box sx={{ height: "500px" }}></Box>
      </HeaderFooerWrapper>
      <Routes>
        <Route path="/quotes" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
