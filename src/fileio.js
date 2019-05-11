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
    } catch (err) {
        console.warn(`Could not load world file`)
        return ";"
    }
    return "";
}

function doSaveFile() {
    let f_name = localStorage.getItem(aut_file);
    if (f_name === undefined || f_name === "") {    // No file set
        saveFileAs();
        return;
    } else if (!fs.existsSync(f_name)) {   // File we are editing doth not exist
        saveFileAs();
    } else {
        saveFile(f_name, autograph.getContent());
    }
}

function saveFile(f_name, content) {
    try {
        fs.writeFileSync(f_name, content);
        localStorage.setItem(aut_file, f_name);
        autograph.clearEditFlag();
    } catch (err) {
        console.log('could not write to file');
    }
}

function openFile() {
    dialog.showOpenDialog({
        filters: [
            { name: 'All Files', extensions: ['*'] },
            { name: 'Markdown', extensions: ['md', 'markdown'] }]
    }, (f_name) => {
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
        autograph.clearEditFlag();
    })
}

function newFile() {
    if (dealWithEdits())
        autograph.newEmptyEditor();
}

function dealWithEdits() {
    if (autograph.hasEdits()) {
        let options = {
            buttons: ["save", "abandon", "cancel"],
            message: "Doncument has unsaved changes"
        }
        let opt = dialog.showMessageBox(options);
        if (opt == 0) {
        }
        switch (opt) {
            case 0:
                doSaveFile();
                return true;
            case 1:
                return true;
            default:
                return false
        }
    }
    return true;
}