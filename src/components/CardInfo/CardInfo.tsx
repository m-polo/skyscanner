import "./CardInfo.css";

type CardInfoProps = {
  placeholder: string;
  title: string;
  description: string;
  imageSrc: string;
  price: number;
  currency: string;
  locationTo?: string;
  locationFrom?: string;
  dateFrom: string;
  dateTo: string;
  owner?: string;
  agency?: string;
  type: "Flight" | "Hotel" | "Card";
  numOfPersonsAllowed: number;
};

export default function CardInfo({
  placeholder,
  title,
  description,
  imageSrc,
  price,
  currency,
  locationTo,
  locationFrom,
  dateFrom,
  dateTo,
  owner,
  agency,
  numOfPersonsAllowed,
}: CardInfoProps) {
  return (
    <div className="cardInfo">
      <img src={imageSrc} alt={placeholder} />
      <div className="cardInfo-content">
        <h1>{title}</h1>
        <h3>
          {price} {currency}
        </h3>
        <p>
          <strong>From:</strong> {locationFrom} <strong>To:</strong>{" "}
          {locationTo}
        </p>
        <p>
          <strong>Dates:</strong> {dateTo}/{dateFrom}
        </p>
        <p>
          <strong>Owner:</strong> {owner}
        </p>
        <p>
          <strong>Agency:</strong> {agency}
        </p>
        <p>
          <strong>Persons allowed:</strong> {numOfPersonsAllowed}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
