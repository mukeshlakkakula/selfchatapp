import "./App.css";

import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import Offices from "./components/Offices";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex w-100">
        <Sidebar />

        <Routes>
          <Route exact path="/" Component={ChatBox} />
          <Route exact path="/india" Component={Offices} />
          <Route exact path="/poland" Component={Offices} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
