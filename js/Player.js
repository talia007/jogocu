class Player {

    constructor(x, y, largura, altura, gravidade, velocidade, forcaDoPulo) {

        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.gravidade = gravidade
        this.velocidade = velocidade
        this.forcaDoPulo = forcaDoPulo
        this.qntPulos = 0
        this.sprites = {

            andar: [

                {x: 0, y: 0, largura: 88, altura: 93},
                {x: 88, y: 0, largura: 88, altura: 93},
                {x: 176, y: 0, largura: 88, altura: 93},
                {x: 264, y: 0, largura: 88, altura: 93}

            ],
            morre: [{x: 0, y: 93, largura: 88, altura: 93}],
            index: 0

        }
        this.imagem = new Image()
        this.imagem.src = "./sprite/dinossaur.png"

    }

    atualiza(chao) {

        this.velocidade += this.gravidade
        this.y += this.velocidade

        if (this.y > chao.y - this.altura && estadoAtual != estados.perdeu) {

            this.y = chao.y - this.altura + 13
            this.qntPulos = 0
            this.velocidade = 0

        }

    }

    pula() {

        if (this.qntPulos < maxPulos) {

            this.velocidade = -this.forcaDoPulo
            this.qntPulos++

        }

    }

    reset() {

        this.velocidade = 0
        this.y = 0
        score = 0

    }

    desenha() {

        if(this.sprites.index > 3) {

            this.sprites.index = 0  

        } else { 

            this.sprites.index += 0.2 

        }

        const index = this.sprites.index.toFixed(0)

        const sprite = estadoAtual == estados.perdeu || estadoAtual == estados.jogar ? this.sprites.morre[0] : this.sprites.andar[index]
        
        ctx.drawImage(this.imagem , sprite.x , sprite.y , sprite.largura , sprite.altura , this.x , this.y , this.largura , this.altura)

    }
}