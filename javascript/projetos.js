
function createProjetos() {
    const area = document.querySelector(".projetos")

    fetch("../jsons/projetos.json")
    .then(res => res.json())
    .then(res => {
        res.forEach(projeto => {
            area.innerHTML +=`
            <a href="${projeto.link}" class="projeto">
                    <div style="background-image: url('${projeto.imagem}')" class="bgimg"></div>
                    <div class="descricao">
                        <h3 class="whitetext bold midtxt">${projeto.nome}</h3>
                        <p class="whitetext">${projeto.descricao}</p>
                        <ul class="proj${projeto.id} txtesquerda">
                    `
                        projeto.tecnologias.forEach(tech => {
                            let list = ".proj" + projeto.id
                            
                            document.querySelector(list).innerHTML +=`
                                <li class="whitetext tech">${tech}</li>
                            `
                        })             
        });
    })
}


export default createProjetos;


