
function seletorColors() {

    //ATENÇÃO: Melhorar esta logica !!!!
    const bodyThema = document.querySelector("#bodyColor")
    const el = event.target || event.srcElement;
    const id = el.id;

    document.querySelectorAll("input").forEach(function (input) {
        input.addEventListener("click", function (event) { });

    });

    if (id == 'neon') {
        bodyThema.className = ''
        bodyThema.classList.add('neon')

    }
    else if (id == 'pastel') {
        bodyThema.className = ''
        bodyThema.classList.add('pastel')
    }
    else if (id == 'vintage') {
        bodyThema.className = ''
        bodyThema.classList.add('vintage')
    }
        else if (id == 'dark') {
        bodyThema.className = ''
        bodyThema.classList.add('dark')
    }

}