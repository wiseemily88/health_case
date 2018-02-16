import React from 'react';

const MedicalHistoryList = (props) => {
  const medicalhistory = props.medicalhistory;
  return(
    <div className="medicalhistory-row">
      <p className="medicalhistory-name">{medicalhistory.name} </p>
    // need to add buttons
    </div>
  )
}
export default MedicalHistoryList;
