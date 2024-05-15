// create card

/*
function createCard(){
    const gridCard = document.getElementById ("GridCard");
    const Card = document.getElementById("cardContainer");
    const clonedElement = Card.cloneNode(true);
    gridCard.appendChild(clonedElement);
}



//const clonedElement = novoElemento.cloneNode(true);
*/

function createCard(){
    const gridCard = document.getElementById ("GridCard");
    let Card = document.createElement ("div");
    Card.setAttribute("class","Sty")
Card.innerHTML =  ` <div id="cardContainer"class="cardStyle">

<div id="deleteCardContainer">
    <button id="x" class="removeCardstyle"alt="remnovecard">
        <img src="imgs to do list/remove-svgrepo-com.svg" alt="remove_card">
        <!-- <i class="bi bi-x" style="font-size: 40px;"></i> -->
    </button>
</div>

<!--Name list-->

<div class="Area">
    <textarea rows="2"  maxlength="25" type="text" minlength="1" placeholder="Crie sua lista"
        class="NameListStyle"></textarea>
</div>

<!--Description-->

<div class="Area">
    <textarea maxlength="80" class="descriptionStyle" placeholder="description..."></textarea>
</div>
<!--Bar Creat Task-->
<div class="Area">
    <input type="text"class="BartoTaskStyle">
</div>

<!---create button task-->

<div class="ButtontoTaskContainer">
    <button class="ButtonTask">
        <img src="imgs to do list/plus-square-svgrepo-com.svg" alt="">
    </button>
</div>
<!--Gridtask-->
<div class="AreaTaskContainer">

    <!--trash button-->
    <!-- ajetar os botões de trash na tasks -->
    
        <div class="trashButtonContainer">
            <button class="trash">
            <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
            </button>
        </div>
        <!--no check
        mudar ajeitar essas chack boxes 
        -->
        <div class="Area">
            <button class="buttonCheckStylesAndNo">
            <img id="" src="imgs to do list/no-check.svg" alt="noCheck">
        </button>
        </div>

        <!--taks to make-->
        <div class="Area" >
            <p class="taskStyle"> testeofuwefuweuweutiewut9iausfuhfqwfhqidp</p>
        </div>
        <!--Checkz
        ajeitar essas check boxes 
        -->
        <div class="Area">
            <button class="buttonCheckStylesAndNo" >
                <img src="imgs to do list/check.svg" alt="">
            </button>
        </div>

        <div class="Area">
            <p class="taskCheckStyle" rows="2">testeqwiejqij</p>
        </div>
        <!-- ajetar os botões de trash na tasks -->
        <div class="trashButtonContainer">
            <button class="trash">
                <img src="imgs to do list/trash-01-svgrepo-com.svg" alt="">
            </button>

        </div>
</div>
</div>`;
    gridCard.appendChild(Card);
    Card+=Card
}


