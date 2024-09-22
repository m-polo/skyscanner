import { Tabs } from "../../enums";
import { bedSvg, carSvg, flightSvg } from "../../icons";
import "./HeaderTabs.css";

type HeaderTabsProps = {
  tabSelected: Tabs;
  setTabSelected: (tabIndex: number) => void;
};

export default function HeaderTabs({
  tabSelected,
  setTabSelected,
}: HeaderTabsProps) {
  function handlerOnClick(tabIndex: number) {
    setTabSelected(tabIndex);
  }

  function getClassName(tabIndex: number) {
    return `buttonTabs ${
      tabSelected === tabIndex ? "tabSelected" : "tabUnselected"
    }`;
  }

  return (
    <div className="headerTabs">
      <button
        onClick={() => handlerOnClick(Tabs.Flights)}
        className={getClassName(Tabs.Flights)}
      >
        <img src={flightSvg} alt="" />
        <span>Vuelos</span>
      </button>
      <button
        onClick={() => handlerOnClick(Tabs.Hotels)}
        className={getClassName(Tabs.Hotels)}
      >
        <img src={bedSvg} alt="" />
        <span>Hoteles</span>
      </button>
      <button
        onClick={() => handlerOnClick(Tabs.Cars)}
        className={getClassName(Tabs.Cars)}
      >
        <img src={carSvg} alt="" />
        <span>Alquiler de coches</span>
      </button>
    </div>
  );
}
