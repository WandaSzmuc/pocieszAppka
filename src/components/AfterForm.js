import React from "react";

const AfterForm = () => {
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Jak czujesz się po praktyce?</h1>
      <form className="form">
        <div>
          <label>Mentalnie</label>
          <select name="select" placeholder="mental-before">
            <option>Bardzo dobrze</option>
            <option>Dobrze</option>
            <option>Neutralnie</option>
            <option>Słabo</option>
            <option>Źle</option>
          </select>
        </div>
        <div>
          <label>Fizycznie</label>
          <select name="select" placeholder="physical-before">
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
          <input placeholder="taughts-before" type="text"></input>
        </div>

        <a href="#" className="btn" type="submit">
          Zapisz
        </a>
      </form>
    </div>
  );
};

export default AfterForm;
