export function getConcerts() {
  return fetchConcerts()
}

export function postConcert(data) {
  return fetchConcerts({ method: 'POST', data })
}

export function patchConcert(id, data) {
  return fetchConcerts({ method: 'PATCH', id, data })
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