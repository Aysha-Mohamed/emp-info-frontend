import React, { useEffect, useState } from 'react';
import HomePage from './routes/home/home.component';
import { Routes,Route } from 'react-router-dom';
import EmployeeDetails from './routes/employee-details/employee-details.component';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [data,setData] = useState([]);


  const fetchData = async () => {
    console.log("refresh")
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


  //refresh page when back button is clicked

  useEffect(() => {
    const handlePopstate = () => {
      fetchData();
    };

//popstate is fired when the page history changes
    window.addEventListener('popstate', handlePopstate);
//removing the listener when component is unmounted
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage employees={employees} setEmployees={setEmployees} data={data}/>}/>
      <Route path="/details" element={<EmployeeDetails />}/>
    </Routes>
    
  
  );
};

export default App;
