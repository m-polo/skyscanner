import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../../contexts";
import { Item, seedItems } from "../../items";
import { Form } from "../App/App";
import CardItem from "../CardItem/CardItem";
import Footer from "../Footer/Footer";
import "./Body.css";
const CardInfo = lazy(() => import("../CardInfo/CardInfo"));

type BodyProps = {
  isSubmitted: boolean;
  form: Form;
  numOfSearchers: React.MutableRefObject<number>;
};

export default function Body({ isSubmitted, form, numOfSearchers }: BodyProps) {
  const [items] = useState<Item[]>(seedItems());
  const [itemsFiltered, setItemsFiltered] = useState<Item[]>([]);
  const [itemSelected, setItemSelected] = useState<number | null>(null);

  const currency: string = useContext(CurrencyContext);

  let item = undefined;
  if (itemSelected !== null) {
    item = items.find((item) => item.id === itemSelected)!;
  }

  useEffect(() => {
    const itemsFilteredByCurrency = items.filter(
      (item) => item.currency === currency
    );

    setItemsFiltered(itemsFilteredByCurrency);
  }, [currency, items]);

  useEffect(() => {
    if (isSubmitted) {
      const itemsFilteredByForm = itemsFiltered.filter(
        (item) =>
          item.locationFrom === form.departurePlace &&
          item.locationTo === form.destinationPlace &&
          new Date(item.dateFrom).getTime() >=
            new Date(form.startDate).getTime() &&
          new Date(item.dateTo).getTime() <= new Date(form.endDate).getTime() &&
          item.numOfPersonsAllowed >= form.numberOfPassengers
      );

      setItemsFiltered(itemsFilteredByForm);
    }

    setItemSelected(null);
  }, [isSubmitted, itemsFiltered]);

  return (
    <>
      <div className="bodyContent">
        <span className="topInnerContent">
          {numOfSearchers.current} people has already searched in this website!!
        </span>
        <div className="innerContent">
          <div className="leftContent">
            {itemsFiltered.slice(0, 5).map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                title={item.title}
                placeholder={item.placeholder}
                imageSrc={item.imageSrc}
                innerText={item.description}
                currency={item.currency}
                price={item.price}
                setItemSelected={setItemSelected}
              />
            ))}
          </div>
          {itemSelected !== null && item ? (
            <div className="rightContent">
              <Suspense fallback={<>Loading...</>}>
                <CardInfo
                  title={item.title}
                  placeholder={item.placeholder}
                  imageSrc={item.imageSrc}
                  description={item.description}
                  currency={item.currency}
                  price={item.price}
                  locationFrom={item.locationFrom}
                  locationTo={item.locationTo}
                  dateFrom={item.dateFrom}
                  dateTo={item.dateTo}
                  agency={item.agency}
                  owner={item.owner}
                  type={item.type}
                  numOfPersonsAllowed={item.numOfPersonsAllowed}
                />
              </Suspense>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
