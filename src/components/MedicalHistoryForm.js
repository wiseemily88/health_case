import React, { Component } from 'react';
import {addMedicalHistory} from '../utils/requests';
import'../styles/UserForm.css';

class MedicalHistoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkedIds: [],
  }
this.handleInputChange = this.handleInputChange.bind(this);
this.addNewMedicalHistory = this.addNewMedicalHistory.bind(this);
}
handleInputChange(event) {

    const target = event.target;
    const name = target.name;

let newCheckedIds;
if (this.state.checkedIds.indexOf(name) === -1) {
  newCheckedIds = [...this.state.checkedIds, name];
} else {
  newCheckedIds=this.state.checkedIds.filter(id => id !== name)
}
    this.setState({
      checkedIds: newCheckedIds
    });
  }

  addNewMedicalHistory = (event) => {
    event.preventDefault();
    const user_id = 1;
   // need to figure out how to grab the user id
    const medical_history_ids = this.state.checkedIds;
    const current_ids = this.props.usermedicalHistories.map(medicalHistory => medicalHistory.id);
    const currentUserMedicalHistory = this.props.addUserMedicalHistory

  medical_history_ids.forEach(function(medical_history_id) {
      if (current_ids.indexOf(parseInt(medical_history_id)) === -1) {
        addMedicalHistory(user_id, medical_history_id)
        .then((response) => {
          currentUserMedicalHistory({ id: response.data.id, name: response.data.name})
        });
  }
})
}

 createMedicalHistoryLabels = (medicalhistories) => {
  return medicalhistories.map((medicalhistory) => {
  return(
      <label key = {medicalhistory.id}  className="form-lbl">
        {medicalhistory.name.charAt(0).toUpperCase() + medicalhistory.name.slice(1)}
        <input
          className="input"
          name= {medicalhistory.id}
          type="checkbox"
          onChange={this.handleInputChange} />
      </label>
      )
  })
}

render() {
    return (
    <div className="user-form">
      <h3> Medical History</h3>
        <h5> Please check to indicate if you have ever had the following conditions: </h5>
      <form className="add-form">
          {this.createMedicalHistoryLabels(this.props.medicalHistories)}
        <br />
        <button
            className="add-btn"
            onClick={this.addNewMedicalHistory}
          > Update Medical History
        </button>
      </form>
</div>
    );
  }
}


export default MedicalHistoryForm;
