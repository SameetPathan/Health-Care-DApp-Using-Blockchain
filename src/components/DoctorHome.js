import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function DoctorHome() {
  return (
    <>

<div class="alert alert-success text-center" role="alert">
  Doctor Home
</div>


<div class="d-flex justify-content-around mt-4">

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/patient.jpg'} height="180px"  class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        <Link to="/addpatient" class="btn btn-success">Add Patient</Link>
    </div>
</div>

<div class="card" style={{width: "18rem"}}>
    <img src={process.env.PUBLIC_URL + '/patient.jpg'} height="180px" class="card-img-top rounded" alt="..."/>
    <div class="card-body text-center">
        
        <Link to="/viewpatient" class="btn btn-success">View Patient</Link>
    </div>
</div>


</div>




    </>
  )
}

export default DoctorHome