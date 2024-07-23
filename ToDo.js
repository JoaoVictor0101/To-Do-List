/*
Amrmazenar os cards no local storage



 clonar/ caso necessariover vidoes sobre relções entre elementos traves do dom

 const gridCard = document.getElementById("GridCard");
 */

// create card/ validation
const gridCard = document.getElementById ("GridCard");
const cardContainer = document.getElementById("cardContainer");
const idNameList = document.getElementById("nameList");
const ButtonCard = document.getElementById("plusHover");
const inputDescription = document.getElementById("inputDescription") 
const CreateTaskBar = document.getElementById("CreateTaskBar")
const ContainerToDivClones = document.getElementById("cardContainerClones")
const AreaTasks = document.getElementById("AreaTasks")


// creation/validation

function createCard(){ 
  if ((idNameList.value.trim() === "")){
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
const Tasks = document.getElementById("TaskNoCheck");
let increase = 0;



// talvez depois mudar a forma de validação de card para permitir apenas tenha colocado algo nos campos

// resolver a questão de sumir com as tasks quando um novo card for criado 
// tentando resolver questões do botão de check

// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 
// organizar logica é codigo para entender o que e por que estamos fazendo 

// pick the value and create tasks

function CreateTask(){
  if (!CreateTaskBar.value.trim() == ""){
    let TaskNoCheck = `<div class="taskStylea">
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
    AreaTasks.innerHTML+=TaskNoCheck
  
    CreateTaskBar.value=""
 
  }else{
    
    alert("asdifef")
  }
  
  console.log(oio)
  
}
TaskButton.addEventListener("click", () => {
  CreateTask()
  
});

console.log()
function clearTheAreaTask(){
  AreaTasks.innerHTML="";
  
}
ButtonCard.addEventListener("click",clearTheAreaTask);


