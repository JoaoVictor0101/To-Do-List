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
let i = 0

function createCard(iv){ 
  if ((idNameList.value.trim() === "")){
    alert("add algo")
  }else{
      // 
      ++i
let clone = `<div id="cardContainer" class="cardStyle">

  <div id="deleteCardContainer">
      <button id="x" class="removeCardstyle" alt="remnovecard">
          <img src="imgs to do list/remove-svgrepo-com.svg" alt="remove_card">
          <!-- <i class="bi bi-x" style="font-size: 40px;"></i> 
</button> -->
  </div>

  <!--Name list-->

  <div class="Area">
      <textarea rows="2" maxlength="25" type="text" minlength="1" placeholder="Crie sua lista"
          class="NameListStyle" id="nameList"></textarea>
  </div>

  <!--Description-->

  <div class="Area">
      <textarea maxlength="80" id="inputDescription" class="descriptionStyle"
          placeholder="description..."></textarea>
  </div>
  <!--Bar Creat Task and tasks-->


  <div class="Area">
      <input id="CreateTaskBar${i}" type="text" class="BartoTaskStyle" >
  </div>

  <!---create button task-->

  <div class="ButtontoTaskContainer">
      <button class="ButtonTask" id="TaskButton${i}" onclick="TaskButton1(${i})">
          <img src="imgs to do list/plus-square-svgrepo-com.svg" alt="">
      </button>
  </div>

  
  <!--Gridtask-->
  <div id="scroll${i}" class="scrollTasks">
  <div id="${i}" class="areaTaskContainer"></div>
  <div id="idContainerTasksCheck${i}"class="containerTasksCheck">

  </div>
</div>
</div>`
      const placeToClones = document.createElement("div")
      placeToClones.setAttribute('id','ip'+i)
      placeToClones.innerHTML = clone
     gridCard.appendChild(placeToClones)
    inputDescription.value = ""
    CreateTaskBar.value = ""
    localStorage.setItem("ContainerCloneCards",clone.innerHTML)
  }
}

var DivtaskNock
var DivArry = []
var srcollId
var CreateTaskBar1;
var AreaTask
var idContainerTasksCheck1
function TaskButton1(iv){
  var ip = 0
  srcollId = document.getElementById("scroll"+iv)
  CreateTaskBar1 = document.getElementById("CreateTaskBar"+iv)
  idContainerTasksCheck1 = document.getElementById("idContainerTasksCheck"+iv)
   AreaTask = document.getElementById(iv)
  // DivtaskNock = document.createElement("div");
    //DivtaskNock.id="oi"+increase
    
   // srcollId.appendChild(DivtaskNock);
  if (CreateTaskBar1.value.trim() !== ""){
    ++increase
    ++o
    let TaskNoCheck = `<div id="task_${increase}" class="taskStylea">
    
    <div id="removeTask${increase}" class="trashButtonContainer"">
    <button class="trash"  onclick="removeTask(${increase})">
    <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
    </div>
    
    <!--no check
    mudar ajeitar essas chack boxes
    -->
    <div class="NoAndCheck" onclick="check(${increase})">
    <img  id= "icon_${increase}"  class= "icon" src="imgs to do list/no-check.svg" alt="check">
    </div>
    
    <!--taks to make-->
    <div class="Area1">
    <p id="${increase}"class="taskStyle">${CreateTaskBar1.value}</p>
    </div>
    </div>`
     
    ++ip
    AreaTask.innerHTML+=TaskNoCheck;
    }else {
      alert("crie uma task")
    }
    if(ip == 0){
      alert("dmfo")
    }else{
      alert("ertert")
    }
    CreateTaskBar1.value=""; 
}
ButtonCard.addEventListener("click",createCard);
function Store() {
  var storedContent = localStorage.getItem("ContainerCloneCards");
  if (storedContent){
    document.getElementById("cardContainer").innerHTML = storedContent;
  }
};
// tasks

const TaskButton = document.getElementById("TaskButton");
let increase = 0;
var o = 0
console.log(increase)



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

function CreateTask(i){
  let creattask = document.getElementById("CreateTaskBar"+i)
  
  /*if (!CreateTaskBar.value.trim() == ""){
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
    */
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
// VER FUNCIONALIDADES DE ARRAYS 
function check(id){
     let checkTask = document.getElementById("task_"+id);
     let ClasStyle = document.getElementById(id);
     let imageIcon = document.getElementById("icon_"+id);
     let cla = checkTask.getAttribute('class');
     if (cla == "taskStylea"){
    checkTask.classList.add('yo')
    // ClasStyle.classList.add("taskCheckStyle");
    imageIcon.setAttribute("src","imgs to do list/check.svg")
  
    console.log(io)
    
    //let idContainerTasksCheck = document.createElement("div");
    //idContainerTasksCheck.id= "uoi"
    //srcollId.appendChild(idContainerTasksCheck);
    //idContainerTasksCheck.appendChild(DivtaskNock)

    //idContainerTasksCheck1.appendChild(checkTas);
     }else{
      //let removeCheckDiv=document.getElementById("uoi")
      checkTask.classList.remove("yo");
      ClasStyle.classList.remove("taskCheckStyle");
      imageIcon.setAttribute("src","imgs to do list/no-check.svg")
     // AreaTask.appendChild(checkTas);
      

     }
}
/*  let checkTask = document.getElementById("task_"+id);
    let ClasStyle = document.getElementById(id);
     let imageIcon = document.getElementById("icon_"+id);
     let cla = checkTask.getAttribute('class');

     if (cla == "taskStylea"){

     checkTask.classList.add('yo')

    ClasStyle.classList.add("taskCheckStyle");

    imageIcon.setAttribute("src","imgs to do list/check.svg")
   
    criar as divs i e a antes dentro da div "scroll"
    i creatElement ('div');
   
    a appendChild (i)

    a remove ('div');
  
    else
    checkTask.classList.remove("yo");
      
    ClasStyle.classList.remove("taskCheckStyle");
    
    imageIcon.setAttribute("src","imgs to do list/no-check.svg")

    a creatElement('div');
    i appendChild (a) 
    i remove('div');

    OUTRA RESPOSTA TALVEZ

    Sim, é possível mudar a posição de uma `div` ao tocá-la usando JavaScript. Você pode usar eventos de toque (touch events) para detectar quando a `div` é tocada e, em seguida, alterar seu estilo para movê-la. Aqui está um exemplo simples de como fazer isso:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mover Div ao Tocar</title>
    <style>
        #minhaDiv {
            width: 100px;
            height: 100px;
            background-color: blue;
            position: absolute;
            top: 50px;
            left: 50px;
        }
    </style>
</head>
<body>
    <div id="minhaDiv"></div>

    <script>
        const minhaDiv = document.getElementById('minhaDiv');

        minhaDiv.addEventListener('touchstart', function(event) {
            // Muda a posição da div
            minhaDiv.style.top = 'auto';
            minhaDiv.style.left = 'auto';
        });
    </script>
</body>
</html>
```

Neste exemplo, a `div` com o ID `minhaDiv` muda de posição quando é tocada. Você pode ajustar os valores de `top` e `left` para a nova posição desejada⁴.

Se precisar de mais alguma coisa ou tiver outras dúvidas, estou aqui para ajudar!

*/ 



