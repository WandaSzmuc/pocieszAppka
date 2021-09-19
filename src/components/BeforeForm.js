import React from "react";

const BeforeForm = () => {
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Witaj! Jak się dziś czujesz?</h1>
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
          <label className="taughts">
            Zapisz myśli które ci dziś towarzyszą
          </label>
          <input></input>
        </div>

        <a href="#" className="btn" type="submit">
          Zapisz
        </a>
      </form>
    </div>
  );
};

export default BeforeForm;
