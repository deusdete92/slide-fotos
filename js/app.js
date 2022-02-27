let img = [
    'img/anime1.jpg', 'img/anime2.jpg','img/anime3.jpg','img/anime4.jpg',
    'img/anime5.webp', 'img/anime6.jpg', 'img/anime7.jpg', 'img/anime8.jpg'
]
let indice = 0
let imagem = document.getElementById('img')
let indice2= img.length

function proximaImg(){
    indice+=1
    if(indice == img.length){
        indice = 0
    }
    imagem.src = img[indice]
    
}
document.getElementById('proximo').addEventListener('click', proximaImg)

function imgAnterior(){
    indice2-=1
    if(indice2 < 0){
        indice2 = img.length-1
    }
    imagem.src = img[indice2]
    
}
document.getElementById('anterior').addEventListener('click', imgAnterior)