window.onload = function () {
    var tableProdutos = document.getElementById('tableProdutos');
    produtosController.getAll().forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td> R$ ' + item.preco + '</td>';
        row += '<td>';
        row += '<a href="Editar?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        tableProdutos.innerHTML += row;
    }
}