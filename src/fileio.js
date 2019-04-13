const fs = require('fs');
const { dialog } = require('electron').remote 

function readFile(f_name) {
    if (!fs.existsSync(f_name)) {   // File does not exist so dont open
        localStorage.setItem(aut_file, "");
        return "";
    } 
    let text;
    try {
        text = fs.readFileSync(f_name)
        localStorage.setItem(aut_file, f_name);
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
        localStorage.setItem(aut_file, f_name);
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
        autograph.setContent(content);
    });
}

function saveFileAs() {
    dialog.showSaveDialog((f_name) => {
        if (f_name === undefined) {
            dialog.showErrorBox("Could not save file!")
        }
        saveFile(f_name, autograph.getContent());
    }) 
}