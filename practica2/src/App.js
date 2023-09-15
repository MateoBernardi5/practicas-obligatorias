import React from 'react';
import Table from './Table';


const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const App = () => {
  return (
    <div>
      <h1>Ingresos por Compañía</h1>
      <Table netIncomes={netIncomes} />
    </div>
  );
};

export default App;
