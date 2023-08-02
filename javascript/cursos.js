
function createCursos() {

    fetch("../jsons/cursos.json")
    .then(res => res.json())
    .then(res =>{
        res.map((curso) => {
            document.querySelector(".slide").innerHTML += `
            <a href="${curso.link}" target="_blank" class="curso">
                <p>${curso.instituicao}</p>
                <p class="bold">${curso.materia}</p>
                <div>
                        <p>${curso.ano}</p>
                        <p>${curso.cargaHoraria}hrs</p>
                </div>
            </a>
            `
        
        });
    })
}

export default createCursos;


