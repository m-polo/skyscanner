import { arrowsSvg } from "../../icons";
import { Form } from "../App/App";
import "./SearchForm.css";

type SearchFormProps = {
  setForm: (formValues: Form) => void;
  setIsSubmitted: (isSubmitted: boolean) => void;
  form: Form;
  isSubmitted: boolean;
  numOfSearchers: React.MutableRefObject<number>;
};

export default function SearchForm({
  setForm,
  setIsSubmitted,
  form,
  isSubmitted,
  numOfSearchers,
}: SearchFormProps) {
  const locations = ["New York", "Paris", "London", "Tokyo", "Dubai", "Sydney"];

  function handlerOnClick(e: any) {
    e.preventDefault();

    setForm({
      ...form,
      destinationPlace: form.departurePlace,
      departurePlace: form.destinationPlace,
    });
  }

  function handlerOnChange(e: any) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handlerOnFormSubmit(e: any) {
    e.preventDefault();

    setIsSubmitted(!isSubmitted);
    if (!isSubmitted) {
      numOfSearchers.current += 1;
    } else {
      setForm({
        departurePlace: "Dubai",
        destinationPlace: "New York",
        numberOfPassengers: 1,
        startDate: "",
        endDate: "",
      } as Form);
    }
  }

  return (
    <form id="form" onSubmit={handlerOnFormSubmit}>
      <div className="form">
        <div className="formItem">
          <label htmlFor="departurePlace">Origen</label>
          <select
            className="firstItem"
            required={true}
            id="departurePlace"
            value={form.departurePlace}
            onChange={handlerOnChange}
          >
            {locations.map((location) => (
              <option>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <a className="arrowsImage" onClick={handlerOnClick} href="">
            <img src={arrowsSvg} alt="" />
          </a>
        </div>

        <div className="formItem">
          <label htmlFor="destinationPlace">Destino</label>
          <select
            className="firstItem"
            required={true}
            id="destinationPlace"
            value={form.destinationPlace}
            onChange={handlerOnChange}
          >
            {locations.map((location) => (
              <option>{location}</option>
            ))}
          </select>
        </div>

        <div className="formItem">
          <label htmlFor="startDate">Fecha de inicio</label>
          <input
            required={true}
            id="startDate"
            placeholder="Añadir fecha"
            value={form.startDate}
            onChange={handlerOnChange}
            type="date"
          ></input>
        </div>

        <div className="formItem">
          <label htmlFor="endDate">Fecha de vuelta</label>
          <input
            required={true}
            id="endDate"
            placeholder="Añadir fecha"
            value={form.endDate}
            onChange={handlerOnChange}
            type="date"
          ></input>
        </div>

        <div className="formItem">
          <label htmlFor="numberOfPassengers">Numero de personas</label>
          <input
            required={true}
            className="lastItem"
            id="numberOfPassengers"
            value={form.numberOfPassengers}
            type="number"
            onChange={handlerOnChange}
            defaultValue={1}
          ></input>
        </div>

        <button className="submit" type="submit">
          {isSubmitted ? "Borrar" : "Buscar"}
        </button>
      </div>
    </form>
  );
}
