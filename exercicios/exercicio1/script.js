    
    window.addEventListener('load', carregar)
    function carregar(){
        var corpo = window.document.getElementById('corpo')
        var mensagem = window.document.getElementById('mensagem') 
        var foto = window.document.getElementById('imagem') 
        var data = new Date()
        var dia = data.getDate()
        var hora = data.getHours()
        var mes = data.getMonth()
        var minutos = data.getMinutes() 
        var diasemana = data.getDay()
        var saudacao = window.document.getElementById('saudacao')
        var msg2 = window.document.getElementById('msg2')
        switch (mes) {
            case 0:
                mes= 'janeiro'
                break
            case 1:
                mes ='Fevereiro'
                break 
            case 2:
                mes = 'Março'
                break
            case 3:
                mes = 'Abril'
                break 
            case 4:
                mes = 'Maio'
                break
            case 5:
                mes = 'Junho'
                break
            case 6:
                mes = 'Julho'
                break
            case 7:
                mes = 'Agosto'
                break      
            case 8:
                mes = 'Setembro'
                break      
            case 9:
                mes = 'Outubro'
                break                                    
            case 10:
                mes = 'Novembro'
                break      
            case 11:
                mes = 'Dezembro'
                break                 
        }
        if (minutos < 10) {
            minutos = '0'+ minutos
        }
        switch (diasemana) {
            case 0:
                diasemana= 'Domingo'
                break
            case 1:
                diasemana ='Segunda-feira'
                break 
            case 2:
                diasemana = 'Terça-feira'
                break
            case 3:
                diasemana = 'Quarta-feira'
                break 
            case 4:
                diasemana = 'Quinta-feira'
                break
            case 5:
                diasemana = 'Sexta-feira'
                break
            case 6:
                diasemana = 'Sábado'
                break
        }
        if (hora >= 0 && hora <12) {
            saudacao.innerHTML = ` <strong>Bom dia! </strong>`
            foto.src = 'manha.jpg'
            corpo.style.backgroundColor = '#02BFEB'
            msg2.innerHTML = 'Volte aqui  <strong>depois do meio dia</strong>, e veja como esta página vai estar.'
        }else if (hora >=12 && hora < 18) {
            saudacao.innerHTML = ` <strong>Boa tarde! </strong>`
            foto.src = ' tarde.jpg'
            corpo.style.backgroundColor = '#F5A58E'
            msg2.innerHTML= 'Volte aqui  <strong>depois das 18hs</strong>, e veja como esta página vai estar.'
        }else {
            saudacao.innerHTML =` <strong>Boa Noite! </strong>`
            foto.src = 'noite.jpg'
            corpo.style.backgroundColor = '#776864'
            msg2.innerHTML ='Volte aqui  <strong>depois da meia noite </strong>, e veja como esta página vai estar.'
        }
        var ano = data.getFullYear()
        mensagem.innerHTML= `Hoje é<strong> ${diasemana}</strong>, dia <strong> ${dia} de ${mes} de ${ano}</strong>. Agora são <strong>${hora}:${minutos}</strong>.`
    
}
