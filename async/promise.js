const sum = (x) => {
    return new Promise( (resolve, reject) => {
        setInterval( () => {
            resolve(x + 500);
        }, 3000);
    })
}

sum(400).then( (res) => {
    console.log(res);
})