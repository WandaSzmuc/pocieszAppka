import React, { useEffect, useState } from "react";
function Diary() {
  const [button, setButton] = useState(false);
  const [observations, setObservations] = useState([]);
  const [editObservation, setEditObservation] = useState({
    mentally: "",
    mentallyAfter: "",
    physically: "",
    physicallyAfter: "",
    taughts: "",
    taughtsAfter: "",
    id: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    setEditObservation((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  useEffect(() => {
    getObservations();
  }, []);

  function getObservations() {
    fetch("http://localhost:3000/diary")
      .then((response) => response.json())
      .then((data) => setObservations(data))
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteObservation(id) {
    fetch(`http://localhost:3000/diary/${id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((resp) => {
        console.warn(resp);
        getObservations();
      });
    });
  }
  function selectObservation(id) {
    console.warn("function called", observations[id - 1]);
    let item = observations[id - 1];
    setEditObservation({
      id: item.id,
      mentally: item.mentally,
      mentallyAfter: item.mentallyAfter,
      physically: item.physically,
      physicallyAfter: item.physicallyAfter,
      taughts: item.taughts,
      taughtsAfter: item.taughtsAfter,
    });
  }
  function updateObservation(e) {
    e.preventDefault();
    const {
      id,
      mentally,
      mentallyAfter,
      physically,
      physicallyAfter,
      taughts,
      taughtsAfter,
    } = editObservation;
    const item = {
      mentally,
      mentallyAfter,
      physically,
      physicallyAfter,
      taughts,
      taughtsAfter,
    };

    console.warn("item: ", item);
    fetch(`http://localhost:3000/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((response) => {
      response.json().then((data) => {
        console.warn(data);
        getObservations(data);
      });
    });
    setButton(false);
  }
  return (
    <div className="container">
      <h1 className="main-header">Twój dziennik</h1>
      <table>
        <thead>
          <tr>
            <th>
              medytacja
              <br />
              dnia
            </th>
            <th>opis</th> <th>Przed medytacją</th> <th>Po medytacji</th>{" "}
            <th>operacje</th>
          </tr>
        </thead>
        {observations.map((item, id) => (
          <tbody key={id}>
            <tr>
              <th className="table-el">{item.date}</th>
              <th className="table-description table-el">Mentalnie</th>{" "}
              <td className="table-el before">{item.mentally}</td>{" "}
              <td className="table-el">{item.mentallyAfter}</td>
            </tr>
            <tr>
              <th></th>
              <th className="table-description table-el">Fizycznie</th>{" "}
              <td className="table-el before">{item.physically}</td>{" "}
              <td className="table-el">{item.physicallyAfter}</td>
              <button
                onClick={() => deleteObservation(item.id)}
                className="main-button-style"
              >
                Usuń
              </button>
            </tr>
            <tr>
              <th></th>
              <th className="table-description table-el">Przemyślenia</th>{" "}
              <td className="table-el before">{item.taughts}</td>{" "}
              <td className="table-el">{item.taughtsAfter}</td>
              <button
                onClick={() => selectObservation(item.id)}
                onClick={() => setButton(!button)}
                className="main-button-style"
              >
                Edytuj
              </button>
            </tr>
          </tbody>
        ))}
      </table>
      {button && (
        <div className="edit-form">
          <div className="edit-form-columns">
            <div className="edit-form-column">
              <h2 className="edit-form-el">Przed</h2>
              <input
                className="edit-form-el"
                id="mentally"
                value={editObservation.mentally}
                onChange={handleChange}
              ></input>
              <input
                className="edit-form-el"
                id="physically"
                value={editObservation.physically}
                onChange={handleChange}
              ></input>
              <input
                className="edit-form-el"
                id="taughts"
                value={editObservation.taughts}
                onChange={handleChange}
              ></input>
            </div>
            <div className="edit-form-column">
              <h2 className="edit-form-el">Po</h2>
              <input
                className="edit-form-el"
                id="mentallyAfter"
                value={editObservation.mentallyAfter}
                onChange={handleChange}
              ></input>
              <input
                className="edit-form-el"
                id="physicallyAfter"
                value={editObservation.physicallyAfter}
                onChange={handleChange}
              ></input>
              <input
                className="edit-form-el"
                id="taughtsAfter"
                value={editObservation.taughtsAfter}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <button className="main-button-style" onClick={updateObservation}>
            Zmień
          </button>
        </div>
      )}
    </div>
  );
}

export default Diary;
