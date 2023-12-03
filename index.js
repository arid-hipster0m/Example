// JavaScript Promise Example
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { result: 'Data received' };
            resolve(data);
        }, 2000);
    });
}

fetchData().then(result => {
    console.log(result);
});
