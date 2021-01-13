let segundos = 59;
let minutos = 59;
let horas = 23;
let dia = 8

// relógios 

let clock = document.querySelectorAll('.clock');
let numberTop = document.querySelectorAll('.numberTop');
let numberBottom = document.querySelectorAll('.numberBottom');

function verificador(){
    if(segundos == 0){
       segundos = 59
       verificador()
       trocarMinuto()
    }else{  
        trocarSegundo() 
    }
}

function trocarSegundo(){
    clock[3].classList.add('active')
    numberTop[3].classList.add('active')
    numberBottom[3].classList.add('active')

    if(segundos < 10){
      numberTop[3].innerHTML = "0" + segundos
      numberBottom[3].innerHTML = "0" + segundos
    }else{
      numberTop[3].innerHTML = segundos
      numberBottom[3].innerHTML = segundos
    }
   
    setTimeout(()=>{
      removerToggle()
      segundos --
    },400)

    setTimeout(()=>{
      removerToggle()
      verificador()
    },1000)

}

function trocarMinuto(){

  if(minutos === 0){
    trocarHora()
    minutos = 59
    
    clock[2].classList.add('active')
    numberTop[2].classList.add('active')
    numberBottom[2].classList.add('active')

    if(minutos < 10){
      numberTop[2].innerHTML = "0" + minutos
      numberBottom[2].innerHTML = "0" + minutos
    }else{
      numberTop[2].innerHTML = minutos
      numberBottom[2].innerHTML = minutos
    }

    setTimeout(function(){
      clock[2].classList.remove('active')
      numberTop[2].classList.remove('active')
      numberBottom[2].classList.remove('active')
    },500)

  }else{
    minutos--
    clock[2].classList.add('active')
    numberTop[2].classList.add('active')
    numberBottom[2].classList.add('active')

    numberTop[2].innerHTML = minutos
    numberBottom[2].innerHTML = minutos

    setTimeout(function(){
      clock[2].classList.remove('active')
      numberTop[2].classList.remove('active')
      numberBottom[2].classList.remove('active')
    },500)
  }
}


function trocarHora(){

  if(horas === 0){
    trocarDia()
    horas = 23
  }else{
    horas--
    clock[1].classList.add('active')
    numberTop[1].classList.add('active')
    numberBottom[1].classList.add('active')

    if(horas < 10){
      numberTop[3].innerHTML = "0" + horas
      numberBottom[3].innerHTML = "0" + horas
    }else{
      numberTop[3].innerHTML = horas
      numberBottom[3].innerHTML = horas
    }

    setTimeout(function(){
      clock[1].classList.remove('active')
      numberTop[1].classList.remove('active')
      numberBottom[1].classList.remove('active')
    },500)
  }
}

function trocarDia(){

  if(dia === 0){
    dia = 30
    clock[0].classList.add('active')
    numberTop[0].classList.add('active')
    numberBottom[0].classList.add('active')

    numberTop[0].innerHTML = horas
    numberBottom[0].innerHTML = horas

    setTimeout(function(){
      clock[0].classList.remove('active')
      numberTop[0].classList.remove('active')
      numberBottom[0].classList.remove('active')
    },500)
  }else{
    dia--
    clock[0].classList.add('active')
    numberTop[0].classList.add('active')
    numberBottom[0].classList.add('active')

    if(dia < 10){
      numberTop[0].innerHTML = "0" + dia
      numberBottom[0].innerHTML = "0" + dia
    }else{
      numberTop[0].innerHTML = dia
      numberBottom[0].innerHTML = dia
    }

    setTimeout(function(){
      clock[0].classList.remove('active')
      numberTop[0].classList.remove('active')
      numberBottom[0].classList.remove('active')
    },500)
  }
}


function removerToggle(){
    clock[3].classList.remove('active')
    numberTop[3].classList.remove('active')
    numberBottom[3].classList.remove('active')
}

verificador()

