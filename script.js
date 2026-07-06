const botao = document.getElementById("abrircortina");
const cortina = document.getElementById("cortina");
const conteudo = document.getElementById("conteudo");

if (botao && cortina && conteudo) {
    botao.addEventListener("click", () => {
        cortina.classList.add("aberta");
        botao.style.display = "none";

        setTimeout(() => {
            conteudo.style.display = "block";
            document.body.style.overflow = "auto";
        }, 2000);
    });
}