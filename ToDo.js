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
    localStorage.setItem("ContainerCloneCards",clone.innerHTML)
   
   
  }
}
ButtonCard.addEventListener("click",createCard);
function Store() {
  var storedContent = localStorage.getItem("ContainerCloneCards");
  if (storedContent) {
      document.getElementById("cardContainer").innerHTML = storedContent;
  }
};
// tasks

const TaskButton = document.getElementById("TaskButton");

let increase = 0;

//    TALVEZ A SOLUÇÃO DOS NOSSOS PROBLEMAS ESTEJA EM FAZER CADA CARD SER UNICO AO INVES DE UMA COPIA 













// talvez depois mudar a forma de validação de card para permitir apenas tenha colocado algo nos campos


// resolver erro de transferencia de informação do card anterior para o card novo e de não conseguir criar novos tasks nos cards antigos

//      TRANSFERENCIA ENTRE TASKS ANTIGAS E NOVAS

// A QUESTÃO DE TRANSFERENCIA DE TASKS ENTRE CARDS ANTIGOS E CARDS NOVOS PODE SER UMA QUESTÃO DE ID SEMELHANTES JA QUE AMBOS OS CONTAINERS CHECK SÃO DE MESMO ID

//            NAVEGAÇÃO -- mas check o keeps notes para mais informações 
              // LOCALSTORAGE TASK
// ESTAMOS IMPLEMENTANDO O LOCALSTORAGE E ESTÃO QUERENDO SUBSITITUIR O CARDCONTAINER ORIGINAL POR UMA VERSÃO ONDE O INNERHTML DELE JA ESTA ARMAZENADO NO LOCALSTORAGE

// anlisar tarefas para a parte de navegção 
// validção por tasks 

// pick the value and create tasks

function CreateTask(){
  if (!CreateTaskBar.value.trim() == ""){
    ++increase
    let TaskNoCheck = `<div id="task_${increase}" class="taskStylea">

    <div id="removeTask ${increase}" class="trashButtonContainer"">
    <button class="trash"  onclick="removeTask(${increase})">
    <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
    </div>
   
    <!--no check
    mudar ajeitar essas chack boxes
    -->
    <div class="NoAndCheck" onclick="check(${increase})">
    <img  id= "icon_${increase}"  class= "icon" src="imgs to do list/no-check.svg" alt="">
    </div>
    
    <!--taks to make-->
    <div class="Area1">
    <p id="${increase}" class="taskStyle">${CreateTaskBar.value}</p>
    </div>
    </div>`
    AreaTasks.innerHTML+=TaskNoCheck;
    
    CreateTaskBar.value="";
  
  }else{
    
    alert("asdifef")
  }
}

TaskButton.addEventListener("click", () => {
  CreateTask()
});

CreateTaskBar.addEventListener("keyup", (e) =>{
if (e.key === "Enter"){
  e.preventDefault()
  TaskButton.click()
}
})

const containerTasksCheck= document.getElementById("idContainerTasksCheck")

function clearTheAreaTask(){
  AreaTasks.innerHTML="";
  containerTasksCheck.innerHTML="";
}
ButtonCard.addEventListener("click",clearTheAreaTask);


const Tasks = document.getElementById("TaskNoCheck");

function removeTask(id){
  let task = document.getElementById("task_"+id)
  task.remove()
}


function check(id){
     let checkTask = document.getElementById("task_"+id);
     let ClasStyle = document.getElementById(id);
     let imageIcon = document.getElementById("icon_"+id)
     let cla = checkTask.getAttribute('class');
     if (cla == "taskStylea"){
    checkTask.classList.add('yo')
     ClasStyle.classList.add("taskCheckStyle");
    imageIcon.setAttribute("src","imgs to do list/check.svg")
    containerTasksCheck.appendChild(checkTask);
     }else{
      checkTask.classList.remove("yo")
      ClasStyle.classList.remove("taskCheckStyle");
      imageIcon.setAttribute("src","imgs to do list/no-check.svg")
      AreaTasks.appendChild(checkTask);
     }
}

