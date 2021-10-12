// Copyright Current Year

var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;")
    cursor.classList.remove("hidden");
});

document.addEventListener('click', () => {
    cursor.classList.add("cursorClick");

    setTimeout(() => {
        cursor.classList.remove("cursorClick");
    }, 1250)
});