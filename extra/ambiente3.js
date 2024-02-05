var cont= 1
var limitefim =5
var valor = 0
do {
   console.log(`O valor atual é ${valor}. Como o limite de ${limitefim} não foi atingido adicionarei mais ${cont}` )
    cont = cont++
    valor = valor +1
} while (valor <= limitefim) 
 if (valor > limitefim) {
    console.log(`o limite de ${limitefim} foi atingido`)
    
 }