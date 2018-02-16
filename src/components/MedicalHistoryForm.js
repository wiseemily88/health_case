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

render() {
    return (
      <form>
        <label>
          Yes, I have this condition:
          <input
            name="isChecked"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} />
        </label>
        <br />
      </form>
    );
  }
}


// const MedicalHistoryList = (props) => {
//   const medicalhistory = props.medicalhistory;
//   return(
//     <div className="medicalhistory-row">
//       <p className="medicalhistory-name">{medicalhistory.name} </p>
//     // need to add buttons
//     </div>
//   )
// }
export default MedicalHistoryForm;
