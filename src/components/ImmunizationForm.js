import React, { Component } from 'react';
import {addUserImmunization} from '../utils/requests';
import'../styles/UserForm.css';

class ImmunizationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      immunization_id: '',
      date: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.addNewImmunizationRecord = this.addNewImmunizationRecord.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({date: event.target.value});
}
handleChange(event) {
    this.setState({immunization_id: event.target.value});
  }
  addNewImmunizationRecord = (event) => {
    event.preventDefault();
    const user_id = 1;
    const immunization_id = this.state.immunization_id;
    const currentUserImmunization = this.props.addImmunization
    addUserImmunization(user_id, immunization_id)
    .then((response) => {
      currentUserImmunization({id: response.data.id, name: response.data.name})
    });
  }

createOptions = (immunizations) => {
  return immunizations.map((immunization) => {
  return(
    <option key = {immunization.id}
      value = {immunization.id}>
      {immunization.name}
    </option>
  )
})
}
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please select all past immunizations:
          <select value={this.state.value} onChange={this.handleChange}>
          {this.createOptions(this.props.immunizations)}
          </select>
        </label>
        <input type="date"
        value={this.state.date}
        placeholder="Enter the Date"
        onChange={(e) => this.setState({date: e.target.value})} />
        <br />
        <button
            onClick={this.addNewImmunizationRecord}
          > Update Immunization Record
        </button>
      </form>
    );
  }
}

export default ImmunizationForm;
