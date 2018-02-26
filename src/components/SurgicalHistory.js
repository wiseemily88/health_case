import React from 'react';
import SurgicalHistoryForm from './SurgicalHistoryForm';
import UserSurgicalHistory from './UserSurgicalHistory';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';


const createUserSurgeryHistoryList = (usersurgicalhistories, getCurrentSurgicalHistories) => {
  return usersurgicalhistories.map((usersurgicalhistory) => {
    return(
      <UserSurgicalHistory
      key = {usersurgicalhistory.id}
      usersurgicalhistory = {usersurgicalhistory}
      getCurrentSurgicalHistories = {getCurrentSurgicalHistories}
      />
    )}
  )}

  const SurgicalHistory = (props) => {
    const usersurgicalhistories = props.usersurgicalhistories;
    return (
      <div className='container'>
        <SurgicalHistoryForm
        addUserSurgicalHistory={props.addUserSurgicalHistory}
        />
        <div className='user-list'>
          <h3> Current Surgery List </h3>
          {createUserSurgeryHistoryList(usersurgicalhistories, props.getCurrentSurgicalHistories )}
        </div>
      </div>
    )
  }


export default SurgicalHistory;
