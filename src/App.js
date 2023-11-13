import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import Navbar1 from './Components/Navbar1';
// import Breaking from './Components/Breaking';
import Topnews from './Components/images/Topnews';
import Footer1 from './Footer1';
import { BrowserRouter as Router, Route, Switch, Routes,useNavigate } from 'react-router-dom';
import DetailedNews from './Components/DetailedNews';
import Sports from './Components/Sports';
import Health from './Components/Health';
import Entertainment from './Components/Entertainment';
import Bitcoin from './Components/Bitcoin';
import Searchpage from './Components/Searchpage';

function App() {
  

 
  return (
   <>
   <Navbar1/>
   {/* <Topnews></Topnews> */}
  
   <Routes>
   {/* <Route path='/' element={<Topnews></Topnews>}></Route> */}
   <Route path='/' element={<Topnews></Topnews>}></Route>
   <Route path='/sports' element={<Sports></Sports>}></Route>
   <Route path='/health' element={<Health/>}></Route>
   <Route path='/entertainment' element={<Entertainment/>}></Route>
   <Route path='/technology' element={<Bitcoin/>}></Route>
   {/* <Route path='/details'  element={<DetailedNews/>}></Route> */}
   <Route path='/searchpage'  element={<Searchpage/>}></Route>
   </Routes>
   
   <Footer1/>
   </>
  );
}

export default App;
