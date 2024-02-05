let contador = window.document.getElementById('btcont')
contador.addEventListener('click', contar)
function contar() {
    var cxini = window.document.getElementById('inicio')
    let ini = Number(cxini.value)
    let cxfim = window.document.getElementById('fim')
    let fim = Number(cxfim.value)
    let cxpasso= window.document.getElementById('passo')
    let passo = Number(cxpasso.value)
    let result = window.document.getElementById('res')
    if (ini == 0 || fim == 0 || passo == 0) {
        window.alert('[ERRO! Faltam dados!]')
    } else {
        result.innerHTML = 'Contando...'
    }

    for (let contador = ini; contador <= fim; contador += passo) {
        result. innerHTML += ` ${contador} \u{1f449}`
        
    }
    result.innerHTML =+ 
    
   
}