import React, { Component } from 'react';
import {removePrescription, updatePrescription} from '../utils/requests';
import '../styles/UserCurrentCard.css';


class UserPrescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dosage: '',
    frequency: '',
    note: '',
    };

// this.handleUpdatePrescription = this.handleUpdatePrescription.bind(this)

  }
 handleRemovePrescription = (prescription_id) => {
  const user_id = 1;
  removePrescription(user_id, prescription_id)
  .then(() => this.props.getCurrentPrescriptions() )
  }

handleUpdatePrescriptiony= (prescription_id) => {
const user_id = 1;
const note = this.state.note
const dosage = this.state.dosage
const frequency = this.state.frequency
  updatePrescription(note, user_id, prescription_id)
  .then(() => this.props.getCurrentPrescriptions() )
}

  render() {
    let userprescription = this.props.userprescription;
    return (
      <form onSubmit={this.handleSubmit}>
      <label  className="user-card">
      {userprescription.name.charAt(0).toUpperCase() + userprescription.name.slice(1)}
      </label>
      <p className="user-note"> {userprescription.note} </p>
      <p className="user-note"> {userprescription.dosage} </p>
      <p className="user-note"> {userprescription.frequency} </p>
    <input type="text" value={this.state.note} placeholder="Add a Note" onChange={(e) => this.setState({note: e.target.value})} />
    <button type="button" onClick={() => this.handleRemovePrescription(userprescription.id)} className="small"> Remove from History</button>
    <button type="button" onClick={() => this.handleUpdatePrescriptiony(userprescription.id)} className="small"> Update</button>
      </form>
    );
  }
}
export default UserPrescription;
