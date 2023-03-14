// pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// identificar o click do botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        // marcar o botao clickado como se estivesse selecionado
        botao.classList.add('selecionado');
        // esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa');
        // aparecer a imagem correspondente ao botao clickado
        imagens[indice].classList.add('ativa');
    })
})