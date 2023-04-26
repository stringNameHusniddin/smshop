import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BsFillBoxSeamFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { GiExitDoor } from "react-icons/gi";
import { useCookies } from "react-cookie";
import { Context } from "../../context/context";

const Navbar = () => {
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [user, setUser, removeUser] = useCookies(["user"]);
  const [image, setImage, removeImage] = useCookies(["image"]);
  const [admin, setAdmin, removeAdmin] = useCookies(["admin"]);

  const { dispatch } = useContext(Context);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>Logo</Link>
      </div>

      <ul>
        <li>
          {admin.admin && admin.admin === "296143127" ? (
            <Link to={"addProduct"}>
              <BsFillBoxSeamFill />
              <p>Mahsulot qo'shish</p>
            </Link>
          ) : null}
        </li>
        <li>
          <Link to={"globalChat"}>
            <BsFillChatLeftDotsFill />
            <p>Chat</p>
          </Link>
        </li>
        <li>
          {user.user ? (
            <Link
              onClick={() => {
                removeToken(["mytoken"]);
                removeUser(["user"]);
                removeImage(["image"]);
                removeAdmin(["admin"]);
              }}
            >
              <ImExit />
              <p>Log out</p>
            </Link>
          ) : (
            <Link to={"register"}>
              <GiExitDoor />
              <p>Kirish</p>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
