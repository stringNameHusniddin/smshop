import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import "./globalChatForm.scss";
import axios from "axios";
import { Context } from "../../context/context";

const GlobalChatForm = ({ data }) => {
  const [title, setTitle] = useState("");

  const [token] = useCookies(["mytoken"]);
  const [user] = useCookies(["user"]);
  const [image] = useCookies(["image"]);

  const { dispatch } = useContext(Context);

  const CreateMessage = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/chat/global/",
        {
          title,
          user: user.user,
          userImage: image.image,
        },
        {
          headers: {
            Authorization: `Token ${token.mytoken}`,
          },
        }
      )
      .then((res) => {
        setTitle("");
        dispatch({ type: "push_g", payload: res.data });
      });
  };

  const sendFriendUser = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/chat/only/",
        {
          title,
          user: user.user,
          userImage: image.image,
          friend: data.id,
        },
        {
          headers: {
            Authorization: `Token ${
              token.mytoken
                ? token.mytoken
                : "8029988035f177fd1634170b09e056f4999e3d37"
            }`,
          },
        }
      )
      .then((res) => {
        setTitle("");
        data.setMessages_p([...data.messages_p, res.data]);
        dispatch({ type: "push_p", payload: res.data });
      });
  };

  return (
    <div className="form">
      <textarea
        placeholder="Xabar yozish"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <button
        onClick={data.which === "private" ? sendFriendUser : CreateMessage}
      >
        Send
      </button>
    </div>
  );
};

export default GlobalChatForm;
