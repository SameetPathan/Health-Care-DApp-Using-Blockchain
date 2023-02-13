import {React,useEffect,} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { ethers } from 'ethers';

const PharmaContractAddress="0x22b8424720F0EE1A55dEB24176Da80640138064d";
const abiPharmaContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "UpdateMedicine",
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
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
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
			},
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
				"name": "MedicineBatchId",
				"type": "uint256"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


function PharmaHome() {

  const getstatusMed = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const PharmaContract= new ethers.Contract(PharmaContractAddress,abiPharmaContract, signer);
        let medid=101;
        let Txn = await PharmaContract.getStatus(medid);
        let flag=String(Txn);
        console.log(String(Txn))
       
        
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>

<div className="alert alert-success text-center" role="alert">
  Pharma Home
</div>

<div className="d-lg-flex align-items-lg-center">

      <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/medical.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
        
            <form className="form-horizontal">
                <Link to="/addpharma" className="btn btn-default">
                Add Medicine and get Verified
                </Link>

            </form>
            </div>
      </div>

      <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/medical.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
        
            <form className="form-horizontal">
                <Link to="/viewpatient" className="btn btn-default">
                View Verification Medicine Status
                </Link>

            </form>
            </div>
      </div>


</div>







    </>
  )
}

export default PharmaHome