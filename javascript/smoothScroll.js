
function smoothScroll() {
    const menuItens = document.querySelectorAll('.menu-top a[href^="#"]')

    menuItens.forEach((item) => {
        item.addEventListener('click',(event) => {
            event.preventDefault()
            const conteudo = document.querySelector(event.target.getAttribute('href')).offsetTop
            window.scroll({
                top: conteudo,
                behavior: "smooth"
            })
        })
    })
}

export default smoothScroll;
