import React from "react";
import Header from "components/Header";
import Home from "components/Home";
import Login from "components/Login";
import Backdoor from "components/Backdoor";
import ProductDelete from "organisms/Product.Delete";
import ProductPost from "organisms/Product.Post";
import ProductUpdate from "organisms/Product.Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/backdoor" element={<Backdoor />}></Route>
          <Route path="/backdoor/post" element={<ProductPost />}></Route>
          <Route path="/backdoor/update" element={<ProductUpdate />}></Route>
          <Route path="/backdoor/delete" element={<ProductDelete />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
