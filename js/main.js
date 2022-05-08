document.querySelectorAll('img').forEach(imagem => {
    imagem.setAttribute('draggable', false);
});

document.querySelectorAll('button').forEach(botao => {
    botao.addEventListener('click', e => {
        e.preventDefault(); 
    });
});