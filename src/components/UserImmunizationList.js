import React, { Component } from 'react';
import {removeImmunization, updateImmunization} from '../utils/requests';


class UserImmunizationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    note: '',
    };

this.handleUpdateMedicalHistory = this.handleUpdateImmunization.bind(this)
// this.handleRemoveMedicalHistory = this.handleRemoveMedicalHistory.bind(this);
  }
 handleRemoveImmunization = (immunization_id) => {
  const user_id = 1;
  removeImmunization(user_id, immunization_id)

  }

handleUpdateImmunization= (immunization_id) => {
const user_id = 1;
const note = this.state.note
  updateImmunization(note, user_id, immunization_id)

}

  handleSubmit(event) {
    alert('A note was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let userimmunization = this.props.Userimmunization;
    return (
      <form onSubmit={this.handleSubmit} data-id={userimmunization.id}>
      <label  className="user-card">
      {userimmunization.name.charAt(0).toUpperCase() + userimmunization.name.slice(1)}
      </label>
    <input type="text" value={this.state.note} placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})} />
    <button type="button" onClick={() => this.handleRemoveImmunization(userimmunization.id)} className="small"> Remove from History</button>
    <button type="button" onClick={() => this.handleUpdateImmunization(userimmunization.id)} className="small"> Update</button>
      </form>
    );
  }
}
export default UserImmunizationList;
