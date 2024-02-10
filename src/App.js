
import './App.css';
import Navbar from './components/navbar/navbar';
import Shop from './pages/shop'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Loginsignup from './pages/loginsignup';
import ShopCategory from  './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/cart';
import men_banner from './components/assets/men_banner.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        <Route path ='/' element = {<Shop/>}/>
        <Route path ='/hommes' element = {<ShopCategory banner={men_banner} category ="homme"/>}/>
        <Route path ='/femmes' element = {<ShopCategory category ="femme"/>}/>
        <Route path ='/enfants' element = {<ShopCategory category ="enfants"/>}/>
        <Route path = '/product' element= {<Product/>}/>
           <Route path =':imageId' element = {<Product/>}/>
        
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<Loginsignup/>}/>

      </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
