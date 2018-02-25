import React from 'react';
import PrescriptionForm from './PrescriptionForm';
import UserPrescription from './UserPrescription';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';


const createUserPrescriptionList = (userprescriptions, getCurrentPrescriptions) => {
  return userprescriptions.map((userprescription) => {
    return(
      <UserPrescription
      key = {userprescription.id}
      userprescription = {userprescription}
      getCurrentPrescriptions = {getCurrentPrescriptions}
      />
    )}
  )}

  const Prescription = (props) => {
    const userprescriptions = props.userprescriptions;
    return (
      <div className='container'>
        <PrescriptionForm
        addUserPrescription={props.addUserPrescription}
        />
        <div className='user-list'>
          <h3> Current Prescriptions </h3>
          {createUserPrescriptionList(userprescriptions,props.getCurrentPrescriptions )}
        </div>
      </div>
    )
  }


export default Prescription;
