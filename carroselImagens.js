let time = 2000
let indexImagem = 0
let imagem = document.querySelectorAll("#slider img" )
let max = imagem.length

function nexImagem(){

  imagem[indexImagem].classList.remove("selected")

  indexImagem++

   if(indexImagem >= max){
    indexImagem = 0
   }

  imagem[indexImagem].classList.add("selected")


}

function start(){
  setInterval(() => {
    // troca de imagem
    nexImagem()
  }, time)

}

window.addEventListener("load", start)