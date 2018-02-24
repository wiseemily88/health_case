import React from 'react';
import ImmunizationForm from './ImmunizationForm';
import UserImmunizationList from './UserImmunizationList';
import '../styles/Containers.css';

const createUserImmunizationList = (userimmunizations) => {
  return userimmunizations.map((userimmunization) => {
    return(
      <UserImmunization
      key = {userimmunization.id}
      Usermmunization = {userimmunization}
      />
    )}
  )}

const times = n => f => {
  let iter = i => {
    if (i === n) return
    f (i)
    iter (i + 1)
  }
  return iter (0)
}

const createImmunizationForm = (immunizations) => {
  return times(6) ( i =>
      <ImmunizationForm
      immunizations = {immunizations}
      />
    )
  }

  const Immunization = (props) => {
    const immunizations = props.immunizations;
    return (
      <div className='container'>
        {createImmunizationForm(immunizations)}
        <div className='user-list'>
          <h3> Current Immunization Records </h3>
        {createUserImmunizationList(userimmunizations)}
        </div>
    </div>
    )
  }


export default Immunization;
