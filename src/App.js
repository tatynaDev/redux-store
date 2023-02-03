import './App.scss';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Products from "./components/Pages/Products";
import Basket from "./components/Pages/Basket/Basket";
import Favorites from "./components/Pages/Favorites/Favorites";
import ProductDetail from "./components/Pages/ProductDetail";


function App() {

  return (

    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/:id' element={<ProductDetail/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    </div>
  );
}

export default App;
