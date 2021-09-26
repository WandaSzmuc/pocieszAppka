import React, { useEffect, useState } from "react";
function Diary() {
  const [observations, setObservations] = useState([]);

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
              <button className="main-button-style">Edytuj</button>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Diary;
