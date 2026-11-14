let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

function escolherPersonagem(nomeDoPersonagem, arquivoImagem, corTexto) {
    nome.innerHTML = nomeDoPersonagem
    personagem.src = arquivoImagem
    nome.style.color = corTexto
}

function lerImagem(foto) {
    let leitor = new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function() {
      let desenho = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame. Contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido, fundo totalmente transparente, sem cenário, sem chão e sem sombra.", 
            {
                model: "gpt-image-2.6-flare",
                provider: "openai",
                input_image: leitor.result,
                quality: "medium"
            })

        escolherPersonagem('você', desenho, '#12eedc')
            
    }
}