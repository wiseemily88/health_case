import React, { Component } from 'react';
import '../styles/UserCurrentCard.css';


class UserMedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {note: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
      {usermedicalhistory.name}
      </label>
    <input type="text" value={this.state.value} placeholder="Add a Note" onChange={this.handleChange} />
    <input type="submit" value="Update" />
  <input type="submit" value="Remove from History" />

      </form>
    );
  }
}
export default UserMedicalHistory;
