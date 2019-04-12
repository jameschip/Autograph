let Remarkable = require('remarkable');

class Docket {

    constructor() {
        this.updateTimer;
        this.input = document.getElementById("input-area");
        this.render = document.getElementById("render");
        this.md = new Remarkable({
            breaks: true,
            typographer: true
        });
        this.input.oninput = () => {
            clearTimeout(this.updateTimer);
            this.updateTimer = setTimeout(() => {
                this.render.innerHTML = this.md.render(this.input.value);
            }, 200);
        };
    }

    setContent(content) {
        this.input.value = content;
        this.render.innerHTML = this.md.render(document.getElementById("input-area").value);
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
        } 
    }

}