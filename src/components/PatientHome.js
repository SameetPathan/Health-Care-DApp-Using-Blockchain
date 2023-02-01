import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function PatientHome() {
  return (
    <>

<div class="alert alert-success text-center" role="alert">
  Patient Home
</div>


<div class="d-flex justify-content-around mt-4">

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/doctor.jpg'} height="180px"  class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        <Link to="/viewdoctor" class="btn btn-success">verify Doctor</Link>
    </div>
</div>

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/patient.jpg'} height="180px" class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        
        <Link to="/viewpatient" class="btn btn-success">View Patient</Link>
    </div>
</div>

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/medical.jpg'}  height="180px" class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        
        <Link to="/viewmedical" class="btn btn-success">Verify Medical</Link>
    </div>
</div>

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/pharma.jpg'}  height="180px" class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        <Link to="/viewpharma" class="btn btn-success">Verify Pharma</Link>
    </div>
</div>



</div>




    </>
  )
}

export default PatientHome