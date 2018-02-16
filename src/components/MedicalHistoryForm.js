import React, { Component } from 'react';

class MedicalHistoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    isChecked: false,
  }
 this.handleInputChange = this.handleInputChange.bind(this);
}
handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
 createMedicalHistoryLabels = () => {
  const medicalhistory = this.props.medicalhistory;
  return(
      <label>
        {medicalhistory.name}
        <input
          name="isChecked"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleInputChange} />
      </label>
  )
}

render() {
    return (
      <form>
          {this.createMedicalHistoryLabels()}
        <br />
      </form>
    );
  }
}



export default MedicalHistoryForm;
