
let links = document.querySelectorAll(".close");

links.forEach(function (link) {
    link.addEventListener("click", function (e) {

        e.preventDefault();
        let x = document.querySelector(".actions");
        x.classList.remove("actions")



        setTimeout(() => {
            location.href = "./index2.html";
        }, 1000);

        return false;
    })
})

