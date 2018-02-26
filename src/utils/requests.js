const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getMedicalHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/medical_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const getHealthMaintenances = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/health_maintenances`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const getImmunizationHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/immunizations`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getFamilyHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/family_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getUserMedicalHistory = () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/medical_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getUserImmunizations= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/immunizations`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const getUserHealthMaintenance= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/health_maintenances`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const getUserFamilyHistory= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/family_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getUserPrescriptions= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/prescriptions`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getUserSurgicalHistories= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/surgical_histories`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const addMedicalHistory =( userId, medicalHistoryId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/medical_histories/` + medicalHistoryId , {
    method: 'POST',
    headers:
      { 'Content-Type': 'application/json' },
    })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addFamilyHistory =( userId, familyHistoryId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/family_histories/` + familyHistoryId , {
    method: 'POST',
    headers:
      { 'Content-Type': 'application/json' },
    })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addUserImmunization =( userId, immunizationId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/immunizations/` + immunizationId , {
    method: 'POST',
    headers:
      { 'Content-Type': 'application/json' },
    })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addUserHealthMaintenance =( userId, healthMaintenanceId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/health_maintenances/` + healthMaintenanceId , {
    method: 'POST',
    headers:
      { 'Content-Type': 'application/json' },
    })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addPrescription =( userId, prescriptionName, prescriptionDosage, prescriptionFrequency, prescriptionNote) => {
  let data ={ name: prescriptionName, dosage: prescriptionDosage, frequency: prescriptionFrequency, note: prescriptionNote}
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/prescriptions`, {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }));
  }
const addSurgicalHistory =( userId, surgeryName, surgeryLocation, surgeryDate, surgeryPhysician) => {
  let data ={ name: surgeryName, location: surgeryLocation, date: surgeryDate, phyiscian: surgeryPhysician}
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/surgical_histories`, {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }));
  }


const patchHeaders = (note) => {
  return {
    method: `PATCH`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({note: note})
  }
}
const updateFamilyHistory =(note, userId, familyHistoryId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/family_histories/` + familyHistoryId, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const removeFamilyHistory =(userId, familyHistoryId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/family_histories/` + familyHistoryId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updateMedicalHistory =(note, userId, medicalHistoryId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/medical_histories/` + medicalHistoryId, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const removeMedicalHistory =(userId, medicalHistoryId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/medical_histories/` + medicalHistoryId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const removePrescription =(userId, prescriptionId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/prescriptions/` + prescriptionId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const removeSurgicalHistory =(userId, surgicalHistoryId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/surgical_histories/` + surgicalHistoryId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updateImmunization =(note, userId, immunizationId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/immunizations/` + immunizationId, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updateHealthMaintenace =(note, userId, healthMaintenanceId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/health_maintenances/` + healthMaintenanceId, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const updatePrescription=(note, userId, prescriptionId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/prescriptions/` + prescriptionId, patchHeaders(note))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}
const removeImmunization =(userId, immunizationId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/immunizations/` + immunizationId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const removeHealthMaintenance =(userId, healthMaintenanceId) => {
return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/health_maintenances/` + healthMaintenanceId, {
  method: 'DELETE',
  headers:
    { 'Content-Type': 'application/json' },
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

module.exports ={
  getMedicalHistory,
  getUserMedicalHistory,
  addMedicalHistory,
  removeMedicalHistory,
  updateMedicalHistory,
  getImmunizationHistory,
  getUserImmunizations,
  updateImmunization,
  addUserImmunization,
  removeImmunization,
  getFamilyHistory,
  addFamilyHistory,
  getUserFamilyHistory,
  updateFamilyHistory,
  removeFamilyHistory,
  getUserPrescriptions,
  addPrescription,
  removePrescription,
  updatePrescription,
  getUserSurgicalHistories,
  addSurgicalHistory,
  removeSurgicalHistory,
  getHealthMaintenances,
  getUserHealthMaintenance,
  addUserHealthMaintenance,
  updateHealthMaintenace,
  removeHealthMaintenance,
}
