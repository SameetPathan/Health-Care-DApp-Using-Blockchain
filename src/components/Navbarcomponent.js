import React from 'react'
import Logincomponent from './Logincomponent';


function Navbarcomponent(props) {
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Smart Care</h3>
            <p>A Heath Care Dapp</p>
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
          <ul className="navbar-nav mr-auto"></ul>

          {props.currentAccount ? 
            <button type="button" className="btn btn-success mr-3">
              User Address{" "}
              <span className="badge badge-light">{props.currentAccount}</span>
            </button>
          : ""
           
    }

          {props.currentBalance ?
            <button type="button" className="btn btn-success">
              ETH Balance{" "}
              <span className="badge badge-light">{props.currentBalance}</span>
            </button>
           : 
            ""}

            <Logincomponent setCurrentAccount={props.setCurrentAccount} setCurrentBalanace={props.setCurrentBalanace} currentAccount={props.currentAccount} currentBalance={props.currentBalance} ></Logincomponent>
        </div>
      </nav>
    </>
  );
}

export default Navbarcomponent