import React, { Component } from 'react';
import {addSurgicalHistory} from '../utils/requests';
import'../styles/UserForm.css';

class SurgicalHistoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      location: '',
      date: '',
      phyiscian: '',
    }
}
 updateSurgicalHistoryInfo = (key, event) => {
    this.setState({ [key]: event.target.value })
  }
addNewSurgicalHistory = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const location = this.state.location;
    const date = this.state.date;
    const phyiscian = this.state.phyiscian;
    const userId = 1;
    const currentUserSurgicalHistory = this.props.addUserSurgicalHistory;

    addSurgicalHistory(userId, name, location, date, phyiscian)
    .then((response) => {
      currentUserSurgicalHistory({ id: response.data.id, name: response.data.name, location: response.data.location, date: response.data.date, phyiscian: response.data.phyiscian})
    })
  }


render() {
    return (
    <div className="user-form">
      <h3> Please list any surgeries</h3>
      <form className="add-form">
        <label>
          Name:
          <input className= 'input'
          type="text"
          value={this.state.name}
          placeholder="Add the Name"
          onChange={ this.updateSurgicalHistoryInfo.bind(this, 'name') }
          />
        </label>
      <br />
    <label>
      Location:
      <input className= 'input'
        type="text"
        value={this.state.location}
        placeholder="Add location of event"
        onChange={ this.updateSurgicalHistoryInfo.bind(this, 'location') }
        />
    </label>
      <br />
    <label>
      Date:
      <input className= 'input'
      type="date"
      value={this.state.date}
      placeholder="please add approximate date"
      onChange={ this.updateSurgicalHistoryInfo.bind(this, 'date') }
      />
    </label>
    <label>
      Phyiscian:
      <input className= 'input'
      type="text"
      value={this.state.phyiscian}
      placeholder="please add provider's name who performend the procedure"
      onChange={ this.updateSurgicalHistoryInfo.bind(this, 'phyiscian') }
      />
    </label>
      <br />
        <button
            className="add-btn"
            onClick={this.addNewSurgicalHistory}
          > Update Surgical History
        </button>
      </form>
</div>
    );
  }
}


export default SurgicalHistoryForm;
