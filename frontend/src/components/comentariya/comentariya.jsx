import { useState, useContext } from "react";
import { useCookies } from "react-cookie";

import { Context } from "../../context/context";
import axios from "axios";
import "./comentariya.scss";

const Comentariya = ({ id }) => {
  const [title, setTitle] = useState("");

  const [token] = useCookies(["mytoken"]);
  const [user] = useCookies(["user"]);
  const [image] = useCookies("image");

  const { state, dispatch } = useContext(Context);

  const CreateComentariya = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/cometariya/",
        {
          title,
          user: user.user,
          userImage: image.image,
          product: parseInt(id.id),
        },
        {
          headers: {
            Authorization: `Token ${token.mytoken}`,
          },
        }
      )
      .then((res) => {
        setTitle("");
        dispatch({ type: "push_c", payload: res.data });
      });
  };

  const Enter = (e) => {
    if (e.key === "Enter") {
      CreateComentariya();
    }
  };

  return (
    <div className="comentariya">
      <div className="scrol_c">
        <div className="c_items">
          {state.comentariya.map((mal) =>
            mal.product === parseInt(id.id) ? (
              <div key={mal.id} className="c_item">
                <img src={mal.userImage} alt="" />
                <p>{mal.title}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="c_form">
        <textarea
          style={{ resize: "none" }}
          placeholder="Kometariya"
          onKeyDown={(e) => Enter(e)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></textarea>
      </div>
    </div>
  );
};

export default Comentariya;
