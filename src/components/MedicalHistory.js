import React, {Component} from 'react';


class MedicalHistory extends Component {
render() {
let medicalhistories = this.props.medicalhistories;

  let mappedMedicalHistories = medicalhistories.map((medicalhistory) => {
    return(
    <div className="medicalhistory-row">
      <p className="medicalhistory-name">{medicalhistory.name} </p>
    </div>
    )
  })

    return (
      <div className="medical-history-list">
        <div className="medical-row title-row">
          <p className="meidcal-name title">Name</p>
        </div>
        { mappedMedicalHistories }
      </div>
    )
  }
  }

export default MedicalHistory;
