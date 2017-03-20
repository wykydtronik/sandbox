var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;

function changeIt() {
    containerEl.removeChild(removeEl);
}
