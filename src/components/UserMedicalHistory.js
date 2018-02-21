import React, { Component } from 'react';
import {removeMedicalHistory, updateMedicalHistory} from '../utils/requests';
import '../styles/UserCurrentCard.css';


class UserMedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    note: '',
    // usermedicalhistories: [{name: ' '}],
    };

this.handleUpdateMedicalHistory = this.handleUpdateMedicalHistory.bind(this)
this.handleRemoveMedicalHistory = this.handleRemoveMedicalHistory.bind(this);
  }
 handleRemoveMedicalHistory = (medical_history_id) => {
  const user_id = 1;
  removeMedicalHistory(user_id, medical_history_id)
  }

handleUpdateMedicalHistory= (medical_history_id) => {
const user_id = 1;
const note = this.state.note
  updateMedicalHistory(note, user_id, medical_history_id)

}

  handleSubmit(event) {
    alert('A note was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let usermedicalhistory = this.props.usermedicalhistory;
    return (
      <form onSubmit={this.handleSubmit}>
      <label  className="user-card">
      {usermedicalhistory.name.charAt(0).toUpperCase() + usermedicalhistory.name.slice(1)}
      </label>
    <input type="text" value={this.state.note} placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})} />
    <button type="button" onClick={() => this.handleRemoveMedicalHistory(usermedicalhistory.id)} className="small"> Remove from History</button>
    <button type="button" onClick={() => this.handleUpdateMedicalHistory(usermedicalhistory.id)} className="small"> Update</button>
      </form>
    );
  }
}
export default UserMedicalHistory;
