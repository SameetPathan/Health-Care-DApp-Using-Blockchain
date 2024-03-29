import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import Loader from './Loader';

const PatientContractAddress="0xD6c8633EB5863420e1b7433679DC91828d765Fa8";
const abiPatientContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "FullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Diagnoses",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Medicines",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Health_Survey_Lab_Test",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AnyPastHistroy",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "patientid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "FullName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Diagnoses",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Medicines",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Health_Survey_Lab_Test",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AnyPastHistroy",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Doctorid",
						"type": "address"
					}
				],
				"internalType": "struct PatientContract.PatientData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			}
		],
		"name": "getPatient",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function ViewPatientComponent(props) {


	const clear=()=>{
		document.getElementById("myForm").reset();
	}
	
    const search = async () => {
        try {
          const { ethereum } = window;

          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const PatientContract= new ethers.Contract(PatientContractAddress, abiPatientContract, signer);
            //datacapture
            const patientid=document.getElementById("patientid").value;
        
            //start 
    
            console.log("Initialize");

           
            const Txn2 = await PatientContract.getPatient(patientid);
       

            document.getElementById("name").innerHTML=Txn2[0];
            document.getElementById("gender").innerHTML=Txn2[1];
			document.getElementById("address").innerHTML=Txn2[2];
			document.getElementById("dateofbirth").innerHTML=Txn2[3];
			document.getElementById("phonenumber").innerHTML=Txn2[4];
            document.getElementById("diagnoses").innerHTML=Txn2[5];
            document.getElementById("medicines").innerHTML=Txn2[6];
            document.getElementById("healthsurvey").innerHTML=Txn2[7];
            document.getElementById("pasthistroy").innerHTML=Txn2[8];
			document.getElementById("doctorhospname").innerHTML=Txn2[9];
    
            console.log("Mining... please wait");
			console.log(Txn2);

           console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
        
           var elem = document.getElementById("alertid");
			
		  elem.classList.add("show");
		  setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);
		  
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
	  <Loader></Loader>
	<div className="alert alert-info text-center" role="alert">
    Patient Information Search Panel
    </div>

    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>

        <div className="alert alert-info" role="alert">
            Enter ID to Search
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Patient ID</label>
            <input type="number" className="form-control" id="patientid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

        </form>
		<div className='container'>
        <button onClick={search} className="btn btn-primary">Search</button>
		<button onClick={clear} className="btn btn-danger ml-4">
        Clear
      </button>
	  </div>
        


    </div>

<div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
<table className="table table-bordered">
    <thead className="thead-dark">
        <tr>
        <th scope="col">Full Name</th>
        <th scope="col">Gender</th>
		<th scope="col">DateOfBirth</th>
		<th scope="col">PhoneNumber</th>
        <th scope="col">Address</th>
        <th scope="col">Diagnoses</th>
        <th scope="col">Medicines</th>
        <th scope="col">Health Survey/ Lab tests</th>
        <th scope="col">Past History</th>
		<th scope="col">Doctor Id</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td id="name"></td>
        <td id="gender"></td>
		<td id="dateofbirth"></td>
		<td id="phonenumber"></td>
        <td id="address"></td>
        <td id="diagnoses"></td>
        <td id="medicines"></td>
        <td id="healthsurvey"></td>
        <td id="pasthistroy"></td>
		<td id="doctorhospname"></td>
        </tr>

    </tbody>
    </table>

    
</div>
</>
  )
}

export default ViewPatientComponent