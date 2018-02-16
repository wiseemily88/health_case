import React from 'react';
import MedicalHistoryForm from './MedicalHistoryForm';
import UserMedicalHistory from './UserMedicalHistory';


const createMedicalHistoryList = (medicalhistories) => {
  return medicalhistories.map((medicalhistory) => {
  return(
    <MedicalHistoryForm
      key = {medicalhistory.id}
      medicalhistory = {medicalhistory}
    />
  )}
)}

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
  <div>
  { createMedicalHistoryList(medicalhistories)}
  { createUserMedicalHistoryList(usermedicalhistories)}
  </div>
  )
}


export default MedicalHistory;
