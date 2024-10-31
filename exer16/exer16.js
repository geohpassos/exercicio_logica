var areaquadrada= parseFloat(prompt("Digite a area quadrada que deseja pintar: "))
var lata 
var valor
if(areaquadrada>54){
    lata=areaquadrada/54
    valor=lata*80
    alert("A quantidade de lata a ser comprada "+ /*Math.round( */lata)/*)*/
    alert("O valor a ser pago R$"+valor.toFixed(2))
}else{
    alert("O valor a pagar é de 80 reais, e uma lata de 18 litros")
}