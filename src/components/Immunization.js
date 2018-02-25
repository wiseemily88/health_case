import React from 'react';
import ImmunizationForm from './ImmunizationForm';
import UserImmunizationList from './UserImmunizationList';
import '../styles/Containers.css';
import '../styles/UserCurrentList.css';

const createUserImmunizationList = (userimmunizations, getCurrentImmunizations) => {

  return userimmunizations.map((userimmunization) => {
    return(
      <UserImmunizationList
      key = {userimmunization.id}
      userimmunization = {userimmunization}
      getCurrentImmunizations = {getCurrentImmunizations}
      />
    )}
  )}

const createImmunizationForm = (immunizations, addImmunization) => {

  return immunizations.map((immunization) => {
    return(
      <ImmunizationForm
      key = {immunization.id}
      immunization = {immunization}
      immunizations = {immunizations}
      addImmunization = {addImmunization}
      />
    )}
  )}

  const Immunization = (props) => {
  const userimmunizations = props.userimmunizations;
  const immunizations = props.immunizations;
    return (
      <div className='container'>
      <div className='user-list'>
        <h3> Immunization Form </h3>
        {createImmunizationForm(immunizations, props.addImmunization)}
        </div>
        <div className='user-list'>
          <h3> Current Immunization Records </h3>
        {createUserImmunizationList(userimmunizations, props.getCurrentImmunizations)}
        </div>
    </div>
    )
  }


export default Immunization;
