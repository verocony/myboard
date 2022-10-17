import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import List from "../pages/List";
import Form from "../pages/Form";
import Detail from "../pages/Detail";
import Update from "../pages/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/List" element={<List />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
