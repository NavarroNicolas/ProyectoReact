import "./App.css"
import NavBar from './components/Navbar/NavBar';
import Title from "./components/Title/Title";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title/>
      <ItemListContainer/>
      
      <hr/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;


