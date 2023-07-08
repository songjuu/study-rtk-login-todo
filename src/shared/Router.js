import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Write from "../pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
