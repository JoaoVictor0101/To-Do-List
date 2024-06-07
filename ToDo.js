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
const AreaTasks = document.getElementById("AreaTasks")
let click = 1;

// creation/validation

function createCard(){ 
  click++
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
    Tasks.innerHTML=""
  }
}

ButtonCard.addEventListener("click",createCard);
// tasks


const TaskButton = document.getElementById("TaskButton");
const Tasks = document.getElementById("TaskNoCheck")

// talvez depois mudar a forma de validação de card para permitir apenas tenha colocado algo nos campos

// pick the value and create tasks

function CreateTask(){
  if (!CreateTaskBar.value.trim() == ""){
    const TaskNoCheck = document.createElement("div");
    TaskNoCheck.innerHTML=`<div class="taskStylea">
    <div class="trashButtonContainer">
        <button class="trash">
        <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
        </button>
    </div>
    <!--no check
    mudar ajeitar essas chack boxes 
    -->
    <div class="NoAndCheck" onclick="o()">
            <img src="imgs to do list/no-check.svg" alt="">
    </div>

    <!--taks to make-->
    <div class="Area1">
    <p class="taskStyle">${CreateTaskBar.value}</p>
    </div>
</div>`
    Tasks.appendChild(TaskNoCheck)
    CreateTaskBar.value = ""
    
  }else{
    
    alert("asdifef")
  }

}
TaskButton.addEventListener("click", CreateTask);
// tentando resolver questões do botão de check
function o (){
  TaskNoCheck.innerHTML= `<div class="taskStylea">
  <div class="trashButtonContainer">
      <button class="trash">
      <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
      </button>
  </div>
  <!--no check
  mudar ajeitar essas chack boxes 
  -->
  <div class="NoAndCheck" onclick="o()">
     <img src="imgs to do list/check.svg" alt="">
  </div>

  <!--taks to make-->
  <div class="Area1">
  <p>${CreateTaskBar.classList.add("taskCheckStyle")}</p>
  </div>
</div> `
}



