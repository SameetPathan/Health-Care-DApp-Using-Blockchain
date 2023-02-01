import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';


const DoctorContractAddress="0x569c1c7A1cd4CaE985C7F5149C1E99d8cE8a72AB";
const abiDoctorContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Doctorid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "HospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DoctorName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Speciality",
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
			},
			{
				"internalType": "string",
				"name": "HospitalID",
				"type": "string"
			}
		],
		"name": "addHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Doctorid",
				"type": "uint256"
			}
		],
		"name": "getHospital",
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


function AddDoctor(props) {

  

  const clear=()=>{
    document.getElementById("myForm").reset();
}

    const savedata = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const DoctorContract= new ethers.Contract(DoctorContractAddress, abiDoctorContract, signer);
  
  
            //datacapture
            const Doctorid=document.getElementById("docid").value;
          
            const HospitalName=document.getElementById("hname").value;

            const DoctorName=document.getElementById("dname").value;
        
            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;

            const Speciality=document.getElementById("speciality").value;

            const PhoneNumber=document.getElementById("phonenumber").value;

            const CertificateNumber=document.getElementById("certificatenumber").value;

            const HospitalId=document.getElementById("hospitalid").value;

            //start          
            console.log("Initialize");
            
            const Address=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
       
            //console.log(Fullname)
            //console.log(idu)
            let Txn2 = await DoctorContract.addHospital(Doctorid,HospitalName,DoctorName,Address,Speciality,PhoneNumber,CertificateNumber,HospitalId);
    
            
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
    Doctor Information Add Panel
    </div>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>
        <div className="alert alert-danger" role="alert">
            Note : You will Spend ETH While Saving Data
            </div>
        <div className="alert alert-info" role="alert">
            Profile data
            </div>
           
        <div className="form-row">

        <div className="col-lg-4 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Doctor ID</label>
            <input type="number" className="form-control" id="docid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

           
            <div className=" col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Doctor name</label>
            <input type="text" className="form-control" id="dname"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Speciality</label>
            <input type="text" className="form-control" id="speciality"  required/>
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
        <div className="col-lg-4 form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Flat , Wing , House Name"
          />
        </div>
        <div className="col-lg-4 form-group">
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

        <div className="form-row">

        <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Hospital ID</label>
            <input type="text" className="form-control" id="hospitalid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Hospital name</label>
            <input type="text" className="form-control" id="hname"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>
            
        </div>

       


        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">License Number</label>
    <textarea className="form-control" id="certificatenumber" rows="3"></textarea>
  </div>
        
        </form>
        <button onClick={savedata} className="btn btn-primary">Save</button>
        <button onClick={clear} className="btn btn-danger ml-4">
        Clear
      </button>
    </div>
    
    </>
  )
}

export default AddDoctor

