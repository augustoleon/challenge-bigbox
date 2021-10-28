const url = 'https://json-biglifeapp.herokuapp.com/activity'

const getActivities = (page, limit) => {
  try {
    return fetch(`${url}?_page=${page}&_limit=${limit}`)
      .then((res) => res.json())
      .then((res) => res.map((data) => JSON.parse(data.activity)))
  } catch (err) {
    console.log(err)
    throw new Error('Something was wrong!')
  }
}

const getActivityById = (id) => {
  try {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => JSON.parse(data.activity))
  } catch (err) {
    console.log(err)
  }
}

export default {
  getActivities,
  getActivityById,
}
