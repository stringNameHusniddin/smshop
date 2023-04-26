import React from "react";
import { useCookies } from "react-cookie";
import "./detail.scss";
import Comentariya from "../comentariya/comentariya";
import { useContext } from "react";
import { Context } from "../../context/context";


const Detail = () => {
  const [id] = useCookies(["id"]);
  const {state} = useContext(Context)

  return (
    <div className="container">
      <div className="detail">
        {state.data.map((mal) =>
          mal.id === parseInt(id.id) ? (
            <div className="card_home showcase" key={mal.id}>
              <img src={mal.image} alt="" />
              <div className="texts">
                <p>{mal.title}</p>
                <p>{mal.cost}$</p>
                <p>{mal.body}</p>
              </div>
            </div>
          ) : null
        )}
        <Comentariya id={id} />
      </div>
    </div>
  );
};

export default Detail;
