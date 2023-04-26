import React from "react";
import "./globalChatItem.scss";
import { useCookies } from "react-cookie";

const GlobalChatItem = ({ chats }) => {
  const [user] = useCookies(["user"]);

  return (
    <div
      className={chats.user !== parseInt(user.user) ? "itemLeft" : "itemRight"}
    >
      <div className="userImg">
        <img src={chats.userImage} alt="" />
      </div>
      <div className="card1">
        <p>{chats.title}</p>
        <p className="time">
          {chats.created_at.slice(0, 10)} {chats.created_at.slice(11, 16)}
        </p>
      </div>
    </div>
  );
};

export default GlobalChatItem;
