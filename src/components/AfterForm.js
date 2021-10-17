import React, { useState } from "react";
import { useParams } from "react-router";

function AfterForm({ history }) {
  const [input, setAfter] = useState({
    mentallyAfter: "",
    physicallyAfter: "",
    taughtsAfter: "",
  });
  const { id } = useParams();

  const submit = (e) => {
    e.preventDefault();
    const { mentallyAfter, physicallyAfter, taughtsAfter } = input;
    const obj = {
      mentallyAfter,
      physicallyAfter,
      taughtsAfter,
    };

    fetch(`http://localhost:3000/diary/${id}`, { //async/await
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
        console.log(history);
        history.push("/diary");
      })
      .catch((error) => {
        console.log(error);
        //throw new Error('')
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
    <div className="parent-container">
      <div className="container form-after-medi">
        <h1 className="main-header">Jak czujesz się po medytacji?</h1>
        <form className="form" onSubmit={submit}>
          <div>
            <label>Mentalnie </label>
            <input
              type="text"
              id="mentallyAfter"
              value={input.mentallyAfter}
              onChange={handleChange}
            />
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

          <button className="main-button-style" type="submit">
            Zapisz!
          </button>
        </form>
      </div>
    </div>
  );
}

export default AfterForm;
