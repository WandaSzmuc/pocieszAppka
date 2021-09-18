import React from "react";

const BeforeMedi = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="date">18.09.2021</div>
        <h2 className="quote">tutaj będzie super cytat</h2>
        <h1 className="main-header">Witaj! Jak się dziś czujesz?</h1>
        <Form />
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="form">
      <div>
        <label>Mentalnie</label>
        <select name="select">
          <option>Bardzo dobrze</option>
          <option>Dobrze</option>
          <option>Neutralnie</option>
          <option>Słabo</option>
          <option>Źle</option>
        </select>
      </div>
      <div>
        <label>Fizycznie</label>
        <select name="select">
          <option>Bardzo dobrze</option>
          <option>Dobrze</option>
          <option>Neutralnie</option>
          <option>Słabo</option>
          <option>Źle</option>
        </select>
      </div>
      <div>
        <label>Zapisz myśli które ci dziś towarzyszą</label>
        <input></input>
      </div>

      <button className="btn" type="submit">
        Zapisz
      </button>
    </form>
  );
};

export default BeforeMedi;
