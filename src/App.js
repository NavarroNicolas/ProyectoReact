import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar';
import Title from "./components/Title/Title";
/* import Item from "./components/Item/Item" */


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title/>
      <ItemListContainer/>   
    </div>
  );
}

export default App;
