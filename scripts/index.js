//Get the button
let btn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});