import React, { Component } from 'react';
import {removeHealthMaintenance, updateHealthMaintenace} from '../utils/requests';


class UserHealthMaintenanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    note: '',
    };

  }
 handleRemoveHealthMaintenance = (health_maintenance_id) => {
  const user_id = 1;
  removeHealthMaintenance(user_id, health_maintenance_id)
  .then(() => this.props.getCurrentHealthMaintenance() )
  }

handleUpdateImmunization= (health_maintenance_id) => {
const user_id = 1;
const note = this.state.note
  updateHealthMaintenace(note, user_id, health_maintenance_id)
  .then(() => this.props.getCurrentHealthMaintenance() )
}

  handleSubmit(event) {
    alert('A note was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let userhealthmaintenance = this.props.userhealthmaintenance;

    return (
      <form onSubmit={this.handleSubmit}>
      <label  className="user-card">
      {userhealthmaintenance.name.charAt(0).toUpperCase() + userhealthmaintenance.name.slice(1)}
      </label>
    <input type="text" value={this.state.note} placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})} />
    <button type="button" onClick={() => this.handleRemoveHealthMaintenance(userhealthmaintenance.id)} className="small"> Remove from History</button>
    <button type="button" onClick={() => this.handleUpdateImmunization(userhealthmaintenance.id)} className="small"> Update</button>
      </form>
    );
  }
}
export default UserHealthMaintenanceList;
