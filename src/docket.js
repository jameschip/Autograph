let Remarkable = require('remarkable');

class Docket {
    
    constructor() {
        this.updateTimer;
        this.md = new Remarkable({breaks: true,
            typographer:  true});
        document.getElementById("input-area").oninput = () => {
            clearTimeout(this.updateTimer);
            this.updateTimer = setTimeout(() => {
                document.getElementById("render").innerHTML = this.md.render(document.getElementById("input-area").value);
                saveFile(localStorage.getItem("docket_file"), document.getElementById("input-area").value);
            }, 200);
        };
    }

    init() {
        let content = readFile(localStorage.getItem("docket_file"));
        document.getElementById("input-area").value = content;
        document.getElementById("render").innerHTML = this.md.render(document.getElementById("input-area").value);
    }
    
}