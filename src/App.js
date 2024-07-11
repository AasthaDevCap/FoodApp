import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './home/homepage';
import HomeDatapage from './home/HomeData';
import MenuWeb from './home/Menu';
import FavoritesWeb from './home/Favorites';
import RandomMeal from './home/RandomMeal';
import AboutUs from './home/About';
import Main from './home/Main';
import SignUpModal from './home/SignIn';
import LogInModal from './home/LogIn';
import Categoriesweb from './home/Categories';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>    
      <Route path='/' element={<HomeDatapage/>}/>
      {/* <Route path='/' element={<Homepage/>}/> */}
      <Route path='/menu' element={<MenuWeb/>}/>
      <Route path='/sign-up' element={<SignUpModal/>}/>
      <Route path='/log-in' element={<LogInModal/>}/>
      <Route path='/favorite' element={<FavoritesWeb/>}/>
      <Route path='/random' element={<RandomMeal/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/categories' element={<Categoriesweb/>}></Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
