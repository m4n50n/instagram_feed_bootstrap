// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Switch view
const switch_view = (view) => {
    // remove classess
    let classes = ["flex-row", "flex-column", "justify-content-between", "align-items-center", "row-cols-1"];
    let element = document.getElementById("portafolio");

    classes.forEach(function (value, index) {
        element.classList.remove(value);
    });

    // add classes
    switch (view) {
        case "grid":
            element.classList.add("justify-content-between");
        break;
        case "column":
            element.classList.add("flex-column");
            element.classList.add("align-items-center");
            element.classList.add("row-cols-1");
        break;
    }

    let items = document.getElementsByClassName("portafolio-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("portafolio-item-column");

        if (view == "column") {
            items[i].classList.add("portafolio-item-column");
        }
    }

    // show / hide img header / footer
    items = document.getElementsByClassName("items-description");
    items_footer = document.getElementsByClassName("items-description-footer");

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("style", "display: none !important");

        if (view == "column") {
            items[i].setAttribute("style", "display: flex !important");
        }
    }
    for (let i = 0; i < items_footer.length; i++) {
        items_footer[i].setAttribute("style", "display: none !important");

        if (view == "column") {
            items_footer[i].setAttribute("style", "display: block !important");
        }
    }
}

const back_to_top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}