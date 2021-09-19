import React from "react";

const AfterForm = () => {
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Jak czujesz się po praktyce?</h1>
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
            Co przychodzi ci do głowy po medytacji?
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

export default AfterForm;
