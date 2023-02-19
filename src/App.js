
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sign_up from './components/Sign_up/Form';
import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import LoginClient from './components/LoginClient/LoginClient';
import Dashboard from './components/dsh/Dashboard';
import DashboardC from './components/DashboardC/DashboardC';
import AdvAccVerification from './components/Verification/AdvAccVerification';
import CannotAccess from './components/CannotAccess/CannotAccess';
import Change from './components/ChangePass/change';
import ForgotPass from './components/ForgotPass/ForgotPass';
// import Create from './components/dashboard/Create';
// import GetInvestments from './components/dashboard/GetInvestments';


function App() {
  var auth = localStorage.getItem("tokena");
  var cauth = localStorage.getItem("tokenc");
  var show = false
  let footerStyle = {
    minHeight: "75.2vh",
    margin: "50px auto",
  };
  return (
    <>
      {/* <Create></Create>
      <GetInvestments></GetInvestments> */}


      {!auth && <Navbar></Navbar>}
     <div style={footerStyle}>
      <Routes>
      <Route exact path="/" element={<Home/>}>  </Route>
      <Route exact path="/services" element={<Services/>}>  </Route>
      <Route exact path="/about" element={<About/>}>  </Route>
        <Route exact path="/login" element={<Login/>}>  </Route>
       {auth &&  <Route exact path="/dashboard" element={<Dashboard/>}>  </Route>}
       {cauth &&  <Route exact path="/dashboardc" element={<DashboardC/>}>  </Route>}
        <Route exact path="/*" element={<CannotAccess/>}>  </Route>
        <Route exact path="/accverify" element={<AdvAccVerification/>}>  </Route>
        <Route exact path="/loginc" element={<LoginClient/>}>  </Route>
        <Route  exact path="/SignUp" element={<Sign_up/>}></Route>
        <Route  exact path="/changepass" element={<Change/>}></Route>
        <Route  exact path="/forgotpass" element={<ForgotPass/>}></Route>
         {/* <Redirect></Redirect>  */}
      </Routes> 
      </div>
      <Footer></Footer>

    
        
    </>
    
  );
}

export default App;
