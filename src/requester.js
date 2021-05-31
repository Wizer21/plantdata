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
  request('GET', `https://localhost/wp-site/wp-json/api/plant`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getVerifyStack(callback){  
  request('GET', `https://localhost/wp-site/wp-json/api/verifystack`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getOneUser(callback, id){  
  request('GET', `https://localhost/wp-site/wp-json/api/user/${id}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function getOnePlant(callback, id){  
  request('GET', `https://localhost/wp-site/wp-json/api/plant/${id}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function loginOrCreateUser(callback, googleKey, username, imageUrl){  
  request('GET', `https://localhost/wp-site/wp-json/api/user/${googleKey}/${username}?imageurl=${imageUrl}`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}

export function updateUserAddFavorite(userId, plantId){  
  request('GET', `https://localhost/wp-site/wp-json/api/addfav/${userId}/${plantId}`)
}

export function updateUserDeleteFavorite(userId, plantId){  
  request('GET', `https://localhost/wp-site/wp-json/api/delfav/${userId}/${plantId}`)
}

export function sendNewPlant(plantData){  
  requestObject('https://localhost/wp-site/wp-json/api/newplant', plantData)
  console.log(plantData)
}

export function deletePost(postId){  
  request('GET', `https://localhost/wp-site/wp-json/api/delete/${postId}`)
}

export function acceptPlant(postId){  
  request('GET', `https://localhost/wp-site/wp-json/api/transferplant/${postId}`)
}

export function getUsers(callback){  
  request('GET', `https://localhost/wp-site/wp-json/api/user`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  })
}