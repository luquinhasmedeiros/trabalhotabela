var tabelaNome= document.querySelector("#lucas table")
var inputNome = document.querySelector("#jogoN")
var inputGen = document.querySelector("#jogoG")
var inputAno= document.querySelector("#jogoA")

function RendezirarTableNome() {
    for (nome of pecasNome) {
        tableNome.innerHTML = pecasNome

       

        var colunaNome = document.createElement('td')
        var TextoN = document.createTextNode(nome);

        colunaNome.appendChild(TextoN);
        tableNome.appendChild(colunaNome);
        
       

    }


}

RendezirarTableNome();