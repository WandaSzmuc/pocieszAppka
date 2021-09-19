import React from "react";
const Diary = () => {
  return (
    <div className="container">
      <h1 className="main-header">Twój dziennik</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th> <th>Przed medytacją</th> <th>Po medytacji</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Mentalnie</th> <td>Neutralnie</td> <td>Dobrze</td>
          </tr>
          <tr>
            <th>Fizycznie</th> <td>Neutralnie</td> <td>Neutralnie</td>
          </tr>
          <tr>
            <th>Przemyślenia</th> <td>Zestresowana bardzo bardzo się czuję</td>{" "}
            <td>Zrelaksowała się że hoho</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Diary;
