function request(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  })
}

export function getPlantList(callback){  
  request('GET', `https://localhost/wp-site/wp-json/api/plant`)
  .then(function (e) {
    callback(JSON.parse(e.target.response))
  }) 
}

export function getOnePost(callback, id){  
  request('GET', `https://localhost/wp-site/wp-json/api/post/${id}`)
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