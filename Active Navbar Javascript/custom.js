let selectItem = document.querySelectorAll("a");

let locationTarget = location.href;

for (let i = 0; i < selectItem.length; i++) {
    if (selectItem[i].href === locationTarget) {
        selectItem[i].className = "active";
    }
}
