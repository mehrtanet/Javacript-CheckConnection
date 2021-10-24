let el = document.createElement("div");
document.querySelector(".content").prepend(el);

window.addEventListener('online', (event) => {
    el.textContent = "online"
    el.className = "alert"
    el.classList.add("alert-success")

});

window.addEventListener('offline', (event) => {
    el.textContent = "offline"
    el.className = "alert"
    el.classList.add("alert-danger")
});