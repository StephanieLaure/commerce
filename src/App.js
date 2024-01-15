
import './App.css';
import Navbar from './components/navbar/navbar';
import Shop from './pages/shop'
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Shop/>
      <Routes>
        <Route path ='/' element = {<shop/>}/>
        <Route path ='/hommes' element = {<shopcategory category ="homme"/>}/>
        <Route path ='/femmes' element = {<shopcategory category ="femme"/>}/>
        <Route path ='/enfants' element = {<shopcategory category ="Enfants"/>}/>
        <Route path = '/product' element= {<product/>}/>
          <Route path =':productId' element = {<product/>}/>
        
        
        <Route path = '/cart' element = {<cart/>}/>
        <Route path = '/login' element = {<loginsignup/>}/>

      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
