import './App.css';
import React from 'react';
import { useState } from 'react';
import AddPatientComponent from './components/AddPatientComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import AlertComponent from './components/AlertComponent';
import AddDoctor from './components/AddDoctor';
import AddMedicalComponent from './components/AddMedical';
import AddPharma from './components/AddPharma';
import ViewPatientComponent from './components/ViewPatientComponent';
import ViewPharmaComponent from './components/ViewPharmaComponent';
import ViewDoctorComponent from './components/ViewDoctorComponent';
import ViewMedicalComponent from './components/ViewMedicineComponent';
import UserTypeComponent from './components/UserTypeComponent';
import PatientHome from './components/PatientHome';
import DoctorHome from './components/DoctorHome';

 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [currentBalance, setCurrentBalanace] = useState(null);

  return <>

    <div className="App">
            <Router>
            <div className="App">
            <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            
              <Routes> 

              <Route exact path='/' element={<UserTypeComponent></UserTypeComponent>}></Route>
              <Route exact path='/PatientHome' element={<PatientHome></PatientHome>}></Route>

              <Route exact path='/DoctorHome' element={<DoctorHome></DoctorHome>}></Route>
              
              <Route exact path='/addpatient' element={<AddPatientComponent currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddPatientComponent>}></Route>
              <Route exact path='/adddoctor' element={<AddDoctor currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddDoctor >}></Route>
              <Route exact path='/addmedical' element={<AddMedicalComponent currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddMedicalComponent>}></Route>
              <Route exact path='/addpharma' element={<AddPharma currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddPharma>}></Route>

              <Route exact path='/viewpatient' element={<ViewPatientComponent></ViewPatientComponent>}></Route>
              <Route exact path='/viewPharma' element={<ViewPharmaComponent></ViewPharmaComponent>}></Route>
              <Route exact path='/viewdoctor' element={<ViewDoctorComponent></ViewDoctorComponent>}></Route>
              <Route exact path='/viewmedical' element={<ViewMedicalComponent></ViewMedicalComponent>}></Route>

              </Routes>
              
              <AlertComponent></AlertComponent>
              <FooterComponent></FooterComponent>
            </div>
          </Router>

    </div>
  </>;
}

export default App;



