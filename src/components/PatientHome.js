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



<div className='d-lg-flex align-items-lg-center'>
      
    <div class="form-bg">
        <div class="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/doctor.jpg"}
            height="180px"
            class="card-img-top shadow rounded mb-2"
            alt="..."
            />
          
            <form class="form-horizontal">
                <Link to="/viewdoctor" class="btn btn-default">
                    Verify Doctor
                </Link>

            </form>
            </div>
      </div>

       

    <div class="form-bg">
        <div class="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            class="card-img-top shadow rounded mb-2"
            alt="..."
            />
           
                <form class="form-horizontal">
                <Link to="/viewpatient" class="btn btn-default">
                        View Patient Details
                </Link>
                </form> 
        </div>
      </div>


    <div class="form-bg">
        <div class="form-container "> 
            <img
            src={process.env.PUBLIC_URL + "/medical.jpg"}
            height="180px"
            class="card-img-top shadow rounded mb-2"
            alt="..."
                />
            <form class="form-horizontal">
            <Link to="/viewmedical" class="btn btn-default">
                        Verify Medical
            </Link>

            </form>
        </div>
    </div>

    <div class="form-bg">
        <div class="form-container ">
              
            <img
            src={process.env.PUBLIC_URL + "/pharma.jpg"}
            height="180px"
            class="card-img-top shadow rounded mb-2"
            alt="..."
            />
            <form class="form-horizontal">
            <Link to="/viewPharma" class="btn btn-default">
                        Verify Medicine
            </Link>

            </form>
        </div>
    </div>

    </div>





    </>
  )
}

export default PatientHome