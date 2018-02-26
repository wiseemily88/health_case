import React, { Component } from 'react';
import {addUserHealthMaintenance} from '../utils/requests';
import'../styles/UserForm.css';

class HealthMaintenanceForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      health_maintenance_id: '',
      date: '',
      note:'',
      };

    this.handleChange = this.handleChange.bind(this);
    this.addNewHealthMaintenanceRecord = this.addNewHealthMaintenanceRecord.bind(this);
  }
updateHealthMaintInfo = (key, event) => {
   this.setState({ [key]: event.target.value })
 }
handleChange(event) {
    this.setState({health_maintenance_id: event.target.value});
  }
  addNewHealthMaintenanceRecord = (event) => {
    event.preventDefault();
    const user_id = 1;
    const health_maintenance_id = this.state.health_maintenance_id;
    const currentUserhealthMaintenace = this.props.addhealthMaintenance
    console.log(health_maintenance_id);
    addUserHealthMaintenance(user_id, health_maintenance_id)
    .then((response) => {
      currentUserhealthMaintenace ({id: response.data.id, name: response.data.name, date:response.data.date})
    });
  }

createOptions = (healthmaintenances) => {
  return healthmaintenances.map((healthmaintenance) => {
  return(
    <option key = {healthmaintenance.id}
      value = {healthmaintenance.id}>
      {healthmaintenance.name}
    </option>
  )
})
}
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please update your records:
          <select value={this.state.value} onChange={this.handleChange}>
          {this.createOptions(this.props.healthmaintenances)}
          </select>
        </label>
        <input type="date"
        value={this.state.date}
        placeholder="Enter the Date"
        onChange={ this.updateHealthMaintInfo.bind(this, 'date') }
        />
        <input type="text"
        value={this.state.note}
        placeholder="Enter a notes"
        onChange={ this.updateHealthMaintInfo.bind(this, 'note') }
        />
        <br />
        <button
            onClick={this.addNewHealthMaintenanceRecord}
          > Update Health Maintenance
        </button>
      </form>
    );
  }
}

export default HealthMaintenanceForm;
