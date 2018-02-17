import React, { Component } from 'react';
import {updateMedicalHistory} from '../utils/requests'

class MedicalHistoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    isChecked: false,
  }
 this.handleInputChange = this.handleInputChange.bind(this);
}
handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addMedicalHistory = (event) => {
    event.preventDefault();
    const user_id = 1;
    const medical_history_id = this.state.calories;

}
 createMedicalHistoryLabels = () => {
  const medicalhistory = this.props.medicalhistory;
  return(
      <label>
        {medicalhistory.name}
        <input
          name="isChecked"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleInputChange} />
      </label>
  )
}

render() {
    return (
      <form className="add-form">
          {this.createMedicalHistoryLabels()}
        <br />
        <button
            className="add-medical-history-btn"
            onClick={this.addMedicalHistory }
          >
          </button>
      </form>
    );
  }
}



export default MedicalHistoryForm;
