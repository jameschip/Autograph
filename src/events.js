
document.onkeydown = function keyDown(e) {

    if (e.keyCode === 9) {
        e.preventDefault();
    }

    if (e.metaKey || e.ctrlKey) {
        console.log("key code  " + e.keyCode )
        switch (e.keyCode) {
            case 79:
                openFile();
                break;
            case 83:
                if (e.shiftKey) {
                    saveFileAs();
                } else {
                    saveFile(localStorage.getItem("docket_file"), docket.getContent());
                }
                break;
        }

    }
}