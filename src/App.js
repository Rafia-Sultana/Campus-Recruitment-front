import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import About from './Components/About/About';


function App() {
  return (
    <div className="">
   <Header></Header>
   <div>
<Routes>
<Route path='/' element={<Home></Home>} ></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/signup' element={ <SignUp></SignUp> }></Route>
</Routes>
<Footer></Footer>
   </div>
    </div>
  );
}

export default App;
