// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Back to top
const back_to_top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Like
const like_post = (elemento) => {
    let ci = "btn-outline-danger";
    let cih = "btn-danger";
    
    let t = (elemento.classList.contains(ci)) ? cih : ci;
    
    elemento.classList.remove(ci);
    elemento.classList.remove(cih);
    elemento.classList.add(t);
    
    return false;
}