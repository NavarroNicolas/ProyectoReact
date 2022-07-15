import { BrowserRouter, Routes, Route } from "react-router-dom";

//componentes
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetail from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

//context
import ItemsProvider from "./context/ItemContext";

//css
import "./App.css";
import Chekout from "./components/Checkout/Chekout";


function App() {
	return (
		<ItemsProvider>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/:category" element={<ItemListContainer />} />
				<Route path="/detail/:id" element={<ItemDetail />} />
				<Route path="/Cart" element={<Cart/>} />
				<Route path="/chekout" element={<Chekout/>} />
			</Routes>
		</BrowserRouter>
		</ItemsProvider>
	);
}

export default App;
	