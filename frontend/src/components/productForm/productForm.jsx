import { useContext, useState } from "react";
import "../register/register.scss";
import "./productForm.scss";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(Context);

  const [token] = useCookies(["mytoken"]);
  const [user] = useCookies(["user"]);
  const [admin, setAdmin] = useCookies(["admin"]);

  const createProduct = () => {
    if (admin.admin && admin.admin === "296143127") {
      const data = new FormData();
      data.append("title", title);
      data.append("body", body);
      data.append("cost", parseInt(cost));
      data.append("image", image);
      data.append("user", user.user);
      data.append("like", 0);

      axios
        .post("http://127.0.0.1:8000/api/product/", data, {
          headers: {
            Authorization: `Token ${token.mytoken}`,
          },
        })
        .then((res) => {
          dispatch({ type: "push_data", payload: res.data });
          navigate("/");
        });
    } else {
      alert("siz product qo'sholmatsiz");
    }
  };

  return (
    <div className="container">
      <div
        className="register"
        style={{
          height: 500,
          borderRadius: 20,
          justifyContent: "space-between",
        }}
      >
        <div className="header">
          <div className="btns">
            <p style={{ borderTopLeftRadius: "10px" }} className="active">
              Mahsulot Qo'shish
            </p>
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="sarlavha"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <textarea
              style={{
                width: "100%",
                paddingLeft: 20,
                paddingTop: 20,
                borderRadius: 0,
                border: "1px solid #2ec4b6",
              }}
              placeholder="malumotlar"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="narxi"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>

          <div className="btns">
            <label htmlFor="file" className="input_file">
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
              Rasm
            </label>
            <button onClick={createProduct} className="btn">
              Qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
