import { useContext, useState } from "react";
import GlobalChatItem from "../globalChatItem/globalChatItem";
import GlobalChatForm from "../globalChatForm/globalChatForm";
import "./globalChat.scss";
import { Context } from "../../context/context";
import { useCookies } from "react-cookie";
import { ImExit } from "react-icons/im";

const GlobalChat = () => {
  const [globalPrivate, setGlobalPrivate] = useState("global");
  const [friendName, setFriendName] = useState("");
  const [friend, setFriend] = useState(0);
  const [modal, setModal] = useState(true);
  const [messages_p, setMessages_p] = useState([]);
  const [user] = useCookies(["user"]);
  const { state } = useContext(Context);

  const sendChatFriend = (e) => {
    if (e.key === "Enter") {
      setModal(false);
      state.users.map((mal) => {
        if (mal.username === friendName) {
          setFriend(mal.id);
          const newData = state.messages_private.map((mal2) => {
            if (
              (mal2.friend === parseInt(user.user) && mal2.user === mal.id) ||
              (mal2.user === parseInt(user.user) && mal2.friend === mal.id)
            ) {
              return mal2;
            }
          });
          const filtered = newData.filter((mal) => mal !== undefined);
          setMessages_p(filtered);
        }
      });
    }
  };

  return (
    <div className="chat">
      <div className="btns">
        <button
          className="global"
          onClick={() => {
            setGlobalPrivate("global");
            setModal(false);
          }}
        >
          Global chat
        </button>
        <button
          className="private"
          onClick={() => {
            setGlobalPrivate("private");
            setModal(true);
          }}
        >
          Private chat
        </button>
      </div>
      <div className="globalChat">
        {globalPrivate === "private" && modal ? (
          <div className="bg">
            <div className="confirm">
              <button
                className="iks"
                onClick={() => {
                  setModal(false);
                }}
              >
                <ImExit />
              </button>
              {globalPrivate === "private" ? (
                <input
                  type="text"
                  placeholder="do'singiz ismi"
                  onChange={(e) => setFriendName(e.target.value)}
                  onKeyDown={(e) => {
                    sendChatFriend(e);
                  }}
                />
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="scrol">
          <div className="items">
            {globalPrivate === "global"
              ? state.messages.map((mal, i) => (
                  <GlobalChatItem key={i++} chats={mal} />
                ))
              : messages_p.map((mal, i) => (
                  <GlobalChatItem key={i++} chats={mal} />
                ))}
          </div>
        </div>
        <div className="forms">
          <GlobalChatForm
            data={{
              id: friend,
              which: globalPrivate,
              setMessages_p,
              messages_p,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalChat;
