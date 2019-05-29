
document.onkeydown = function keyDown(e) {

    if (e.keyCode === 9) {
        autograph.toggleSingleDisplay();
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
                    doSaveFile()
                }
                break;
            case 78:
                newFile();
                break;
            case 69:
                exportPDF()
                break;
            case 68:
                autograph.toggleDualDisplay();
                break;
            case 190:
                autograph.gotoNextHeading();
                break;
            case 188:
                autograph.gotoPrevHeading();
                break;
        }

    }
}