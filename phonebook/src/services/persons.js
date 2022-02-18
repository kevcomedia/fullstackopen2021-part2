import axios from 'axios'

// TODO change back to /api/persons later
const baseUrl = '/persons'

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data)
}

const update = (id, updatedPerson) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPerson)
    .then((response) => response.data)
}

const _delete = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data)
}

export default { getAll, create, update, delete: _delete }
