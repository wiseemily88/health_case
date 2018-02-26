import React, { Component } from 'react';
import {removeSurgicalHistory} from '../utils/requests';
import '../styles/UserCurrentCard.css';


class UserSurgicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    location: '',
    date: '',
    phyiscian: '',
    };

  }
 handleRemoveSurgicalHistory = (surgical_history_id) => {
  const user_id = 1;
  removeSurgicalHistory(user_id, surgical_history_id)
  .then(() => this.props.getCurrentSurgicalHistories() )
  }

  render() {
    let usersurgicalhistory = this.props.usersurgicalhistory;
    return (
      <form onSubmit={this.handleSubmit}>
      <label  className="user-card">
      {usersurgicalhistory.name.charAt(0).toUpperCase() + usersurgicalhistory.name.slice(1)}
      </label>
      <p className="user-note"> {usersurgicalhistory.date} </p>
      <p className="user-note"> {usersurgicalhistory.location} </p>
      <p className="user-note"> {usersurgicalhistory.phyiscian} </p>
    <button type="button" onClick={() => this.handleRemoveSurgicalHistory(usersurgicalhistory.id)} className="small"> Remove from History</button>
      </form>
    );
  }
}
export default UserSurgicalHistory;
