import React, { Component } from 'react';
import MedicalHistory from './MedicalHistory';
import Immunization from './Immunization';
import FamilyHistory from './FamilyHistory';
import Prescription from './Prescription';
import SurgicalHistory from './SurgicalHistory';
import HealthMaintenance from './HealthMaintenance';
import {getMedicalHistory,
        getUserMedicalHistory,
        getImmunizationHistory,
        getUserImmunizations,
        getFamilyHistory,
        getUserFamilyHistory,
        getUserPrescriptions,
        getUserSurgicalHistories,
        getHealthMaintenances,
        getUserHealthMaintenance,
      } from '../utils/requests';
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
        userprescriptions: [],
        usersurgicalhistories: [],
        healthmaintenances:[],
        userhealthmaintenances:[],
      }

      this.addUserMedicalHistory = this.addUserMedicalHistory.bind(this);
      this.addUserFamilyHistory = this.addUserFamilyHistory.bind(this);
      this.addImmunization = this.addImmunization.bind(this);
      this.addUserPrescription = this.addUserPrescription.bind(this);
      this.addUserSurgicalHistory = this.addUserPrescription.bind(this);
      this.addUserHealthMaintenance = this.addUserHealthMaintenance.bind(this);
    }
    addUserMedicalHistory = (name) => {
      this.setState({usermedicalhistories: [...this.state.usermedicalhistories, name]  })
    }
    addImmunization = (name) => {
    this.setState({userimmunizations: [...this.state.userimmunizations, name]  })
    }
    addUserFamilyHistory = (name) => {
    this.setState({userfamilyhistories: [...this.state.userfamilyhistories, name]  })
    }
    addUserPrescription = (name) => {
    this.setState({userprescriptions: [...this.state.userprescriptions, name]  })
    }
    addUserSurgicalHistory = (name) => {
    this.setState({usersurgicalhistories: [...this.state.usersurgicalhistories, name]  })
    }
    addUserHealthMaintenance = (name) => {
    this.setState({userhealthmaintenances: [...this.state.userhealthmaintenances, name]  })
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

      getHealthMaintenances()
      .then((healthmaintenances) => this.setState({ healthmaintenances: healthmaintenances }))
      .catch((error) => console.error({error}));


      this.getCurrentMedicalHistory();
      this.getCurrentFamilyHistory();
      this.getCurrentImmunizations();
      this.getCurrentPrescriptions();
      this.getCurrentSurgicalHistories();
      this.getCurrentHealthMaintenance();
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

  getCurrentHealthMaintenance= () => {
    getUserHealthMaintenance()
    .then((userhealthmaintenances) => this.setState({ userhealthmaintenances: userhealthmaintenances }))
    .catch((error) => console.error({error}));
}
  getCurrentFamilyHistory= () => {
    getUserFamilyHistory()
    .then((userfamilyhistories) => this.setState({ userfamilyhistories: userfamilyhistories }))
    .catch((error) => console.error({error}));
}

  getCurrentPrescriptions= () => {
    getUserPrescriptions()
    .then((userprescriptions) => this.setState({ userprescriptions: userprescriptions }))
    .catch((error) => console.error({error}));
}
  getCurrentSurgicalHistories= () => {
    getUserSurgicalHistories()
    .then((usersurgicalhistories) => this.setState({ usersurgicalhistories: usersurgicalhistories }))
    .catch((error) => console.error({error}));
}

  render() {
    return (
      <div className="App">
          <h1 className="App-title"> My HealthCase</h1>
          <MedicalHistory
            medicalhistories = {this.state.medicalhistories}
            usermedicalhistories= {this.state.usermedicalhistories}
            addUserMedicalHistory={this.addUserMedicalHistory}
            getCurrentMedicalHistory={this.getCurrentMedicalHistory}
          />
          <FamilyHistory
            familyhistories = {this.state.familyhistories}
            userfamilyhistories ={this.state.userfamilyhistories}
            addUserFamilyHistory={this.addUserFamilyHistory}
            getCurrentFamilyHistory={this.getCurrentFamilyHistory}
          />
          <Immunization
            immunizations ={this.state.immunizations}
            userimmunizations ={this.state.userimmunizations}
            addImmunization={this.addImmunization}
            getCurrentImmunizations={this.getCurrentImmunizations}
          />
          <Prescription
            userprescriptions ={this.state.userprescriptions}
            getCurrentPrescriptions={this.getCurrentPrescriptions}
            addUserPrescription={this.addUserPrescription}
          />
          <SurgicalHistory
            usersurgicalhistories ={this.state.usersurgicalhistories}
            getCurrentSurgicalHistories={this.getCurrentSurgicalHistories}
            addUserSurgicalHistory={this.addUserSurgicalHistory}
          />
          <HealthMaintenance
            healthmaintenances ={this.state.healthmaintenances}
            userhealthmaintenances ={this.state.userhealthmaintenances}
            addUserHealthMaintenance={this.addUserHealthMaintenance}
            getCurrentHealthMaintenance={this.getCurrentHealthMaintenance}
          />

      </div>
    );
  }
}
App.displayName = 'App';
export default App;
