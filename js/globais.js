const ALTURA = window.innerHeight
const LARGURA = window.innerWidth

const canvas = document.getElementById("canvas")
canvas.width = LARGURA
canvas.height = ALTURA

const ctx = canvas.getContext("2d")

let frames = 0
let maxPulos = 3
let velocidade = 12
let estadoAtual
let score = 0
let melhorScore = localStorage.getItem("score") ? Number(localStorage.getItem("score")) : 0 

const audio = new Audio("./audio/8 Bit Universe.mp3")
audio.volume = 0.20

const estados = {
    jogar: 0,
    jogando: 1,
    perdeu:2,
}