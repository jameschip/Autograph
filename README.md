# Autograph

A small markdown editor that is keyboard driven. If follows githubs markdown style.

![Screen shot of editor in action](https://raw.githubusercontent.com/jameschip/Autograph/master/screenshot.png "Screen shot")

The editor has 2 editing modes. **Dual display** mode where the editor and preview are side by side. As you type into the editor your changes are updated in the preview. As sometimes while writing a constantly updating preview can be distracting so there is also a **single display** mode. In **single display** only either the editor or the preview will be shown and can be swapped between using the **tab** key.

### Keyboard control

* **meta+o** -> Open.
* **meta+n** -> New file.
* **meta+s** -> Save.
* **meta+S** -> Save as.
* **meta+>** -> Cursor to next heading.
* **meta+<** -> Cursor to previous heading.
* **meta+d** -> Toggle dual display mode.
* **tab** -> in single edit mode this key will change between edit or preview.

### Libs used

[Ecosystem Themes](https://github.com/hundredrabbits/Themes) engine by [Hundred rabits](https://100r.co/). Download a theme file and drag it onto the window to apply the theme.

[Remarkable](https://github.com/jonschlinkert/remarkable) markdown parser.


### Build and run

Clone with 
```
git clone https://github.com/jameschip/Autograph.git
```
Then do
```
npm install
```
and run with
```
npm start
```