export function PostData(userData) {
    // let BaseURL = 'https://api.thewallscript.com/restful/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    let BaseURL = 'http://localhost/backend-app/login.php';

    return new Promise((resolve, reject) =>{
    fetch(BaseURL, {
        method: 'POST',
        // body: userData 
        body: JSON.stringify(userData)
        // body: Object.assign({}, userData)
        // body: JSON.stringify(Object.assign({}, userData))
    }) 
    // console.log(userData);
    // console.log(JSON.stringify(userData));
    // console.log(Object.assign({}, userData));
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}