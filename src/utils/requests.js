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
const getUserFamilyHistory= () => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/1/family_histories`)
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

const updateImmunization =(note, userId, immunizationId) => {
  return fetch(`https://gentle-citadel-13422.herokuapp.com/api/v1/users/` + userId + `/immunizations/` + immunizationId, patchHeaders(note))
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
}
