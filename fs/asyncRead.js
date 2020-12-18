const fs = require('fs').promises // node > 12, não precisamos utilizar o util;

const read = async () => {
    const data = await fs.readFile('file.txt', 'binary');
    return new Buffer.from(data);
}

try {
    read().then( data => console.log(data.toString()));
} catch (err) {
    console.log(err);
}