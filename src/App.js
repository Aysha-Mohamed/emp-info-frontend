import React, { useEffect, useState } from 'react';
import HomePage from './components/home/home.component';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [data,setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3010/api/employees');
      const data = await response.json();
      setData(data);
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <HomePage employees={employees} setEmployees={setEmployees} data={data}/>
  );
};

export default App;
