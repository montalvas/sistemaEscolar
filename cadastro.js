window.onload = () => {
    let alunos = [];
    let cat = document.getElementById('categoria');
    let grau = document.getElementById('grau');
    cat.addEventListener('change', () => {
        grau.innerHTML = '';
        let i = 1;
        let categoria = cat.options[cat.selectedIndex].text;
        if (categoria === 'Fundamental') {
            for (i; i <= 8; i++) {
                grau.innerHTML += `<option>${i}ª Série</option>`;
            }
        } else {
            for (i; i <= 3; i++) {
                grau.innerHTML += `<option>${i}º Ano</option>`;
            }
        }
    })


    document.getElementById('enviar').addEventListener('click', () => {
        let codAluno = Number(document.getElementById('codAluno').value);
        let nomeAluno = document.getElementById('nomeAluno').value;
        let serie = grau.options[grau.selectedIndex].text;
        let colection = document.getElementsByName('nota');
        let notas = [];
        let media = 0;
        
        for (let i = 0; i < 6; i++) {
            if (colection[i].value === "") {colection[i].value = 0};
            notas.push(Number(colection[i].value));
            media += Number(colection[i].value);
        }
        media /= 6;
        alunos.push({codAluno, nomeAluno, serie, notas, media});
        console.log(alunos);
    })
}