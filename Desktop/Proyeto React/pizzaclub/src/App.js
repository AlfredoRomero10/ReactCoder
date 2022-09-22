import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     
      <Navbar />


      <ItemListContainer saludo={'Bienvenidos'}/>
    </div>
    
    
  );
}

export default App;
