import React, { Component } from 'react';
import MedicalHistory from './MedicalHistory';
import {getMedicalHistory, getUserMedicalHistory} from '../utils/requests';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        medicalhistories: [],
        usermedicalhistories: []
      }
    }
    componentDidMount(){
      getMedicalHistory()
      .then((medicalhistories) => this.setState({ medicalhistories: medicalhistories }))
      .catch((error) => console.error({error}));

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
          />
      </div>
    );
  }
}

export default App;
