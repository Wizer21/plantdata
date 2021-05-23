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