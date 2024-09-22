import "./CardItem.css";

type CardItemProps = {
  id: number;
  placeholder: string;
  title: string;
  innerText: string;
  imageSrc: string;
  price: number;
  currency: string;
  setItemSelected: any;
};

export default function CardItem({
  id,
  placeholder,
  title,
  innerText,
  imageSrc,
  price,
  currency,
  setItemSelected,
}: CardItemProps) {
  function handlerOnClick(itemId: number) {
    setItemSelected(itemId);
  }

  return (
    <div className="card" onClick={() => handlerOnClick(id)}>
      <img src={imageSrc} alt={placeholder} />
      <div className="card-content">
        <h1>{title}</h1>
        <h3>
          {price} {currency}
        </h3>
        <p>{innerText}</p>
      </div>
    </div>
  );
}
