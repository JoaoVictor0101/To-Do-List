/*
Amrmazenar os cards no local storage



 clonar/ caso necessariover vidoes sobre relções entre elementos traves do dom

 const gridCard = document.getElementById("GridCard");
 */

// create card
const gridCard = document.getElementById ("GridCard");
const ia = document.getElementById("cardContainer");
const i = document.getElementById("nameList");
const ButtonCard = document.getElementById("plusHover");
const oia = document.getElementById("oia") 
let change = 0;
let click = 1;


function createCard(){ 

    console.log(click)
  if (click > 0 && i.value === "" ){
    alert("add algo")
  }else{
      let clone = oia.cloneNode(true) 
      gridCard.appendChild(clone)
    i.value=""
  }
  
    
}
ButtonCard.addEventListener("click",createCard);

// Card validaion

function validaion(){
}

    // conseguimos pegar o valor do text area, agora é com você good luck

    // precisamos fazer uma logica que impessa que um card sem nome possa ser criado

