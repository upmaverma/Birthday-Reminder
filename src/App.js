import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState(data);
  const removeAll = () => {
    setPerson([]);
  };
  const remove = (id) => {
    let filterPeople = person.filter((per) => {
      return per.id !== id;
    });
    setPerson(filterPeople);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Birthday Remainder</h1>
      <div className="card">
        <h3>{person.length} Birthdays todays</h3>
        {person.map((person) => {
          const { id, name, image, age } = person;
          return (
            <div className="each-card" key={id}>
              <div className="imageArea">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <h4>{name}</h4>
                <h5>{age} years</h5>
              </div>
              <button className="remove-btn" onClick={() => remove(id)}>
                remove
              </button>
            </div>
          );
        })}
        <button className="clearAll-btn" onClick={() => removeAll()}>
          Clear All
        </button>
      </div>
    </>
  );
}
