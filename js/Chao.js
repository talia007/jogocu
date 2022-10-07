class Chao {

    constructor(y , altura) {

        this.y = y 
        this.x = 0
        this.altura = altura
        this.sprite = new Image()
        this.sprite.src = "./sprite/chao.png"

    }

    atualiza() {

        this.x += 0.1

        if (this.x >= 2400 - LARGURA) {

            this.x = 0
            
        }

    }

    desenha() {

        ctx.drawImage(this.sprite , this.x , 0 , LARGURA , 26 , 0 , this.y , LARGURA , this.altura)

    }

}