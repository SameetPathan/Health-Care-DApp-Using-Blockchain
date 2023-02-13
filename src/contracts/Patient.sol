// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract PatientContract{

struct PatientData{
    
		uint256 patientid;
        string FullName;
        string Gender;
        string Address;
		string DateOfBirth;
		string PhoneNumber;
        string Diagnoses;
        string Medicines;
        string Health_Survey_Lab_Test;
		string AnyPastHistroy;
		string DoctorHospName;
}


PatientData []patient;


function addPatient(
		uint256 patientid,
        string memory FullName,
        string memory Gender,
        string memory Address,
		string memory DateOfBirth,
		string memory PhoneNumber,
        string memory Diagnoses,
        string memory Medicines,
        string memory Health_Survey_Lab_Test,
		string memory AnyPastHistroy,
		string memory DoctorHospName
        
       
) public{
	PatientData memory e
		=PatientData(patientid,
		FullName,
        Gender,
        Address,
		DateOfBirth,
		PhoneNumber,
        Diagnoses,
        Medicines,
        Health_Survey_Lab_Test,
		AnyPastHistroy,
		DoctorHospName
        
      );
	patient.push(e);
}

function getPatient(
	uint256 patientid
) public view returns(
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
	string memory,
    string memory,
	string memory,
	string memory
){
	uint i;
	for(i=0;i<patient.length;i++)
	{
		PatientData memory e
			=patient[i];
		
		if(e.patientid==patientid)
		{
				return(e.FullName,
        e.Gender,
        e.Address,
		e.DateOfBirth,
		e.PhoneNumber,
        e.Diagnoses,
        e.Medicines,
        e.Health_Survey_Lab_Test,
		e.AnyPastHistroy,
		e.DoctorHospName
        );
		}
	}

	return( "Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
            "Not Found");
    }

	 function getBalance() public view returns(uint256){
		address owner;
		owner=msg.sender;
        return owner.balance;
    }
}
