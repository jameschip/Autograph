const fs = require('fs');
const { dialog } = require('electron').remote 

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

function openFile() {
    dialog.showOpenDialog({filters: [
        {name: 'Markdown', extensions: ['md', 'markdown']}]}, (f_name) => {
        if (f_name === undefined)
            return;
        let content = readFile(f_name[0]);
        docket.setContent(content);
    });
}