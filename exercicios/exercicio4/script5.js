let gerador = window.document.getElementById('gtab')
gerador.addEventListener('click', gerar)
function gerar() { //Depois de adicionado o ouvidor de evento, foi iniciada  a função gerar.
    let txtnum = window.document.getElementById('num') 
    let tab = window.document.getElementById('slctab')//  Declarada as variáveis para o campo de número e para o elemento tabuada
    if (txtnum.value.length === 0) { // Feita validaçào de campo de dados . Se campo vazio retorna mensagem de erro se não segue para proximo passo.
        window.alert(`\u{26A0} [ERRO!!!] Por favor digite um número!`) 
    } else {
        let n = Number(txtnum.value) // Feita conversão de string para número.       
       tab.innerHTML = "" //  Esta linha limpa o conteúdo atual do elemento select (ID 'slctab') antes de gerar uma nova tabuada. Isso garante que uma nova tabuada seja exibida a cada vez que o botão for clicado, em vez de adicionar à tabuada anterior.
        for( let c = 1 ; c <= 10; c++){ // Criada estrutra de repetição for 
            let t = c* n // Criada variável para total (t) dentro da estrutura for 
            let opcao = window.document.createElement('option') // Criado elemento opçãp onde será exibida  a tabuada. O elemento foi criado diretamenet pelo javascrupt utilizando o creatElement. Note que, a cada iterção (Loop), uma nova opção é criada, visto que objetivo é adicionar 10 opções. Se essa linha estivessse fora do loop apenas 1 opção seria criada e a cada iteração o conteudo seria substituido, consequentemente no final teriamos exibido apenas a ultima iteração.
          
            opcao.text = ` ${n} X ${c} = ${t}` // Aqui, o texto do elemento option é definido para exibir a multiplicação do número digitado pelo usuário (n) pelo contador do loop (c), resultando em t.
              tab.appendChild(opcao) // Adicionado elemento filho  para que ele possa ser exibida   
               
        }
    }
}



