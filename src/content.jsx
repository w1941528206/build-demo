import React from "react";
import { Route, Routes } from "react-router-dom";
import One from "./pages/01";
import Two from "./pages/02";
import "./index.less";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<One />} />
      <Route path="/two" element={<Two />} />
    </Routes>
  );
};

export default Content;
