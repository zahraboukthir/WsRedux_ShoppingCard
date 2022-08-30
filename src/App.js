import "./App.css";
import ProductL from "./Components/ProductL";

import NavigationBar from "./Components/NavigationBar";
import Panier from "./Components/Panier";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductL />} />
        <Route path="/panier" element={<Panier  />} />
        <Route path="/review/:idprod" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
