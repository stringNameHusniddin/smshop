import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Item from "../item/item";
import "./savatcha.scss";

const Savatcha = () => {
  const [products, setProducts] = useState([
    {
      image:
        "https://backend.texnomart.uz/images/gallery/product/102040/32790/preview.jpg",
      title:
        "Смартфон Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин Шафтоли)",
      cost: 1000000,
      max_num: 1,
      id: 1,
    },
    {
      image:
        "https://backend.texnomart.uz/images/gallery/product/102040/32790/preview.jpg",
      title:
        "Смартфон Самсунг Галахй А33 6/128Гб Тўқ сариқ ранг (Ёрқин Шафтоли)",
      cost: 1000000,
      max_num: 1,
      id: 1,
    },
  ]);

  return (
    <div className="bg">
      <div className="savatcha">
        <div className="header">
          <h1>Xaridlaringiz</h1>
          <button>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="items">
          {products.map((mal) => (
            <Item key={mal.id} data={mal} />
          ))}
        </div>
        <div className="footer">
          <p className="max_product">Jami 2 mahsulot</p>
          <p>2000000 so'm</p>
        </div>
      </div>
    </div>
  );
};

export default Savatcha;
