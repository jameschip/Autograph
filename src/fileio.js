const fs = require('fs');

function readFile(f_name) {
    let text;
    try {
        text = fs.readFileSync(f_name)
        localStorage.setItem("docket_file", f_name);
        return text;
    } catch (err)
    {
        console.warn(`Could not load world file`)
        return ";"
    }
    return "";
}

function saveFile(f_name, content) {
    try {
        fs.writeFileSync(f_name, content);
    } catch (err) {
        console.log('could not write to file');
    }
}