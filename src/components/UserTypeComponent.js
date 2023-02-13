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
      <div class="alert alert-success text-center" role="alert">
        Welcome To Jarvis Systems
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
            <h3 class="title">Doctor ?</h3>
            <form class="form-horizontal">
                <Link to="/doctorhome" class="btn btn-default">
                Doctor Dashboard 
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
            <h3 class="title">Patient ?</h3>
                <form class="form-horizontal">
                <Link to="/patienthome" class="btn btn-default">
                        Patient Dashboard 
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
            <h3 class="title">Medical ?</h3>
            <form class="form-horizontal">
            <Link to="/medicalhome" class="btn btn-default">
                        Medical Dashboard 
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
            <h3 class="title">Pharma ?</h3>
            <form class="form-horizontal">
            <Link to="/pharmahome" class="btn btn-default">
                        Pharma Dashboard 
            </Link>

            </form>
        </div>
    </div>

    </div>

    </>
  );
}

export default UserTypeComponent