import React from 'react';
import Loader from './Loader';
import Logincomponent from './Logincomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Navbarcomponent(props) {


  const handleGoBack = () => {
    window.history.back();
  }

  const divStyle = {
    borderBottom: '0.1px solid white',
  };


  return (
    <>
  <Loader></Loader>
  <div className='sticky-top'>
  {props.currentAccount ? 
        <div className='container-fluid text-center d-flex justify-content-end bgd' style={divStyle}>
        <div>
        {props.currentAccount ? 
            <button type="button" className="btn btn-success mr-3">
              User Address{" "}
              <span className="badge badge-light">{props.currentAccount}</span>
            </button>
          : ""
          }
        </div>
        <div>
        {props.currentBalance ?
            <button type="button" className="btn btn-success">
              ETH Balance{" "}
              <span className="badge badge-light">{props.currentBalance}</span>
            </button>
           : 
            ""}
        </div>
      </div>:""}

          <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Smart HealthChain</h3>
            <p>A blockchain DApp</p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
          {props.currentAccount?
            <Link to="/" className='nav-link ml-5'>Home</Link>:""}
          </ul>
          {props.currentAccount?<button className='btn btn-secondary' onClick={handleGoBack}>Go Back</button>:""}
           
            <Logincomponent setCurrentAccount={props.setCurrentAccount} setCurrentBalanace={props.setCurrentBalanace} currentAccount={props.currentAccount} currentBalance={props.currentBalance} ></Logincomponent>
        </div>
      </nav>
    </div>

  
    </>
  );
}

export default Navbarcomponent