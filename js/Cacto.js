class Cacto {

    constructor() {

        this.obstaculos = []
        this.tempoInsere = 0
        this.sprites = [
            {x: 0, y: 0, largura: 102, altura: 95},
            {x: 102, y: 0, largura: 102, altura: 95},
            {x: 204, y: 0, largura: 102, altura: 95},
            {x: 306, y: 0, largura: 102, altura: 95}
        ]
        this.imagem = new Image()
        this.imagem.src = "./sprite/cacto.png"

    }

    insere() {

        this.obstaculos.push({

            x: LARGURA,
            largura: 150,
            altura: 60 + Math.floor(30 * Math.random()),
            sprite: this.sprites[Math.floor(Math.random() * this.sprites.length)],
            passou: false

        })

        this.tempoInsere = 100 + Math.floor(22 * Math.random())

    }

    atualiza(player , chao) {

        if (this.tempoInsere == 0) {

            this.insere()

        } else {

            this.tempoInsere--

        }

        for (let i = 0, tam = this.obstaculos.length; i < tam; i++) {

            let obs = this.obstaculos[i]
            obs.x -= velocidade

            if (player.x < obs.x + obs.largura &&
                player.x + player.largura >= obs.x &&
                player.y + player.altura >= chao.y - obs.altura) {

                estadoAtual = estados.perdeu

            } else if (obs.x < player.x && !obs.passou) {

                score++
                obs.passou = true

            }
            else if (obs.x <= -obs.largura) {

                this.obstaculos.splice(i, 1)
                tam--
                i--

            }
        }

    }

    limpa() {

        this.obstaculos = []

    }

    desenha() {

        for (let i = 0, tam = this.obstaculos.length; i < tam; i++) {

            let obs = this.obstaculos[i]
                
            ctx.drawImage(this.imagem , obs.sprite.x , obs.sprite.y , obs.sprite.largura , obs.sprite.altura , obs.x , ALTURA - (obs.altura + 25) , obs.largura, obs.altura)

        }

    }
}