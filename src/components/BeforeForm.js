import React, { useState } from "react";

const BeforeForm = () => {
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Witaj! Jak się dziś czujesz?</h1>
      <form className="form">
        <div>
          <label>Mentalnie</label>
          <select>
            <option value="Bardzo dobrze">Bardzo dobrze</option>
            <option value="Dobrze">Dobrze</option>
            <option value="Neutralnie">Neutralnie</option>
            <option value="Słabo">Słabo</option>
            <option value="Źle">Źle</option>
          </select>
        </div>
        <div>
          <label>Fizycznie</label>
          <select>
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
