import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { clear } from '@testing-library/user-event/dist/clear';


const PharmaContractAddress="0xaB9BDe2feBe5f4aA9bb0D76b39F5Adc729e94DDf";
const abiPharmaContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "CompanyID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CompanyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ExpireDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ManufactureDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Contents",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ApprovalFrom",
				"type": "string"
			}
		],
		"name": "addMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			}
		],
		"name": "getMedicine",
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

function AddPharma(props) {

   

  const clear=()=>{
    document.getElementById("myForm").reset();
}


    const savedata = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const PharmaContract= new ethers.Contract(PharmaContractAddress, abiPharmaContract, signer);
  
  
            //datacapture
            const MedicineBatchId=document.getElementById("mbid").value;
          
            const CompanyId=document.getElementById("cid").value;

            const CompanyName=document.getElementById("cname").value;
        
            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;

            const Expire=document.getElementById("expire").value;

            const Manufacture=document.getElementById("manufacture").value;

            const Contents=document.getElementById("contents").value;

            const ApprovalForm=document.getElementById("approvalform").value;

            //start          
            console.log("Initialize");
            
            const Address=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
       
          
            let Txn2 = await PharmaContract.addMedicine(MedicineBatchId,CompanyId,CompanyName,Address,Expire,Manufacture,Contents,ApprovalForm);
    
            
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
    Pharma (Medicine) Information Add Panel
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

        <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Medicne Batch ID</label>
            <input type="number" className="form-control" id="mbid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Company ID</label>
            <input type="number" className="form-control" id="cid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>
            <div className=" col-lg-3 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Company Name</label>
            <input type="text" className="form-control" id="cname"  required/>
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
            Medicine data
        </div>

        <div className="form-row">


        <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Manufacture Date</label>
            <input type="date" className="form-control" id="manufacture"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>

        <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Expire Date</label>
            <input type="date" className="form-control" id="expire"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>

       

        </div>


        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Contents In Medicine</label>
    <textarea className="form-control" id="contents" rows="3"></textarea>
  </div>

        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Approval From</label>
    <textarea className="form-control" id="approvalfrom" rows="3"></textarea>
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

export default AddPharma

