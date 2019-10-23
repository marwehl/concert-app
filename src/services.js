export function getConcerts() {
  return fetchConcerts()
}

export function postConcert(data) {
  return fetchConcerts({ method: 'POST', data })
}

export function patchConcert(id, data) {
  return fetchConcerts({ method: 'PATCH', id, data })
}

export function deleteConcert(id) {
  return fetchConcerts({method: 'DELETE', id})
}

function fetchConcerts({ method = 'GET', id = '', data } = {}) {
  return fetch('/concerts/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function getUsers() {
  return fetchUsers()
}

export function getSingleUser(id) {
  return fetchUsers({id})
}

export function postUser(data) {
  return fetchUsers({ method: 'POST', data })
}

export function patchUser(id, data) {
  return fetchUsers({ method: 'PATCH', id, data })
}

export function deleteUser(id) {
  return fetchUsers({method: 'DELETE', id})
}

function fetchUsers({ method = 'GET', id = '', data } = {}) {
  return fetch('/users/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}


