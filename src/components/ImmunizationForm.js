import React, { Component } from 'react';
import {addMedicalHistory} from '../utils/requests';
import DatePicker from 'react-date-picker';
import'../styles/UserForm.css';

class ImmunizationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      date: new Date(),
      note: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({date: event.target.value});
}
handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
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
      <DatePicker
        onChange={(e) => this.setState({date: e.target.value})}
        />
      <input type="text" value={this.state.note}
      placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ImmunizationForm;
