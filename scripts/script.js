let collapsibleElements = document.getElementsByClassName("collapsibleButton");

for (let i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener("click", function () {
        this.classList.toggle("collapsibleActive");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}