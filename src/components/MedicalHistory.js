import React from 'react';
import MedicalHistoryForm from './MedicalHistoryForm';
import UserMedicalHistory from './UserMedicalHistory';
import '../styles/Containers.css';


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
      { createUserMedicalHistoryList(usermedicalhistories)}
      </div>
    )
  }


export default MedicalHistory;
