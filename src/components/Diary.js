import React, { useEffect, useState } from "react";
function Diary() {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/diary")
      .then((response) => response.json())
      .then((data) => setObservations(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <th>opis</th> <th>Przed medytacją</th> <th>Po medytacji</th>
          </tr>
        </thead>
        {observations.map((item, id) => (
          <tbody key={id}>
            <tr>
              <th className="table-el">{item.id}</th>
              <th className="table-description table-el">Mentalnie</th>{" "}
              <td className="table-el before">{item.mentally}</td>{" "}
              <td className="table-el">{item.mentallyAfter}</td>
            </tr>
            <tr>
              <th></th>
              <th className="table-description table-el">Fizycznie</th>{" "}
              <td className="table-el before">{item.physically}</td>{" "}
              <td className="table-el">{item.physicallyAfter}</td>
            </tr>
            <tr>
              <th></th>
              <th className="table-description table-el">Przemyślenia</th>{" "}
              <td className="table-el before">{item.taughts}</td>{" "}
              <td className="table-el">{item.taughtsAfter}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Diary;
