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

function ViewMedicalComponent(props) {


	const clear=()=>{
		document.getElementById("myForm").reset();
	}
	
    const search = async () => {
        try {
          const { ethereum } = window;

          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const MedicalContract= new ethers.Contract(MedicalContractAddress, abiMedicalContract, signer);
            //datacapture
            const medicalid=document.getElementById("medicalid").value;
        
            //start 
    
            console.log("Initialize");

           
            const Txn2 = await MedicalContract.getPatient(medicalid);
            console.log(Txn2[0]);

   

            document.getElementById("mname").innerHTML=Txn2[0];
			document.getElementById("address").innerHTML=Txn2[2];
            document.getElementById("phonenumber").innerHTML=Txn2[4];
            document.getElementById("lno").innerHTML=Txn2[5];

           
    
            console.log("Mining... please wait");

           // console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${Txn2.hash}`);
            
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
	<div className="alert alert-info text-center" role="alert">
    Medical Information Search Panel
    </div>

    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>

        <div className="alert alert-info" role="alert">
            Enter ID to Search
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Medical ID</label>
            <input type="number" className="form-control" id="doctorid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

        </form>
        <button onClick={search} className="btn btn-primary">Search</button>
		<button onClick={clear} className="btn btn-danger ml-4">
        Clear
      </button>
        
        


    </div>

<div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
<table className="table table-bordered">
    <thead className="thead-dark">
        <tr>

        <th scope="col">Medical Name</th>
		<th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col">License Number</th>
      
        </tr>
    </thead>
    <tbody>
        <tr>
        <td id="mname"></td>
        <td id="address"></td>
        <td id="phonenumber"></td>
        <td id="lno"></td>
        </tr>

    </tbody>
    </table>

    
</div>
</>
  )
}

export default ViewMedicalComponent