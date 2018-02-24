import React, { Component } from 'react';
import MedicalHistory from './MedicalHistory';
import Immunization from './Immunization';
import {getMedicalHistory, getUserMedicalHistory, getImmunizationHistory, getUserImmunizations } from '../utils/requests';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        medicalhistories: [],
        usermedicalhistories: [],
        immunizations:[],
        userimmunizations: [],
      }

      this.addUserMedicalHistory = this.addUserMedicalHistory.bind(this);
    }
  addUserMedicalHistory = (name) => {
    this.setState({usermedicalhistories: [...this.state.usermedicalhistories, name]  })
  }
    componentDidMount(){
      getMedicalHistory()
      .then((medicalhistories) => this.setState({ medicalhistories: medicalhistories }))
      .catch((error) => console.error({error}));

    this.getCurrentMedicalHistory();

      getImmunizationHistory()
      .then((immunizations) => this.setState({ immunizations: immunizations }))
      .catch((error) => console.error({error}));

      getUserImmunizations()

      .then((userimmunizations) => this.setState({ userimmunizations: userimmunizations }))
      .catch((error) => console.error({error}));
    }

  getCurrentMedicalHistory= () => {
    getUserMedicalHistory()
  .then((usermedicalhistories) => this.setState({ usermedicalhistories: usermedicalhistories }))
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
          <Immunization
            immunizations ={this.state.immunizations}
            userimmunizations ={this.state.userimmunizations}
          />
      </div>
    );
  }
}
App.displayName = 'App';
export default App;
