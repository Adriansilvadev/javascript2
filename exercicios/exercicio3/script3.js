let botao = window.document.getElementById('cont') // definda a variável que servirá de referência para o botão calcular. 
botao.addEventListener('click', contar) // adicionado o ouvidor de evento

function contar() { //criada a função clicar
    let cxini = window.document.getElementById('ini') // variável para campo do formulário
    let cxfim = window.document.getElementById('fim')  // variável para campo do formulário
    let cxpasso = window.document.getElementById('pas')// variável para campo do formulário
    let r = window.document.getElementById('res')
   //Antes de fazer a conversão das strings em números é realizada a validação dos campos de entrada de dados. 
    if (cxini.value === "" || cxfim.value === "" ||cxpasso.value === "" ) { // teste logico (ou) em que é verificado se os campos estão vazios. Esta verificação também poderia ser feita usando o operador de igualdade estrita === para verificar o tamanho do conteudo da string ex; If(cxini.value.length === 0)o resultado seria o mesmo.
        window.alert(' ⚠️ERRO! verifique os dados digitados') //mensagem caso fique algum campo vazio *OBS: O emoji tambe pode ser inserido usando seu unicode. Neste caso em lugar do emoji haveria seu unicode \u{26A0}  
    }else{ 
        r.innerHTML = `Contando: <br>` // mensagem apresentada para condição falsa
        // Depois de feita as validaçõess dos campos, fazemos a conversão das variáveis
        let i = Number(cxini.value) // conversão de variavel para número
        let f = Number(cxfim.value) // conversão de variavel para número
        let p = Number(cxpasso.value) // conversão de variavel para número
        if (p <= 0) {
            window.alert(' \u{26A0}Passo invalido! Considerando PASSO 1 para a contagem')
          p = 1  
   
        }
        if (i < f) { // Aqui fazemos mais uma validação, em que verificamos se o valor do inicio do contador é menor do que o valor final.
        for(let c = i; c <= f; c+= p) {  // definido loop para contagem crescente caso o valor de i seja menor do que o valor de f.
            r.innerHTML += `${c} `// mensagem apresentada com concatenação (+=) da anterior.
        }
        } else { 
            for(let c = i; c >= f; c-= p) // definido loop para contagem decrescente caso o valor de i seja maior do que o valor de f.
            r.innerHTML += `${c} ✅ ` // mensagem apresentada com concatenação (+=) da anterior. *OBS: O emoji tambe pode ser inserido usando seu unicode. Neste caso em lugar do emoji, haveria seu unicode \u{2705}
        }
        
        r.innerHTML += `🏁` // mensagem apresentada com concatenação (+=) da anterior. 
       
    }
      
   /*Observações gerais sobre este script com foco na sequência de criação do projeto:
    >>Criamos a variável de referencia para a adição do eventListener
    >>iniciamos a função contar que será chamada quando houver o click no elemento botão.
    >>Criamos as variáveis de referencias para os campos de entrada de dados
    Fizemos a validação dos campos de entradas de dados a fim de evitar entrada de dados invalidos ou vazios.
    >>Feita a conversão dos dados de entrada para numeros.
    >>Feita a validação do valor do campo passo afim de evitar a adição de um valor menor ou igual a zero.
    >>Feita a validação dos campos de inicio e fim para que a contagem ocorra de maneira crecente ou decrescente de acordo com os valores digitados. Para cada condição foi criada uma estrutura de reptiçãor "for": for ( inicilaização com varíavel de controle ;teste lógico;incremento ). Em cada condicão foi adicionada uma mensagem que será armazenada na variável r e exibida com o innerHTML sempre concatenando (+=) com as anteriores.   

    
   */
 }