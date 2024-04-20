const titulo = document.getElementById('titulo').value;
const estudio = document.getElementById('estudio').value;
const ano = document.getElementById('ano').value;

if (titulo && estudio && ano) {
    alert('Série cadastrada com sucesso!');
    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados ou em algum outro lugar.
} else {
    alert('Por favor, preencha todos os campos.');
}
});