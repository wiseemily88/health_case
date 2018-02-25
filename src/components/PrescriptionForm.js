import React, { Component } from 'react';
import {addPrescription} from '../utils/requests';
import'../styles/UserForm.css';

class PrescriptionForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      dosage: '',
      frequency: '',
      note: '',
    }
}
 updatePrescriptionInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }
addPrescription = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const dosage = this.state.dosage;
    const frequency = this.state.frequency;
    const note = this.state.note;

    addPrescription(name, dosage, frequency, note)

  }


render() {
    return (
    <div className="user-form">
      <h3> Add a New Prescription</h3>
      <form className="add-form">
        <label>
          Name:
          <input className= 'input'
          type="text"
          value={this.state.name}
          placeholder="Add the Name"
          onChange={ this.updatePrescriptionInfo.bind(this, 'name') }
          />
        </label>
      <br />
    <label>
      Dosage:
      <input className= 'input'
        type="text"
        value={this.state.dosage}
        placeholder="Add amount"
        onChange={ this.updatePrescriptionInfo.bind(this, 'dosage') }
        />
    </label>
      <br />
    <label>
      Frequency:
      <input className= 'input'
      type="text"
      value={this.state.frequency}
      placeholder="Add a How Frequently"
      onChange={ this.updatePrescriptionInfo.bind(this, 'frequency') }
      />
    </label>
      <br />
    <label>
      Note:
      <input
    type="text"
    value={this.state.note}
    placeholder="Add a Note"
    onChange={ this.updatePrescriptionInfo.bind(this, 'note') }
    />
    </label>
      <br />
        <button
            className="add-btn"
            onClick={this.addNewPrescription}
          > Update Current Prescriptions
        </button>
      </form>
</div>
    );
  }
}


export default PrescriptionForm;
