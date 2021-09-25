import React, { useState } from "react";

function AfterForm() {
  const [input, setAfter] = useState({
    mentallyAfter: "",
    physicallyAfter: "",
    taughtsAfter: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const { mentallyAfter, physicallyAfter, taughtsAfter } = input;
    const obj = {
      mentallyAfter,
      physicallyAfter,
      taughtsAfter,
    };

    fetch(`http://localhost:3000/diary/2`, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAfter(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    setAfter((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  return (
    <div className="form-before-medi container">
      <h1 className="main-header">Jak czujesz się po praktyce?</h1>
      <form className="form" onSubmit={submit}>
        <div>
          <label>Mentalnie </label>
          <input
            type="text"
            id="mentallyAfter"
            value={input.mentallyAfter}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Fizycznie </label>
          <input
            type="text"
            id="physicallyAfter"
            value={input.physicallyAfter}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="taughts">
            Co przychodzi ci do głowy po medytacji?
          </label>
          <input
            type="text"
            id="taughtsAfter"
            value={input.taughtsAfter}
            onChange={handleChange}
          ></input>
        </div>

        <button type="submit">Dodaj!</button>
      </form>
    </div>
  );
}

export default AfterForm;
