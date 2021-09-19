import React, { useState } from "react";
// import Axios from "axios";

const BeforeForm = () => {
  const url = "";
  const [data, setData] = useState({
    mentally: "",
    phisically: "",
    taughts: "",
  });

  // function submit(e) {
  //   e.preventDefault();
  //   Axios.post(url, {
  //     mentally: data.mentally,
  //     phisically: data.phisically,
  //     taughts: data.taughts,
  //   }).then((res) => {
  //     console.log(res.data);
  //   });
  // }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Witaj! Jak się dziś czujesz?</h1>
      <form className="form">
        <div>
          <label>Mentalnie</label>
          <select
            onChange={(e) => handle(e)}
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
            onChange={(e) => handle(e)}
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
            onChange={(e) => handle(e)}
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
