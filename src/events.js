
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
                    doSaveFile()
                }
                break;
            case 78:
                newFile();
                break;
            case 68:
                autograph.toggleDisplay();
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