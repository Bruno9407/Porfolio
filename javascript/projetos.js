import projetos from '../jsons/projetos.json' with { type: 'json' }

function createProjetos() {

    /*fetch("../jsons/projetos.json")
    .then(res => res.json())
    .then(res => {
        res.*/
    
        projetos.forEach(projeto => {
            document.querySelector(".projetos").innerHTML +=`
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
    //})
}


export default createProjetos;


