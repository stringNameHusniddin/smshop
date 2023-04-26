import React from "react";
import "./item.scss";

const Item = ({ data }) => {
  return (
    <div className="item">
      <img src={data.image} alt="" />
      <div className="texts">
        <p className="title">{data.title}</p>
        <p className="cost">{data.cost} so'm</p>
      </div>
      <div className="btns">
        <p className="ishora">-</p>
        <p className="num">{data.max_num}</p>
        <p className="ishora">+</p>
      </div>
    </div>
  );
};

export default Item;
