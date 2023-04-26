import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";

import GlobalChat from "../globalChat/globalChat";
import Kirish from "../kirish/kirish";
import ProductForm from "../productForm/productForm";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import Detail from "../detail/detail";

import "./app.scss";
import axios from "axios";
import { Context } from "../../context/context";

const App = () => {
  const [token] = useCookies(["mytoken"]);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cometariya/", {
        headers: {
          Authorization: `Token ${
            token.mytoken
              ? token.mytoken
              : "8029988035f177fd1634170b09e056f4999e3d37"
          }`,
        },
      })
      .then((res) => {
        dispatch({ type: "get_c", payload: res.data });
      });

    axios
      .get("http://127.0.0.1:8000/api/chat/only/", {
        headers: {
          Authorization: `Token ${
            token.mytoken
              ? token.mytoken
              : "8029988035f177fd1634170b09e056f4999e3d37"
          }`,
        },
      })
      .then((res) => {
        dispatch({ type: "get_private_messages", payload: res.data });
      });

    axios
      .get("http://127.0.0.1:8000/api/user/", {
        headers: {
          Authorization: `Token  ${
            token.mytoken
              ? token.mytoken
              : "8029988035f177fd1634170b09e056f4999e3d37"
          }`,
        },
      })
      .then((res) => {
        dispatch({ type: "get_users", payload: res.data });
      });

    axios
      .get("http://127.0.0.1:8000/api/product/", {
        headers: {
          Authorization: `Token  ${
            token.mytoken
              ? token.mytoken
              : "8029988035f177fd1634170b09e056f4999e3d37"
          }`,
        },
      })
      .then((res) => {
        dispatch({ type: "get_data", payload: res.data });
      });

    axios
      .get("http://127.0.0.1:8000/api/chat/global/", {
        headers: {
          Authorization: `Token  ${
            token.mytoken
              ? token.mytoken
              : "8029988035f177fd1634170b09e056f4999e3d37"
          }`,
        },
      })
      .then((res) => {
        dispatch({ type: "get_messages", payload: res.data });
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="globalChat" element={<GlobalChat />} />
        <Route path="addProduct" element={<ProductForm />} />
        <Route path="register" element={<Kirish />} />
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
