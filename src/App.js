import React, { useEffect } from 'react';

const App = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://emp-info-backend-e6552a22461b.herokuapp.com/api/employees');
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fetching Data from Backend</h1>
    </div>
  );
};

export default App;
