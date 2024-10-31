var valorHoras=parseFloat(prompt("Digite o quanto você ganha por hora: "))
var numhoras=parseFloat(prompt("Digite o número de horas trabalhadas por mês: "))
var salariobruto  
var imposto = 0.11
var inss=0.08
var sindicato= 0.05
var salarioliquido





salariobruto=valorHoras*numhoras
imposto = imposto*salariobruto

sindicato=sindicato*salariobruto
inss=inss*salariobruto
salarioliquido=salariobruto-imposto-sindicato-inss
alert("O imporsto de renda R$"+imposto)
alert("O salário bruto R$"+salariobruto)
alert("O valor pago do INSS R$"+inss)
alert("O valor a ser pago ao sindicato R$"+sindicato)
alert("O salario líquido é R$"+salarioliquido)
