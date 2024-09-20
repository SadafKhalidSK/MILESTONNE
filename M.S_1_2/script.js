var toogle_button = document.getElementById("toogle_button");
var skill = document.getElementById("SKILL");
toogle_button.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
