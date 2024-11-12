import Page3 from "./components/Page3";
import Page2 from "./components/Page2";
import Login from "./components/Login/Login";
import Page1 from "./components/Page1";

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ApiExample from "./Table/ApiExample";

function App() {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/table" element={<ApiExample />} />
    </Routes>
  );
}

export default App;
