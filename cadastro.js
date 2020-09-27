window.onload = () => {
    document.getElementById('enviar').addEventListener('click', () => {
        let cat = document.getElementById('categoria');
        let categoria = cat.options[cat.selectedIndex].text;
        console.log(categoria);
    })
}