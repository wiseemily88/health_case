import React, { Component } from 'react';
import {addFamilyHistory} from '../utils/requests';
import'../styles/UserForm.css';

class FamilyHistoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkedIds: [],
  }
this.handleInputChange = this.handleInputChange.bind(this);
 this.addNewFamilyHistory = this.addNewFamilyHistory.bind(this);
}
handleInputChange(event) {

    const target = event.target;
    const name = target.name;

let newCheckedIds;
if (this.state.checkedIds.indexOf(name) === -1) {
  newCheckedIds = [...this.state.checkedIds, name];
} else {
  newCheckedIds=this.state.checkedIds.filter(id => id !== name)
}
    this.setState({
      checkedIds: newCheckedIds
    });
  }

  addNewFamilyHistory = (event) => {
    event.preventDefault();
    const user_id = 1;
    const family_history_ids = this.state.checkedIds;
    const current_ids = this.props.userfamilyhistories.map(familyhistory => familyhistory.id);
    const currentUserFamilyHistory = this.props.addUserFamilyHistory

  family_history_ids.forEach(function(family_history_id) {
      if (current_ids.indexOf(parseInt(family_history_id)) === -1) {
        addFamilyHistory(user_id, family_history_id)
        .then((response) => {
        currentUserFamilyHistory({ id: response.data.id, name: response.data.name})
      });
    }
  })
}

 createFamilyHistoryLabels = (familyhistories) => {
  return familyhistories.map((familyhistory) => {
  return(
      <label key = {familyhistory.id}  className="form-lbl">
        {familyhistory.name.charAt(0).toUpperCase() + familyhistory.name.slice(1)}
        <input
          className="input"
          name= {familyhistory.id}
          type="checkbox"
          onChange={this.handleInputChange} />
      </label>
      )
  })
}

render() {
    return (
    <div className="user-form">
      <h3> Family History</h3>
        <h5> Check any of the diseases that run in your family and please note who had it: </h5>
      <form className="add-form">
          {this.createFamilyHistoryLabels(this.props.familyhistories)}
        <br />
        <button
            className="add-btn"
            onClick={this.addNewFamilyHistory}
          > Update Family History
        </button>
      </form>
</div>
    );
  }
}


export default FamilyHistoryForm;
