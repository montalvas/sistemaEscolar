window.onload = () => {
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
        /*let codAluno = document.getElementById('codAluno').value;
        let nomeAluno = document.getElementById('nomeAluno').value;
        let serie = grau.options[grau.selectedIndex].text;
        let n1 = document.getElementById('n1').value;*/
        let colection = document.getElementsByName('nota');
        let notas = [];
        
        for (let i = 0; i < 6; i++) {
            notas.push(colection[i].value);
        }
        console.log(notas);
        
    })
}