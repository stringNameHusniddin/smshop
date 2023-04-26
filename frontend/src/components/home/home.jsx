import React from "react";

import { useContext } from "react";
import { Context } from "../../context/context";
import Card from "../card/card";

import "./home.scss";

const Home = () => {
  const { state } = useContext(Context);

  return (
    <div className="home">
      {state.data.map((mal) => (
        <Card
          key={mal.id}
          title={mal.title}
          cost={mal.cost}
          body={mal.body}
          image={mal.image}
          like={mal.like}
          i={mal.id}
        />
      ))}
    </div>
  );
};

export default Home;
