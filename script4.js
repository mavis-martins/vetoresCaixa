//Função para adicionar novoDoce e listar o array atualizado
function adicionarNovoDoce(novoDoce) {
    docesHalloween.push(novoDoce);
    console.log("Lista atualizada de doces de Halloween: " + docesHalloween);
    console.log(docesHalloween);
}

var docesHalloween = ["abóbora de açúcar", " olhos de gelatina"];
console.log(docesHalloween);

var novoDoce = " barras de caramelo";
docesHalloween.push(novoDoce);

console.log("Novo doce de Halloween adicionado: " + novoDoce);
console.log("Lista atualizada de doces de Halloween: " + docesHalloween);

adicionarNovoDoce(" dentes de vampiro");
adicionarNovoDoce(" baba de bruxa");