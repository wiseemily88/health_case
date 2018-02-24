import React from 'react';
import MedicalHistoryForm from './MedicalHistoryForm';
import UserMedicalHistory from './UserMedicalHistory';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';


const createUserMedicalHistoryList = (usermedicalhistories, getCurrentMedicalHistory) => {
  return usermedicalhistories.map((usermedicalhistory) => {
    return(
      <UserMedicalHistory
      key = {usermedicalhistory.id}
      usermedicalhistory = {usermedicalhistory}
      getCurrentMedicalHistory = {getCurrentMedicalHistory}
      />
    )}
  )}

  const MedicalHistory = (props) => {
    const medicalhistories = props.medicalhistories;
    const usermedicalhistories = props.usermedicalhistories;
    return (
      <div className='container'>
        <MedicalHistoryForm
        medicalHistories = {medicalhistories}
        usermedicalHistories = {usermedicalhistories}
        addUserMedicalHistory={props.addUserMedicalHistory}

        />
        <div className='user-list'>
          <h3> Current Medical History </h3>
          {createUserMedicalHistoryList(usermedicalhistories,props.getCurrentMedicalHistory )}
        </div>
      </div>
    )
  }


export default MedicalHistory;
