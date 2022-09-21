import "./App.css";
import ProductL from "./Components/ProductL";

import NavigationBar from "./Components/NavigationBar";
import Panier from "./Components/Panier";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import C from "./Components/C";



function App() {
  return (
    <div  >
      <NavigationBar  />
      <div className="container"  >
      <Routes>
        <Route path="/" element={<ProductL  />} />
        <Route path="/panier" element={<Panier  />} />
        <Route path="/review/:idprod" element={<ProductDetails />} />
        <Route  path="/d/:idprod" element={<C/>} />
      </Routes></div>
   
    </div>
  );
}

export default App;
