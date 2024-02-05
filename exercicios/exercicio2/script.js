var cxano_nasc = window.document.getElementById('inasc')

var botao = window.document.getElementById('botao')
botao.addEventListener('click', verificar)
var data = new Date()
var ano_atual = data.getFullYear()
var result = window.document.getElementById('result')
function verificar() { 
    var ano_nasc = Number(cxano_nasc.value)   
    if (ano_nasc == 0 || ano_nasc > ano_atual) {
       result.innerHTML= `[ERRO!!] Verifique o ano que você digitou!!`        
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade =   ano_atual - ano_nasc
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade >=1 && idade <=4) {
                img.setAttribute('src','bebe-masculino.jpg')  
            } else if (idade >=5 && idade <=12) {
                img.setAttribute('src','crianca masculino_5_10.jpg')   
            } else if (idade >12 && idade <18) {
                img.setAttribute('src','jovem_homem.jpg')    
            } else if (idade >=18 && idade )
        } else if (sexo[1]. checked) {
            genero = 'Feminino'            
        }
        result.innerHTML = `As informações digitadas combinam com o perfil de uma pessoa de sexo ${genero} com ${idade} anos`
        result.style.textAlign ='center'
        result.appendChild(img)

    }
    
       
    }    
