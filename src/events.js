
document.onkeydown = function keyDown(e) {

    if (e.keyCode === 9) {
        e.preventDefault();
    }

    if (e.metaKey || e.ctrlKey) {
        // console.log("key code  " + e.keyCode )
        switch (e.keyCode) {
            case 79:
                openFile();
                break;
            case 83:
                if (e.shiftKey) {
                    saveFileAs();
                } else {
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
                break;
            case 190:
                autograph.gotoNextHeading();
                break;
            case 188:
                autograph.gotoPrevHeading();
        }

    }
}