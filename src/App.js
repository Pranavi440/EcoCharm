import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import exfoliators_banner from './Components/Assets/banner_exfoliators.jpeg'
import toners_banner from './Components/Assets/banner_toners.jpeg'
import serums_banner from './Components/Assets/banner_serums.jpeg'
import sunscreen_banner from './Components/Assets/banner_sunscreen.jpeg'
import eyecreams_banner from './Components/Assets/banner_eyecreams.jpeg'
import cleansers_banner from './Components/Assets/banner_cleansers.jpeg'
import faceoils_banner from './Components/Assets/banner_faceoils.jpeg'
import moisturizers_banner from './Components/Assets/banner_moisturizers.jpeg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/exfoliators' element={<ShopCategory banner={exfoliators_banner} category="exfoliators"/>}/>
        <Route path='/toners' element={<ShopCategory banner={toners_banner} category="toners"/>}/>
        <Route path='/serums' element={<ShopCategory banner={serums_banner} category="serums"/>}/>
        <Route path='/sunscreen' element={<ShopCategory banner={sunscreen_banner} category="sunscreen"/>}/>
        <Route path='/eyecreams' element={<ShopCategory banner={eyecreams_banner} category="eyecreams"/>}/>
        <Route path='/cleansers' element={<ShopCategory banner={cleansers_banner} category="cleansers"/>}/>
        <Route path='/faceoils' element={<ShopCategory banner={faceoils_banner} category="faceoils"/>}/>
        <Route path='/moisturizers' element={<ShopCategory banner={moisturizers_banner} category="moisturizers"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

