import React from 'react';
import HealthMaintenanceForm from './HealthMaintenanceForm';
import UserHealthMaintenanceList from './UserHealthMaintenanceList';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';

const createHealthMaintenanceList = (userhealthmaintenances, getCurrentHealthMaintenance) => {

  return userhealthmaintenances.map((userhealthmaintenance) => {
    return(
      <UserHealthMaintenanceList
      key = {userhealthmaintenance.id}
      userhealthmaintenance = {userhealthmaintenance}
      getCurrentHealthMaintenance = {getCurrentHealthMaintenance}
      />
    )}
  )}

const createHealthMaintenanceForm = (healthmaintenances, addUserHealthMaintenance) => {

  return healthmaintenances.map((healthmaintenance) => {
    return(
      <HealthMaintenanceForm
      key = {healthmaintenance.id}
      healthmaintenance = {healthmaintenance}
      healthmaintenances = {healthmaintenances}
      addUserHealthMaintenance = {addUserHealthMaintenance}
      />
    )}
  )}

  const HealthMaintenance = (props) => {
  const userhealthmaintenances = props.userhealthmaintenances;
  const healthmaintenances = props.healthmaintenances;
    return (
      <div className='container'>
      <div className='user-list'>
        <h3> Health Maintenance Form </h3>
        {createHealthMaintenanceForm(healthmaintenances, props.addUserHealthMaintenance)}
        </div>
        <div className='user-list'>
          <h3> Current Health Maintenance Records </h3>
        {createHealthMaintenanceList(userhealthmaintenances, props.getCurrentHealthMaintenance)}
        </div>
    </div>
    )
  }


export default HealthMaintenance;
