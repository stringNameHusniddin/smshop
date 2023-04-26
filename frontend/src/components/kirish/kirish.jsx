import { useState } from "react";
import Login from "../login/login";
import Register from "../register/register";
import "./kirish.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Kirish = () => {
  const [loginOr, setLoginOr] = useState("kirish");

  const changeClass = () => {
    if (loginOr === "kirish") setLoginOr("register");
    else setLoginOr("kirish");
  };

  return (
    <div className="container">
      <div className="kirish">
        <div className="header">
          <div className="btns_kirish">
            <button
              style={{ borderTopLeftRadius: "8px" }}
              onClick={changeClass}
              className={loginOr === "kirish" ? "active" : "disactive"}
            >
              Kirish
            </button>
            <button
              className={loginOr === "register" ? "active" : "disactive"}
              onClick={changeClass}
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
        {loginOr === "kirish" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Kirish;
