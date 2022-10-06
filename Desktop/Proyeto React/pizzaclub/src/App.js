import './App.css';
import React from "react";
import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
} from "react-router-dom";
import Navbar from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    //<Router>
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
    //</Router>
    
  );
}

export default App;
