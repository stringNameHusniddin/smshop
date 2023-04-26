import axios from "axios";
import "./register.scss";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [image1, setImage1] = useState("");
  const [email, setEmail] = useState("");

  const [token, setToken] = useCookies(["mytoken"]);
  const [user, setUser] = useCookies(["user"]);
  const [image, setImage] = useCookies(["image"]);
  const [admin, setAdmin] = useCookies(["admin"]);

  const navigate = useNavigate();

  const createUser = () => {
    const data = new FormData();
    data.append("image", image1);
    data.append("username", username);
    data.append("password", password);
    data.append("email", email);
    axios.post("http://127.0.0.1:8000/api/user/", data).then((res) => {
      axios.get("http://127.0.0.1:8000/api/user/").then((res1) => {
        res1.data.map((mal) => {
          if (mal.username === username) {
            setUser("user", mal.id);
            setImage("image", mal.image);
            setAdmin("admin", mal.is_biznes ? "296143127afvxeqw" : "0");
          }
        });
      });
      axios
        .post("http://127.0.0.1:8000/login", {
          username,
          password,
        })
        .then((res) => {
          navigate("/");
          setToken("mytoken", res.data.token);
        });
    });
  };

  return (
    <div className="register" style={{ height: 430 }}>
      <div className="input">
        <input
          type="text"
          id="ism"
          placeholder="ism"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input">
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
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
        <label htmlFor="file" className="input_file">
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setImage1(e.target.files[0])}
          />
          Rasm
        </label>
        <button className="btn" onClick={createUser}>
          Ro'yxatdan o'tish
        </button>
      </div>
    </div>
  );
};

export default Register;
