let respostadiv = document.getElementById('rescc')
let contador = document.getElementById('contador')
document.getElementById('botao').addEventListener('click', clicker)
let caraV = 0
let coroaV = 0

function clicker() {
    document.getElementById('main').classList.add('clicado')
    document.getElementById('botao').classList.add('clicado')
    document.getElementById('contador').classList.add('clicado')

    let valor = Math.round(Math.random())

    if (valor == 1) {
        caraV ++
        respostadiv.textContent = 'CARA '
        respostadiv.style.color = '#361b00'
        respostadiv.style.backgroundColor = '#ff972f'
        respostadiv.style.boxShadow = '1px 5px 1px #5c3712'
        
    }
    else if (valor == 0) {
        coroaV ++
        respostadiv.textContent = 'COROA'
        respostadiv.style.color = '#313000'
        respostadiv.style.backgroundColor = '#fcf835'
        respostadiv.style.boxShadow = '1px 5px 1px #81801d'
    }

    contador.innerHTML = `CARA: ${caraV} COROA: ${coroaV}`

    setTimeout(() => {
        document.getElementById('main').classList.remove('clicado')
        document.getElementById('botao').classList.remove('clicado')
        document.getElementById('contador').classList.remove('clicado')
    }, 1000);
}