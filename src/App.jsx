import React from 'react';
import "./css/App.css";
import Navbar from './components/Navbar.jsx';
import AddTask from './components/AddTask.jsx';
import FilterApp from './components/FilterApp.jsx';

function App() {
  return(
    <>
      <Navbar />
      <AddTask />
      <FilterApp />
    </>
  );
}

export default App;