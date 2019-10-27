export function getConcerts() {
  return fetchData({ path: "/concerts/" });
}

export function postConcert(data) {
  return fetchData({path: '/concerts/', method: 'POST', data })
}

export function patchConcert(id, data) {
  return fetchData({path: '/concerts/', method: 'PATCH', id, data })
}

export function deleteConcert(id) {
  return fetchData({path: '/concerts/', method: 'DELETE', id})
}

export function getSingleUser(id) {
  return fetchData({path: '/users/', id})
}

export function patchUser(id, data) {
  return fetchData({path: '/users/', method: 'PATCH', id, data })
}

function fetchData({ path, method = "GET", id = "", data } = {}) {
  return fetch(path + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json());
}




