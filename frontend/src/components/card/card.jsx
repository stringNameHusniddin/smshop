import "./card.scss";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Card = ({ title, image, cost, i }) => {
  const [id, setId] = useCookies(["id"]);

  return (
    <div className="card_home">
      <img src={image} alt="" />
      <div className="texts">
        <p>{title}</p>
        <p>{cost}$</p>
      </div>
      <div className="btns">
        <Link to={"detail"} onClick={() => setId("id", i)}>
          <button>Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
