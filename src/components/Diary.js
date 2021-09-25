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
              <th>{item.id}</th>
              <th>Mentalnie</th> <td>{item.mentally}</td>{" "}
              <td>{item.mentallyAfter}</td>
            </tr>
            <tr>
              <th></th>
              <th>Fizycznie</th> <td>{item.physically}</td>{" "}
              <td>{item.physicallyAfter}</td>
            </tr>
            <tr>
              <th></th>
              <th>Przemyślenia</th> <td>{item.taughts}</td>{" "}
              <td>{item.taughtsAfter}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Diary;
