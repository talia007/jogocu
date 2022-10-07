let chao = new Chao(ALTURA - 50, 50)
let player = new Player(200 , ALTURA - 50 , 50 , 100 , 1.6 , 12 , 23.6)
let cactos = new Cacto()

window.addEventListener("mousedown", function () {

  if (estadoAtual == estados.jogando) {

    player.pula()

  }
  else if (estadoAtual == estados.jogar) {

    audio.loop = true
    audio.play()
    estadoAtual = estados.jogando

  }
  else if (estadoAtual == estados.perdeu && player.y >= 2 * ALTURA) {

    if (score > melhorScore) {
      
      melhorScore = score
      localStorage.setItem("score" , melhorScore)

    }

    estadoAtual = estados.jogando
    cactos.limpa()
    player.reset()

  }

})

function main() {

  estadoAtual = estados.jogar
  roda()

}

function roda() {

  atualiza()
  desenha()

  window.requestAnimationFrame(roda)
}

function atualiza() {

    frames++
    player.atualiza(chao)

    if (estadoAtual == estados.jogando) {

      cactos.atualiza(player , chao)

    }

}

function desenha() {

  ctx.fillStyle = "#80daff"
  ctx.fillRect(0, 0, LARGURA, ALTURA)

  ctx.fillStyle = "white"
  ctx.font = "30px arial"
  ctx.fillText("HIGH SCORE: " + melhorScore , 50 , 50)
  ctx.fillText("SCORE: " + score , 50 , 100)

  switch (estadoAtual) {

    case estados.jogar:

      ctx.fillStyle = "green"
      ctx.font = "50px Arial"
      ctx.fillText("JOGAR" , LARGURA / 2 - 50, ALTURA / 2 - 50)

      break
    case estados.perdeu:

      ctx.font = "50px arial"
      ctx.fillStyle = "red"
      ctx.fillText("JOGAR NOVAMENTE",LARGURA / 2 - 250, ALTURA / 2 - 50)
      
      ctx.fillStyle = "yellow"
      ctx.fillText("HIGH SCORE:" + melhorScore,LARGURA / 2 - 220, ALTURA/2 + 25)

      ctx.fillStyle = "white"
      ctx.fillText("SCORE: " + score,LARGURA / 2 - 220, ALTURA/2 + 100)

      ctx.save()
      ctx.translate(LARGURA / 2, ALTURA / 2)
      ctx.restore()

      break
    case estados.jogando:
      cactos.desenha()

      break
  }

  chao.desenha()
  player.desenha()

}
main()
