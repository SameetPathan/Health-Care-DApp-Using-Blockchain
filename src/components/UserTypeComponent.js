import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function UserTypeComponent() {
  return (
    <>

        <div class="d-lg-flex justify-content-lg-around">

            <div class="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + '/doctor.jpg'} height="180px"  class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title text-success">Are You a Doctor ?</h5>
                    <Link to="/doctorhome" class="btn btn-primary">Doctor Home</Link>
                </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + '/patient.jpg'} height="180px" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title text-success">Are you a Patient ? </h5>
                    <a href="/patienthome" class="btn btn-primary">view Details / Verify Entities</a>
                </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + '/medical.jpg'}  height="180px" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title text-success">Do You Have Medical ?</h5>
                    
                    <Link to="/addmedical" class="btn btn-primary">Register As Medical</Link>
                </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + '/pharma.jpg'}  height="180px" class="card-img-top" alt="..."/>
                <div class="card-body text-center">
                    <h5 class="card-title text-success">Are You Pharma Company ?</h5>
                    <Link to="/addpharma" class="btn btn-primary">Register As Pharma Company</Link>

                </div>
            </div>



        </div>

      
       
          
    

    </>
  )
}

export default UserTypeComponent