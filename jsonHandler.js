const fs = require('fs');

function writeObjectAsFile(path, object) {
    const outputFilePath = path;

    fs.writeFile(outputFilePath, JSON.stringify(object, null, 4), 'utf8', () => {
        console.log(`Data written to ${outputFilePath} as JSON.`);
    });
}

function readFileAsObject(path) {
    let content = fs.readFileSync(path);
    let result = JSON.parse(content);
    console.log(result);
}

module.exports = {
    writeObjectAsFile,
    readFileAsObject
}