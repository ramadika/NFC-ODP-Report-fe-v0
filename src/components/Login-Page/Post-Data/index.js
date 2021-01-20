export function PostData(userData) {
    let BaseURL = 'http://localhost/backend-app/login.php';

    return new Promise((resolve, reject) =>{
    fetch(BaseURL, {
        method: 'POST',
        body: JSON.stringify(userData)
    }) 
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}