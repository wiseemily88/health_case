import React from 'react';
import ImmunizationForm from './ImmunizationForm';
import UserImmunizationList from './UserImmunizationList';
import '../styles/Containers.css';

const createUserImmunizationList = (userimmunizations) => {

  return userimmunizations.map((userimmunization) => {
    return(
      <UserImmunizationList
      key = {userimmunization.id}
      userimmunization = {userimmunization}
      />
    )}
  )}

const createImmunizationForm = (immunizations) => {

  return immunizations.map((immunization) => {
    return(
      <ImmunizationForm
      key = {immunization.id}
      immunization = {immunization}
      immunizations = {immunizations}
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
        {createImmunizationForm(immunizations)}
        </div>
        <div className='user-list'>
          <h3> Current Immunization Records </h3>
        {createUserImmunizationList(userimmunizations)}
        </div>
    </div>
    )
  }


export default Immunization;
