import React from 'react';
import FamilyHistoryForm from './FamilyHistoryForm';
import UserFamilyHistory from './UserFamilyHistory';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';


const createUserFamilyHistoryList = (userfamilyhistories, getCurrentFamilyHistory) => {
  return userfamilyhistories.map((userfamilyhistory) => {
    return(
      <UserFamilyHistory
      key = {userfamilyhistory.id}
      userfamilyhistory = {userfamilyhistory}
      getCurrentFamilyHistory = {getCurrentFamilyHistory}
      />
    )}
  )}

  const FamilyHistory = (props) => {
    const familyhistories = props.familyhistories;
    const userfamilyhistories = props.userfamilyhistories;
    return (
      <div className='container'>
        <FamilyHistoryForm
        familyhistories = {familyhistories}
        userfamilyhistories = {userfamilyhistories}
        addUserFamilyHistory={props.addUserFamilyHistory}
        />

      <div className='user-list'>
        <h3> Current Family History </h3>
        {createUserFamilyHistoryList(userfamilyhistories, props.getCurrentFamilyHistory )}
      </div>
    </div>
    )
  }


export default FamilyHistory;
