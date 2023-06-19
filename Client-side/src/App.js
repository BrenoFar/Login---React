import './App.css';
import axios from 'axios'; // npm install axios
import React, { useState, useEffect } from 'react';

function App() {
  const [listofUsers, setListofUsers] = useState([]); // useState is a hook that allows you to have state variables in functional components
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setListofUsers(response.data);
    }
, []);});
return (
<div className="App">
  {listofUsers.map((value, key)=> {
    return <div>{value.title} </div>;
    })}
</div>
);} 

export default App;
