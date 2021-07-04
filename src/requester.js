const url = "https://localhost/plantz"

function request(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = resolve
    xhr.onerror = reject
    xhr.send()
  })
}

function requestObject(url, object) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.onload = resolve
    xhr.onerror = reject
    xhr.send(JSON.stringify(object))
  })
}

export function getPlantList(callback){  
  request('GET', `${url}/wp-json/api/plant`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getVerifyStack(callback){  
  request('GET', `${url}/wp-json/api/verifystack`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getOneUser(callback, id){  
  request('GET', `${url}/wp-json/api/user/${id}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function refreshUser(callback, id){  
  request('GET', `${url}/wp-json/api/refreshuser/${id}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getOnePlant(callback, id){  
  request('GET', `${url}/wp-json/api/plant/${id}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function loginOrCreateUser(callback, googleKey, username, imageUrl){  
  request('GET', `${url}/wp-json/api/user/${googleKey}/${username}?imageurl=${imageUrl}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function updateUserAddFavorite(userId, plantId){  
  request('GET', `${url}/wp-json/api/addfav/${userId}/${plantId}`)
}

export function updateUserDeleteFavorite(userId, plantId){  
  request('GET', `${url}/wp-json/api/delfav/${userId}/${plantId}`)
}

export function sendNewPlant(plantData){  
  requestObject(`${url}/wp-json/api/newplant`, plantData)
  console.log(plantData)
}

export function deletePost(postId){  
  request('GET', `${url}/wp-json/api/delete/${postId}`)
}

export function acceptPlant(postId){  
  request('GET', `${url}/wp-json/api/transferplant/${postId}`)
}

export function getUsers(callback){  
  request('GET', `${url}/wp-json/api/user`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}