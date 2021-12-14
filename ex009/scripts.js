let contato = 0
let res = document.querySelector('section#result')
function contar() {
    contador ++ //mesma coisa que contador = contador +
    res.innerHTML = `<p> o contador esta com <mark> ${contador}</mark> clique.</p>`
}
function zerar(){
    contador = 0
    res.innerHTML = null
}