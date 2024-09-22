import { useContext } from "react";
import { CurrencyContext } from "../../contexts";
import { heartSvg, logoSvg, menuSvg, userSvg, worldSvg } from "../../icons";
import "./HeaderTopContent.css";

type HeaderTopContentProps = {
  handlerOnCurrencyChange: () => void;
};

export default function HeaderTopContent({
  handlerOnCurrencyChange,
}: HeaderTopContentProps) {
  const currency: string = useContext(CurrencyContext);

  return (
    <div className="headerTopContent">
      <a href="https://www.skyscanner.es">
        <img className="logo" src={logoSvg} alt="" />
      </a>
      <div className="rightContainer">
        <button
          className="topContentButton"
          onClick={handlerOnCurrencyChange}
          title={currency}
        >
          <img className="topContentImage" src={worldSvg} alt="" />
        </button>
        <button className="topContentButton">
          <img className="topContentImage" src={heartSvg} alt="" />
        </button>
        <button className="topContentButton longButton">
          <img className="topContentImage" src={userSvg} alt="" />
          <span>Iniciar sesion</span>
        </button>
        <button className="topContentButton">
          <img className="topContentImage" src={menuSvg} alt="" />
        </button>
      </div>
    </div>
  );
}
