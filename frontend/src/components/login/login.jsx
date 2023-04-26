import axios from "axios";
import "../../components/register/register.scss";
import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useCookies(["mytoken"]);
  const [user, setUser] = useCookies(["user"]);
  const [image, setImage] = useCookies(["image"]);
  const [admin, setAdmin] = useCookies(["admin"]);

  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  function isAdmin(admin) {
    if (admin) {
      return "296143127";
    } else {
      return "0";
    }
  }

  const postUser = () => {
    axios
      .post("http://127.0.0.1:8000/login", {
        username,
        password,
      })
      .then((res) => {
        setToken("mytoken", res.data.token);
        navigate("/");
        state.users.map((mal) => {
          if (mal.username === username) {
            setUser("user", mal.id);
            setImage("image", mal.image);
            setAdmin("admin", isAdmin(mal.is_biznes));
          }
        });
      });
  };

  return (
    <div className="register">
      <div className="input">
        <input
          type="text"
          id="ism"
          placeholder="ism"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input">
        <input
          type="password"
          id="parol"
          placeholder="parol"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="btns">
        <button className="btn" onClick={postUser}>
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
