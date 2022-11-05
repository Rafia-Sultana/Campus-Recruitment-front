import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import About from './Pages/About/About';
import Table from './Components/Table/Table';


function App() {
  return (
    <div className="">
   <Header></Header>

   <div>
<Routes>
<Route path='/' element={<Home></Home>} ></Route>
<Route path='/dashboard' element={<Dashboard/>}>
<Route path='table' element={<Table></Table>}></Route>
</Route>

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
