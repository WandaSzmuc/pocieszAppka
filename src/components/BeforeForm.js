import React, { useState } from "react";

const BeforeForm = () => {
  const [data, setData] = useState({
    mentally: "",
    phisically: "",
    taughts: "",
  });
  const submit = (e) => {
    e.preventDefault();
    const { mentally, phisically, taughts } = data;
    const obj = {
      mentally,
      phisically,
      taughts,
    };
    fetch("http://localhost:3000/diary", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData((prev) => [...prev, data]);
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
          <label>Mentalnie</label>
          <select
            onChange={handleChange}
            name="select"
            id="mentally"
            value={data.mentally}
          >
            <option value="Bardzo dobrze">Bardzo dobrze</option>
            <option value="Dobrze">Dobrze</option>
            <option value="Neutralnie">Neutralnie</option>
            <option value="Słabo">Słabo</option>
            <option value="Źle">Źle</option>
          </select>
        </div>
        <div>
          <label>Fizycznie</label>
          <select
            onChange={handleChange}
            name="select"
            id="phisically"
            value={data.phisically}
          >
            <option value="Bardzo dobrze">Bardzo dobrze</option>
            <option value="Dobrze">Dobrze</option>
            <option value="Neutralnie">Neutralnie</option>
            <option value="Słabo">Słabo</option>
            <option value="Źle">Źle</option>
          </select>
        </div>
        <div>
          <label className="taughts">
            Zapisz myśli które ci dziś towarzyszą
          </label>
          <input
            onChange={handleChange}
            id="taughts"
            value={data.taughts}
            type="text"
          ></input>
        </div>
        <a href="#" className="btn" type="submit">
          Zapisz
        </a>
      </form>
    </div>
  );
};

export default BeforeForm;
