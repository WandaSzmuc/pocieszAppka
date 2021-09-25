import React, { useEffect } from "react";
function Diary() {
  const [observations, setObservation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/diary")
      .then((response) => response.json())
      .then((data) => setObservation(data))
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
            <th>ID</th> <th>Przed medytacją</th> <th>Po medytacji</th>
          </tr>
        </thead>
        {observations.map((item, id) => (
          <tbody key={id}>
            <tr>
              <th>Mentalnie</th> <td>{item.mentally}</td>{" "}
              <td>{item.mentallyAfter}</td>
            </tr>
            <tr>
              <th>Fizycznie</th> <td>{item.physically}</td>{" "}
              <td>{item.physicallyAfter}</td>
            </tr>
            <tr>
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
