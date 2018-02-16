import React from 'react';
import MedicalHistoryList from './MedicalHistoryList';
import UserMedicalHistory from './UserMedicalHistory';


const createMedicalHistoryList = (medicalhistories) => {
  return medicalhistories.map((medicalhistory) => {
  return(
    <MedicalHistoryList
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
