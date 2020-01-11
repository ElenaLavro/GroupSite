function Albums(){
var bb = document.getElementsByClassName("but");
var i;

for (i = 0; i < bb.length; i++) {
    bb[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var bod = this.nextElementSibling;
        if (bod.style.display === "block") {
            bod.style.display = "none";
        } else {
            bod.style.display = "block";
        }
    });
}
};
