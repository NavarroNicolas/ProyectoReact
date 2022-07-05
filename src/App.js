import { BrowserRouter, Routes, Route } from "react-router-dom";

//componentes
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

//context
import ItemsProvider from "./context/ItemContext";

import "./App.css";


function App() {
	return (
		<ItemsProvider>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/:category" element={<ItemListContainer />} />
				<Route path="/detail/:id" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
		</ItemsProvider>
	);
}

export default App;
	