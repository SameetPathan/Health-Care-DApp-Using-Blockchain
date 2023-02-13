import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';


const MedicalContractAddress="0x832e01ccDF5F56FaB6828cB1E8F26E02261702F5";
const abiMedicalContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Medicalid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "MedicalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CertificateNumber",
				"type": "string"
			}
		],
		"name": "addMedical",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Medicalid",
				"type": "uint256"
			}
		],
		"name": "getMedical",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


function AddMedicalComponent(props) {

  
  const clear=()=>{
    document.getElementById("myForm").reset();
}

    const savedata = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const MedicalContract= new ethers.Contract(MedicalContractAddress, abiMedicalContract, signer);
  
  
            //datacapture
            const Medicalid=document.getElementById("mid").value;
          
            const MedicalName=document.getElementById("mname").value;
           
            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;
    
            const phonenumber=document.getElementById("phonenumber").value;

            const CertificateNumber=document.getElementById("certificatenumber").value;
  
            //start          
            console.log("Initialize");
            const Address=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
    
            //console.log(Fullname)
            //console.log(idu)
            let Txn2 = await MedicalContract.addMedical(Medicalid,MedicalName,Address,phonenumber,CertificateNumber);
    
            
            console.log("Mining... please wait");
            await Txn2.wait();
    
            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
           
            var elem = document.getElementById("alertid");
		  elem.classList.add("show");
		  setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);

          //
      clear();
  

               //
           

          } else {
            console.log("Ethereum object does not exist");
            var elem = document.getElementById("alertidf");
            elem.classList.add("show");
            setTimeout(function(){
              elem.classList.remove("show");
            }, 3000);
    
          }
    
        } catch (err) {
          console.log(err);
          var elem = document.getElementById("alertidf");
		elem.classList.add("show");
		setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);
    
        }
      }



  

  return (
    <>
    <div className="alert alert-info text-center" role="alert">
    Medical Information Add Panel
    </div>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>
        <div className="alert alert-danger" role="alert">
            Note : You will Spend ETH While Saving Data
            </div>
        <div className="alert alert-info" role="alert">
            Profile data
            </div>
          
        <div className="form-row ">

        <div className="col-lg-4 col-md-6 mb-3 ">
            <label htmlFor="validationCustom01">Medical ID</label>
            <input type="number" className="form-control" id="pid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Medical name</label>
            <input type="text" className="form-control" id="mname"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>
           
        
           

            <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Phone Number</label>
            <input type="number" className="form-control" id="phonenumber"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

            
        </div>
        <div className="form-row">
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Flat , Wing , House Name"
          />
        </div>
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Street , Area"
          />
        </div>
        </div>
        <div className="form-row">
            <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom03">City</label>
            <input type="text" className="form-control" id="city" required/>
            <div className="invalid-feedback">
                Please provide a valid city.
            </div>
            </div>
            
            <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom04">State</label>
            <input type="text" className="form-control" id="state" required/>
            <div className="invalid-feedback">
                Please select a valid state.
            </div>
            </div>
            <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="zipcode" required/>
            <div className="invalid-feedback">
                Please provide a valid zip.
            </div>
            </div>
        </div>
        <div className="alert alert-info" role="alert">
            Medical data
        </div>

        
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">licence number </label>
    <textarea className="form-control" id="certificatenumber" rows="3"></textarea>
  </div>
  


     
        
        </form>
        <button onClick={savedata} className="btn btn-primary mb-5">Save</button>
      
        <button onClick={clear} className="btn bt1 btn-danger">
        Clear
      </button>

    </div>
    </>
  )
}

export default AddMedicalComponent

