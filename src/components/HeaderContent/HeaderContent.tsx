import { useState } from "react";
import { Tabs } from "../../enums";
import { Form } from "../App/App";
import HeaderTabs from "../HeaderTabs/HeaderTabs";
import HeaderTopContent from "../HeaderTopContent/HeaderTopContent";
import SearchForm from "../SearchForm/SearchForm";
import "./HeaderContent.css";

type HeaderContentProps = {
  handlerOnCurrencyChange: () => void;
  setForm: (formValues: Form) => void;
  setIsSubmitted: (isSubmitted: boolean) => void;
  form: Form;
  isSubmitted: boolean;
  numOfSearchers: React.MutableRefObject<number>;
};

export default function HeaderContent({
  handlerOnCurrencyChange,
  setForm,
  setIsSubmitted,
  form,
  isSubmitted,
  numOfSearchers,
}: HeaderContentProps) {
  const [currentTab, setCurrentTab] = useState(Tabs.Flights);

  function getCurrentTabName(): string {
    let name = "";

    switch (currentTab) {
      case Tabs.Flights:
        name = "vuelos";
        break;
      case Tabs.Hotels:
        name = "hoteles";
        break;
      case Tabs.Cars:
        name = "coches";
        break;
    }

    return name;
  }

  return (
    <div className="headerContainer">
      <HeaderTopContent handlerOnCurrencyChange={handlerOnCurrencyChange} />
      <HeaderTabs tabSelected={currentTab} setTabSelected={setCurrentTab} />
      <h2 className="middleContent">
        Millones de {getCurrentTabName()} baratos. Una sencilla búsqueda.
      </h2>
      <SearchForm
        setForm={setForm}
        form={form}
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        numOfSearchers={numOfSearchers}
      />
    </div>
  );
}
