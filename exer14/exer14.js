var pesopeixe=parseFloat(prompt("Informe o quilo de peixe: "))
var excesso
var multa=4.0
if(pesopeixe>50){
    excesso=pesopeixe-50
    multa=excesso*4
    alert("Deverá pagar o valor da multa R$ "+multa)
}
else{
 alert("excesso=0"+"\n"+"Multa=0")
}