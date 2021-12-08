// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Toast
const show_toast = (boolean) => {
    let toast = new bootstrap.Toast(document.getElementById('like-toast'));
    let message_body = document.getElementById('like-toast-body');
    let message = "I <span class='fw-bold text-success'>like</span> this post!";
    
    if (!boolean) {
        message = "I <span class='fw-bold text-danger'>don't like</span> this post!";
    }
    
    message_body.innerHTML = message;
    toast.show();
}

// Back to top
const back_to_top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Like
const like_post = (elemento) => {
    let ci = 'btn-outline-danger';
    let cih = 'btn-danger';
    
    let t = (elemento.classList.contains(ci)) ? cih : ci;
    
    elemento.classList.remove(ci);
    elemento.classList.remove(cih);
    elemento.classList.add(t);

    show_toast(((t == ci) ? false : true));
    
    return false;
}