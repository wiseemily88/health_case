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
}
handleInputChange(event) {

    const target = event.target;
    const value = target.value;
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

  addMedicalHistory = (event) => {

    event.preventDefault();
    const user_id = 1;
    const medical_history_id = this.state.checkedIds;

  addMedicalHistory(user_id, medical_history_id)
.then(response=>console.log(response));

}
 createMedicalHistoryLabels = (medicalhistories) => {

  return medicalhistories.map((medicalhistory) => {
  return(
      <label className="form-lbl">
        {medicalhistory.name}
        <input
          className="input"
          key = {medicalhistory.id}
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
      <h3> Add a New Medical Condition</h3>
        <h5> Click checkox if answer is "Yes" </h5>
      <form className="add-form">
          {this.createMedicalHistoryLabels(this.props.medicalHistories)}
        <br />
        <button
            className="add-btn"
            onClick={this.addMedicalHistory }
          > Update Medical History
        </button>
      </form>
</div>
    );
  }
}



export default MedicalHistoryForm;
