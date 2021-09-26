let primeironome = document.getElementById ("nome1").innerHTML
let primeiropreco = document.getElementById("preco1").innerHTML
let segundonome =  document.getElementById("nome2").innerHTML
let segundopreco = document.getElementById("preco2").innerHTML
let terceironome = document.getElementById("nome3").innerHTML
let terceiropreco = document.getElementById("preco3").innerHTML
let quartonome = document.getElementById("nome4").innerHTML
let quartopreco = document.getElementById("preco4").innerHTML
let pqtd = document.forms[0].elements[0].value
let sqtd = document.forms[1].elements[0].value
let tqtd = document.forms[2].elements[0].value
let qqtd = document.forms[3].elements[0].value
let produtos = new Map([
["01",[primeironome,primeiropreco,pqtd]]
["02",[segundonome,segundopreco,sqtd]]
["03",[terceironome,terceiropreco,tqtd]]
["04",[quartonome,quartopreco,qqtd]]
])
let btn1 = document.forms[0].elements[1]
let btn2 = document.forms[1].elements[1]
let btn3 = document.forms[2].elements[1]
let btn4 = document.forms[3].elements[1]
let btnlimpar = documents.forms[4].elements[1]
let btnfinal = documents.getElementById("btnf")

