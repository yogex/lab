export const ApiClient = (path, opts = {}) => {
    const baseUrl = "https://jsonplaceholder.typicode.com"; 

    return fetch(`${baseUrl}${path}`, options).then(
        res => res.json();
    );
}