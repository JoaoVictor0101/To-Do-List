/*
Amrmazenar os cards no local storage



 clonar/ caso necessariover vidoes sobre relções entre elementos traves do dom

 const gridCard = document.getElementById("GridCard");
 */

// create card/ validation
const gridCard = document.getElementById("GridCard");
const cardContainer = document.getElementById("cardContainer");
const idNameList = document.getElementById("nameList");
const ButtonCard = document.getElementById("plusHover");
const inputDescription = document.getElementById("inputDescription") 
const CreateTaskBar = document.getElementById("CreateTaskBar")
const ContainerToDivClones = document.getElementById("cardContainerClones")
let click = 1;

// creation/validation

function createCard(){ 
  click++
    console.log(click)
  if ((click > 0) && (idNameList.value.trim() === "")){
    alert("add algo")
  }else{
      // 
      let clone = cardContainer.cloneNode(true) 
      let placeToClones = document.createElement("div")
      placeToClones.appendChild(clone)
      ContainerToDivClones.appendChild(placeToClones)
      idNameList.value =""
    inputDescription.value = ""
    CreateTaskBar.value = ""
  }
}
ButtonCard.addEventListener("click",createCard);

// tasks


const TaskButton = document.getElementById("TaskButton");

// talvez depois mudar a forma de validação de card para permitir apenas tenha colocado algo nos campos

// pick the value   
// ajeitando questões de keybord
function CreateTask(){
  console.log(CreateTaskBar.value)

}
// ajeitando questões de keybord
TaskButton.addEventListener("keyup",(e) => {
  console.log(e.key)
});