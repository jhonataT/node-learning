const sum = (x, cb) => {
    return setTimeout(() => {
        return cb(null, x + 500); // Chamando um callback function depois de 3s.
    }, 3000);
};

sum(200, (err, res) => {
    if(err) throw err;
    console.log(`Sum = ${res}`);
})