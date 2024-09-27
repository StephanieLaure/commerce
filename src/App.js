
import './App.css';
import Navbar from './components/navbar/navbar';
import Shop from './pages/Shop'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Loginsignup from './pages/Loginsignup';
import ShopCategory from  './pages/ShopCategory';
import Product from  './pages/Product'
import Cart from './pages/Cart';
import men_banner from './components/assets/men_banner.jpg';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        <Route path ='/' element = {<Shop/>}/>
        <Route path ='/hommes' element = {<ShopCategory banner={men_banner} category ="homme"/>}/>
        <Route path ='/femmes' element = {<ShopCategory banner={women_banner} category ="femme"/>}/>
        <Route path ='/enfants' element = {<ShopCategory banner={kids_banner} category ="enfants"/>}/>
        <Route path = '/product' element= {<Product/>}>
           <Route path =':productId' element = {<Product/>}/>
        </Route>
        
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<Loginsignup/>}/>
        

      </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
