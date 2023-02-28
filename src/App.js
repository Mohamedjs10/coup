import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderFooerWrapper from "./components/headerFooerWrapper";
function App() {
  return (
    <div className="App">
      <HeaderFooerWrapper>gg</HeaderFooerWrapper>
      <Routes>
        <Route path="/quotes" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
