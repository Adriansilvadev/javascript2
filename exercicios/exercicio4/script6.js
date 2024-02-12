let botao = window.document.createElement('input')
botao.type = 'button'
botao.value = 'clique aqui'
botao.style.width = '100px'
botao.style.height = '100px'
botao.style.backgroundColor = 'green'
botao.style.position = 'relative'
botao.style.left = '50px'
botao.style.top= `50px`
let sec = window.document.querySelector('section')
sec.appendChild( botao)
sec.style.height = '200px'
let frm = window.document.createElement('form')
let slct = window.document.createElement('select')
frm.appendChild(slct)
console.log (slct)
let item = window.document.createElement('option')
item.textContent ='Opção 1'
slct.appendChild(item)


/*let f = window.document.createElement('form')
let s = window.document.createElement('select')
f.appendChild(s)
f.text = ` olá ${s} `*/