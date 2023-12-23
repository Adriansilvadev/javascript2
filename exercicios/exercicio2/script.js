var botao = window.document.getElementById('botao')
botao.addEventListener('click', verificar)
function verificar() {
var cxnasc = window.document.getElementById('inasc') 
var ano_nasc = Number(cxnasc.value)
var data = new Date()
var ano_atual = data.getFullYear()
var res = window.document.getElementById('result')
var res2 =''



if (ano_nasc == 0 || ano_nasc > ano_atual) {
    window.alert('verifique os dados digitados e tente novamente.')
   
} else {
    var idade = ano_atual - ano_nasc
    var sexo = window.document.getElementsByName('sexo')
    var genero = '' 
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
        genero = ''
        if (idade >=1 && idade <=3) {
            genero = 'Bebê'
            img.setAttribute( 'src','bebe-masculino.jpg')     
        } else if (idade >= 4 && idade <=12 ) {
            genero = 'Menino'
            img.setAttribute('src','crianca masculino_5_10.jpg')  
        } else if (idade >=13 && idade <= 18) {
            genero = 'Rapaz'
            img.setAttribute('src','jovem_homem.jpg')   
        } else if (idade >=19 && idade <=40) {
            genero = 'Homem'
            img.setAttribute('src','homem_adulto.jpg')    
        } else if (idade >=41 && idade <= 60) {
            genero= 'Senhor'
            img.setAttribute('src','homem_maduro.jpg')
        } else {
            genero = 'Idoso'
            img.setAttribute('src','Homem idoso.jpg')
            
        }
    } else if (sexo[1].checked) {
        genero= ''
        if (idade >=1 && idade <=3) {
            genero = 'Bebê'
            img.setAttribute('src','bebe_feminino.jpg')   
        } else if (idade >= 4 && idade <= 12) {
            genero = 'Menina'
            img.setAttribute('src','criaca_feminino_5_10.jpg')   
        } else if (idade >=13 && idade <= 18) {
            genero = 'Moça'
            img.setAttribute('src','jovem_mulher.jpg')   
        } else if (idade >=19 && idade <= 40) {
            genero = 'Mulher'
            img.setAttribute('src','mulher_adulta.jpg')            
        } else if (idade >=41 && idade <=60) {
            genero = 'Senhora'
            img.setAttribute('src','mulher_madura.jpg')            
        } else {
            genero = 'Ídosa'
            img.setAttribute('src','mulher_idosa.jpg')
        }
    }
    res.innerHTML = `Este perfil combina com ${genero ? `${genero}` : ''} com ${idade} ${idade === 1 ? 'ano' : 'anos'}`

    res.style.textAlign = 'center' 
    res.appendChild(img)
    res.style.margin= 'auto'
    res.style.marginTop = '20px'
   
   
}
}

