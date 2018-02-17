import React from 'react';
import '../styles/UserCurrentCard.css';

const UserMedicalHistory = (props) => {
  const usermedicalhistory = props.usermedicalhistory;
  return(
  <div className="user-card">
      <p className="title">{usermedicalhistory.name} </p>
    </div>
  )
}
export default UserMedicalHistory;
