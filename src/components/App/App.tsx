import { Profiler, ProfilerOnRenderCallback, useRef, useState } from "react";
import { CurrencyContext } from "../../contexts";
import Body from "../Body/Body";
import { Header } from "../Header/Header";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./App.css";

const currencies = ["USD", "EUR", "GBP", "JPY"];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type Form = {
  departurePlace: string;
  destinationPlace: string;
  startDate: string;
  endDate: string;
  numberOfPassengers: number;
};

export default function App() {
  const formInitialValues = {
    departurePlace: "Dubai",
    destinationPlace: "New York",
    numberOfPassengers: 1,
    endDate: "",
    startDate: "",
  } as Form;

  const [currency, setCurrency] = useState("EUR");
  const [form, setForm] = useState<Form>(formInitialValues);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const numOfSearchers = useRef(1230);

  function handlerOnCurrencyChange() {
    setCurrency(currencies[getRandomInt(0, currencies.length - 1)]);
    setForm(formInitialValues);
    setIsSubmitted(false);
  }

  return (
    <div className="app">
      <CurrencyContext.Provider value={currency}>
        <Header>
          <Profiler id="headerContentId" onRender={onRender}>
            <HeaderContent
              handlerOnCurrencyChange={handlerOnCurrencyChange}
              setForm={setForm}
              form={form}
              setIsSubmitted={setIsSubmitted}
              isSubmitted={isSubmitted}
              numOfSearchers={numOfSearchers}
            />
          </Profiler>
        </Header>
        <Body
          form={form}
          isSubmitted={isSubmitted}
          numOfSearchers={numOfSearchers}
        />
      </CurrencyContext.Provider>
    </div>
  );
}

const onRender: ProfilerOnRenderCallback = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  console.log(
    `id: ${id}, phase: ${phase}, actualDuration: ${actualDuration}, baseDuration: ${baseDuration}, startTime: ${startTime}, commitTime: ${commitTime}, `
  );
};
