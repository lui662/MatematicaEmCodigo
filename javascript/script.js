document
    .querySelector('a[href="#idNav-projetos"]')
    .addEventListener("click", function (event) {
        event.preventDefault();
        const evento = document.querySelector("#idNav-projetos");

        evento.scrollIntoView({
            behavior: "smooth",
        });
    });

document
    .querySelector('a[href="#minhaNavBar"]')
    .addEventListener("click", function (event) {
        event.preventDefault();
        const evento = document.querySelector("#minhaNavBar");

        evento.scrollIntoView({
            behavior: "smooth",
        });
    });
