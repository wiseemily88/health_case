import React, { Component } from 'react';
import MedicalHistory from './MedicalHistory';
import Immunization from './Immunization';
import FamilyHistory from './FamilyHistory';
import {getMedicalHistory, getUserMedicalHistory, getImmunizationHistory, getUserImmunizations, getFamilyHistory, getUserFamilyHistory } from '../utils/requests';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        medicalhistories: [],
        usermedicalhistories: [],
        immunizations:[],
        userimmunizations: [],
        familyhistories: [],
        userfamilyhistories: [],
      }

      this.addUserMedicalHistory = this.addUserMedicalHistory.bind(this);
      this.addImmunization = this.addImmunization.bind(this);
    }
  addUserMedicalHistory = (name) => {
    this.setState({usermedicalhistories: [...this.state.usermedicalhistories, name]  })
  }
  addImmunization = (name) => {
  this.setState({userimmunizations: [...this.state.userimmunizations, name]  })
  }
  addFamilyHistory = (name) => {
  this.setState({userfamilyhistories: [...this.state.userfamilyhistories, name]  })
  }
    componentDidMount(){
      getMedicalHistory()
      .then((medicalhistories) => this.setState({ medicalhistories: medicalhistories }))
      .catch((error) => console.error({error}));

      getImmunizationHistory()
      .then((immunizations) => this.setState({ immunizations: immunizations }))
      .catch((error) => console.error({error}));

      getFamilyHistory()
      .then((familyhistories) => this.setState({ familyhistories: familyhistories }))
      .catch((error) => console.error({error}));


      this.getCurrentMedicalHistory();
      this.getCurrentFamilyHistory();
      this.getCurrentImmunizations();
    }
  getCurrentMedicalHistory= () => {
    getUserMedicalHistory()
  .then((usermedicalhistories) => this.setState({ usermedicalhistories: usermedicalhistories }))
  .catch((error) => console.error({error}));
}
  getCurrentImmunizations= () => {
    getUserImmunizations()
    .then((userimmunizations) => this.setState({ userimmunizations: userimmunizations }))
    .catch((error) => console.error({error}));
}
  getCurrentFamilyHistory= () => {
    getUserFamilyHistory()
    .then((userfamilyhistories) => this.setState({ userfamilyhistories: userfamilyhistories }))
    .catch((error) => console.error({error}));
}



  render() {
    return (
      <div className="App">
          <h1 className="App-title">Health Case</h1>
          <MedicalHistory
            medicalhistories = {this.state.medicalhistories}
            usermedicalhistories= {this.state.usermedicalhistories}
            addUserMedicalHistory={this.addUserMedicalHistory}
            getCurrentMedicalHistory={this.getCurrentMedicalHistory}
          />
          <FamilyHistory
            familyhistories = {this.state.familyhistories}
            userfamilyhistories ={this.state.userfamilyhistories}
            addFamilyHistory={this.addFamilyHistory}
            getCurrentFamilyHistory={this.getCurrentFamilyHistory}
          />
          <Immunization
            immunizations ={this.state.immunizations}
            userimmunizations ={this.state.userimmunizations}
            addImmunization={this.addImmunization}
            getCurrentImmunizations={this.getCurrentImmunizations}
          />


      </div>
    );
  }
}
App.displayName = 'App';
export default App;
