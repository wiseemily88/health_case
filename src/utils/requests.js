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
module.exports ={
  getMedicalHistory,
}
