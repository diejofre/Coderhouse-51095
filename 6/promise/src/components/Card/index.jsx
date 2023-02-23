import "./card.css";

const Card = ({ producto }) => {
  return (
    <div className="containerProduct">
      <h3>{producto.title}</h3>
      <img src={producto.image} alt="" />
      <h5>{producto.description}</h5>
    </div>
  );
};

export default Card;
