import React from 'react';

const Table = ({ netIncomes }) => {
  const calculateAverageIncome = () => {
    const totalIncome = netIncomes.reduce((accumulator, company) => accumulator + company.income, 0);
    return totalIncome / netIncomes.length;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((company, index) => (
            <tr key={index}>
              <td>{company.brand}</td>
              <td>{company.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de Ingresos: {calculateAverageIncome()}</p>
    </div>
  );
};

export default Table;

