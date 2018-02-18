import React from 'react';
import MedicalHistoryForm from './MedicalHistoryForm';
import UserMedicalHistory from './UserMedicalHistory';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';


const createUserMedicalHistoryList = (usermedicalhistories) => {
  return usermedicalhistories.map((usermedicalhistory) => {
    return(
      <UserMedicalHistory
      key = {usermedicalhistory.id}
      usermedicalhistory = {usermedicalhistory}
      />
    )}
  )}

  const MedicalHistory = (props) => {
    const medicalhistories = props.medicalhistories;
    const usermedicalhistories = props.usermedicalhistories;
    return (
      <div className='container'>
        <MedicalHistoryForm medicalHistories = {medicalhistories} />
        <div className='user-list'>
          <h3> Current Medical History </h3>
          {createUserMedicalHistoryList(usermedicalhistories)}
        </div>
      </div>
    )
  }


export default MedicalHistory;
