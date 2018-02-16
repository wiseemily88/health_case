import React from 'react';

const UserMedicalHistory = (props) => {
  const usermedicalhistory = props.usermedicalhistory;
  return(
    <div className="user-medicalhistory-row">
      <p className="user-name">{usermedicalhistory.name} </p>
    // notes
    // delete button
    </div>
  )
}
export default UserMedicalHistory;
