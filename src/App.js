import "./App.css";
import ProductL from "./Components/ProductL";
import { Data } from "./Data";
import { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Panier from "./Components/Panier";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const [list, setList] = useState(Data);
  const [total, setTotal] = useState(0);
  const pantotal = (price) => {
    setTotal(total + price);
  };
  const [panier, setPanier] = useState([]);
  
  const remove = (id) => {
    setPanier(panier.filter((el) => el.id !== id));
  };
  return (
    <div className="container">
    
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<ProductL  />}
          />
          <Route
            path="/panier"
            element={
              <Panier
             
                pantotal={pantotal}
                dl={remove}
               
              />
            }
          />
          <Route path="/review/:idprod" element={<ProductDetails list={list} />} />
        </Routes>
    
    </div>
  );
}

export default App;
