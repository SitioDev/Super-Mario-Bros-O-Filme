const botaoTrailer = document.querySelector('.botao');
const modal = document.querySelector(".modal");
const botaoFechar = document.querySelector(".fechar-modal");
const video = document.getElementById('video');
const linkDoVideo = video.src;
botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
});
botaoFechar.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
});
//Feito por Adryann