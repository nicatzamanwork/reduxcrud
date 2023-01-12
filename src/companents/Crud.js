import React, { useEffect } from "react";
import { useState } from "react";
function Crud() {
  const [data, setTableData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      });
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Contact Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.companyName}</td>
              <td>{data.contactName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Crud;
