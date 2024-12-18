import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(''); // State to store the fetched date

  useEffect(() => {
    // Fetching the current date from the worldtimeapi
    fetch('http://worldtimeapi.org/api/timezone/Etc/UTC')
      .then(response => response.json()) // Parsing the JSON response
      .then(data => {
        // Formatting the fetched date to a readable format
        const formattedDate = new Date(data.datetime).toLocaleString();
        setCurrentDate(formattedDate); // Setting the fetched and formatted date in state
      })
      .catch(error => {
        console.error('Error fetching date:', error);
      });
  }, []); // The empty array ensures the effect runs only once when the component mounts

  return (
    <header style={{ padding: '10px', background: '#007bff', color: 'white', textAlign: 'center' }}>
      <h1>Task Management App</h1>
      <p>Current Date and Time: {currentDate}</p>
    </header>
  );
};

export default Header;
