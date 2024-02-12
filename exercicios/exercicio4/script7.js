let bot = window.document.getElementById('gtab')
bot.addEventListener('click', gerar)

let slc = window.document.getElementById('slctab')

function gerar() {
    let cxnum = window.document.getElementById('num')
    let n = Number(cxnum.value)
    
    
   slc.textContent= ""
   
    if (cxnum.value.length === 0) {
        window.alert(`\u{26A0}ERRO!!! É necessário digitar um número!`)
        
    } else {
        for( let c = 1; c <= 10; c++ ){
            let opcao = window.document.createElement('option')
            opcao.textContent +=`${n} X ${c} = ${n * c}`
            slc.appendChild(opcao)
        }
    } 

}
let btlimp = window.document.createElement('button')
btlimp.textContent = `Limpar`
let seclimp =window.document.getElementsByTagName('section')[0]
seclimp.appendChild(btlimp)
btlimp.style.marginTop = '10px'


btlimp.addEventListener('click',limpar) 
function limpar() {
    btlimp.style.backgroundColor= 'green'
    slc.textContent = ""
    btlimp.textContent = `Agora você pode verificar outro número!`
    btlimp.style.textAlign = `center`

    
}  
 
