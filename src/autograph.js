let Remarkable = require('remarkable');

class Autograph {

    
    constructor() {
        this.updateTimer;
        this.content_check = "";
        this.is_edit = false;
        this.input = document.getElementById("input-area");
        this.render = document.getElementById("render");
        this.filebar = document.getElementById("fname");
        this.statbar = document.getElementById("stat");
        
        this.md = new Remarkable({
            breaks: true,
            typographer: true
        });
        this.input.oninput = () => {
            clearTimeout(this.updateTimer);
            this.updateTimer = setTimeout(() => {
                this.render.innerHTML = this.md.render(this.input.value);
                this.fillTopBar();
                if (this.is_edit == false && this.input.value !== this.content_check) {
                    this.is_edit = true
                    console.log("is edited")
                }
            }, 200);
        };
    }

    toggleDisplay() {
        if (this.render.style.display === "block") {
            this.render.style.display = "none";
            document.getElementById("editor").style.width = "100%";
        }
        else {
            this.render.style.display = "block";
            document.getElementById("editor").style.width = "50%";
        } 
    }

    setContent(content) {
        this.is_edit = false;
        this.content_check = content;
        this.input.value = content;
        this.render.innerHTML = this.md.render(document.getElementById("input-area").value);
        this.fillTopBar();
    }

    fillTopBar() {
        this.filebar.innerHTML = "> " + localStorage.getItem(aut_file);
        var words = this.input.value.match(/\b\w+\b/g);
        if (this.input.value == '') {
            this.statbar.innerHTML = "c:" + 0 + " w:" + 0;
        } else {
            this.statbar.innerHTML = "c:" + this.input.value.length + " w:" + words.length;
        }
    }

    getContent() {
        return this.input.value;
    }

    gotoNextHeading() {
        let start = this.input.selectionStart;
        let content = this.input.value;
        var s1 = content.substring(start, content.length - 1);
        var s2 = s1.substring(s1.indexOf("\n"), s1.length)
        let regex = /(#{1,} .*)/
        let match = regex.exec(s2);
        if (match) {
            let pos = (s1.length - s2.length) + start + match.index;
            this.input.selectionStart = pos;
            this.input.selectionEnd = pos;
            this.input.blur();
            this.input.focus();
        } 
    }

    gotoPrevHeading() {
        let start = this.input.selectionStart;
        let s1 = this.input.value.substring(0, start);
        var regex = /(#{1,} .*)/g
        var matches = [];
        var match;
        do {
            match = regex.exec(s1);
            if (match)
                matches.push(match);
        } while (match);
        console.log(matches,length)
        if (matches.length > 0) {
            this.input.selectionStart = matches[matches.length - 1].index;
            this.input.selectionEnd = matches[matches.length - 1].index;
            this.input.blur();
            this.input.focus();
        } 
    }

    newEmptyEditor() {
        localStorage.setItem(aut_file, "");
        this.setContent(""); 
    }

    clearEditFlag() {
        this.is_edit = false;
        this.content_check = this.input.value;
        this.fillTopBar();
    }

    hasEdits() {
        return this.is_edit;
    }

}