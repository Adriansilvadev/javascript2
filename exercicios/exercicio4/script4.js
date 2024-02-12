var gtb = window.document.getElementById('gtab')
gtb.addEventListener('click',gerar)
function gerar() {
    let cxnum = window.document.getElementById('num')// Váriável da caixa de número
    if (cxnum.value.length === 0) { // Teste de conteudo da caixa
        window.alert(`\u{26A0} ERRO! Por favor, digite um número.`) // Mensagem de erro caso a  caixa fique vasia

    } else {
        let n = Number(cxnum.value) // conversão string >> numero
        let tab = window.document.getElementById('selectab') // variável para a tabela
        let item = window.document.createElement('option') // adicionado dinamicamente o elemento ptions 
        
        tab. innerHTML = ``

       for (let c = 1; c <= 10 ; c++){
        item.text= `${n} X ${c} = ${(c*n)}`

        tab.appendChild(item)
       
        tab.innerHTML += `  `
       }
    }
    
}
 // após verificar que o conteúdo da caixa de texto não está vasio é feita a conversão para número.

