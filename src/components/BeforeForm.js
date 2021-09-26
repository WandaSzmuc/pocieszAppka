import React, { useState } from "react";

const BeforeForm = ({ setId }) => {
  const date = new Date();
  const [input, setData] = useState({
    date: `${date.toLocaleDateString()}`,
    mentally: "",
    physically: "",
    taughts: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const { date, mentally, physically, taughts } = input;
    const obj = {
      date,
      mentally,
      physically,
      taughts,
    };

    fetch(`http://localhost:3000/diary`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setId(data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Witaj! Jak się dziś czujesz?</h1>
      <form className="form" onSubmit={submit}>
        <div>
          <label>Mentalnie </label>
          <input
            name="select"
            id="mentally"
            value={input.mentally}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Fizycznie </label>
          <input
            name="select"
            id="physically"
            value={input.physically}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="taughts">
            Zapisz myśli które ci dziś towarzyszą...
          </label>
          <input
            type="text"
            id="taughts"
            value={input.taughts}
            onChange={handleChange}
          ></input>
        </div>

        <button className="main-button-style" type="submit">
          Zapisz!
        </button>
      </form>
    </div>
  );
};

export default BeforeForm;
