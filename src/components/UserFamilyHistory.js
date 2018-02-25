import React, { Component } from 'react';
import {removeFamilyHistory, updateFamilyHistory} from '../utils/requests';
import '../styles/UserCurrentCard.css';


class UserFamilyHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    note: '',
    // usermedicalhistories: [{name: ' '}],
    };

this.handleUpdateFamilyHistory = this.handleUpdateFamilyHistory.bind(this)
// this.handleRemoveMedicalHistory = this.handleRemoveMedicalHistory.bind(this);
  }
 handleRemoveFamilyHistory = (medical_history_id) => {
  const user_id = 1;
  removeFamilyHistory(user_id, medical_history_id)
  .then(() => this.props.getCurrentMedicalHistory() )
  }

handleUpdateFamilyHistory= (family_history_id) => {
const user_id = 1;
const note = this.state.note
  updateFamilyHistory(note, user_id, family_history_id)
  .then(() => this.props.getCurrentFamilyHistory() )
}

  handleSubmit(event) {
    alert('A note was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let userfamilyhistory = this.props.userfamilyhistory;
    return (
      <form onSubmit={this.handleSubmit} data-id={userfamilyhistory.id}>
      <label  className="user-card">
      {userfamilyhistory.name.charAt(0).toUpperCase() + userfamilyhistory.name.slice(1)}
      </label>
      <p className="user-note"> {userfamilyhistory.note} </p>
    <input type="text" value={this.state.note} placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})} />
    <button type="button" onClick={() => this.handleRemoveFamilyHistory(userfamilyhistory.id)} className="small"> Remove from History</button>
    <button type="button" onClick={() => this.handleUpdateFamilyHistory(userfamilyhistory.id)} className="small"> Update</button>
      </form>
    );
  }
}
export default UserFamilyHistory;
