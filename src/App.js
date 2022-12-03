import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import About from './Pages/About/About';

import Notfound from './Pages/NotFound/NotFound';
import RegisteredCandidate from './Components/RegisteredCandidate/RegCandidate';
import RegisteredCompany from './Components/RegisteredCompany/RegisteredCompany';
import TotalVacancy from './Components/TotalVacancy/TotalVacancy';
import JobDetails from './Pages/JobDetails/JobDetails';
import Stu_details from './Components/RegisteredCandidate/Stu_details';
import AddVacancy from './Components/AddVacancy/AddVacancy';
import NewApplication from './Components/JobApplication/NewApplication';
import SortListed from './Components/JobApplication/SortListed';
import Rejected from './Components/JobApplication/Rejected';
import All from './Components/JobApplication/All';
import DashLayOut from './Components/DashLayOut';
import FillEduForm from './Components/FillEduForm/FillEduForm';
import ViewVacancy from './Components/ViewVacancy/ViewVacancy';
import ApplyJob from './Components/ApplyJob/ApplyJob';
import HistoryOfAppliedJob from './Components/HistoryOfAppliedJob/HistoryOfAppliedJob';
import MakeCV from './Components/FillEduForm/MakeCv';
import CvForm from './Components/FillEduForm/CvForm';
import CvInfo from './Components/FillEduForm/CvInfo';
import ViewAllJob from './Components/ViewAllJob/ViewAllJob';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import AcademicDetails from './Components/AcademicDetails/AcademicDetails';
import EmploymentHistory from './Components/EmploymentHistory/EmploymentHistory';
import ViewResume from './Components/ViewResume/ViewResume';
import EmployeSignUp from './Pages/EmployeLogin/EmployeSignUp';



function App() {
  return (
    <div className="">
      <Header></Header>
      <div>
        {/* <BrowserRouter> */}

        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/dashboard' element={<DashLayOut />}>
            <Route index element={<Dashboard />} />

            <Route path='registeredCandidate' element={<RegisteredCandidate></RegisteredCandidate>}> </Route>
            <Route path='registeredCompany' element={<RegisteredCompany></RegisteredCompany>}></Route>
            <Route path='totalVacancy' element={<TotalVacancy></TotalVacancy>}></Route>
            <Route path='viewvacancy' element={<ViewVacancy></ViewVacancy>}></Route>
            <Route path='history' element={<HistoryOfAppliedJob></HistoryOfAppliedJob>}></Route>


            <Route path='fillEduForm' element={<FillEduForm></FillEduForm>}>  </Route>
            <Route path='personaldetails' element={<PersonalDetails></PersonalDetails>}></Route>
            <Route path='academicdetails' element={<AcademicDetails></AcademicDetails>}></Route>
            <Route path='employmenthistory' element={<EmploymentHistory></EmploymentHistory>}></Route>
            <Route path='viewresume' element={<ViewResume></ViewResume>}></Route>
            {            /* <Route path='cvform' element={<CvForm></CvForm>}></Route>
            <Route path='cvinfo' element={<CvInfo></CvInfo>}></Route> */}
            <Route path='addVacancy' element={<AddVacancy></AddVacancy>}></Route>
            <Route path='new' element={<NewApplication></NewApplication>}></Route>
            <Route path='sortlisted' element={<SortListed></SortListed>}></Route>
            <Route path='rejected' element={<Rejected></Rejected>}></Route>
            <Route path='all' element={<All></All>}></Route>
          </Route>
          <Route path='apply/:id' element={<ApplyJob></ApplyJob>}> </Route>
          <Route path='/viewalljobs' element={<ViewAllJob></ViewAllJob>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/viewdetails/:id' element={<JobDetails></JobDetails>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/employesignup' element={<EmployeSignUp></EmployeSignUp>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        {/* </BrowserRouter> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
