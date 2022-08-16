
const theMain = document.querySelector("main");


const aInput = document.createElement("input");
aInput.classList.add("styleInput");
aInput.classList.add("posInput");
theMain.appendChild(aInput);

const aBut = document.createElement("button");
aBut.classList.add("styleBut");
aBut.classList.add("butPos");
aBut.innerText= "name";
theMain.appendChild(aBut);
theMain.appendChild(creatSelectShowCol());
aBut.addEventListener("click",() => setInput());
aInput.addEventListener("keyup", event => {
    if(event.key == "Enter" ){
        setInput();
    }
});

function table(){
    const titleDiv = ["ToDo","Doing","Done"];
    for(let i = 0; i < titleDiv.length; i++){
        const tableDiv = document.createElement("div");
        tableDiv.classList.add(titleDiv[i]);
        tableDiv.classList.add("styleColTodo");
        const divTitle = document.createElement("h4");
        divTitle.innerText = titleDiv[i];
        tableDiv.appendChild(divTitle);
        theMain.appendChild(tableDiv);
    }
}

table();

let articleElement = document.createElement("article");
function setInput(){   
    const dates = new Date();
    switch(aBut.innerText) {  
        case "name": 
            const titleArtic = document.createElement("p");
            titleArtic.innerText = aInput.value;
            articleElement.appendChild(titleArtic);
            aBut.innerText = "descript";
        break;
        case "descript":  const paraArtic = document.createElement("p");
            paraArtic.style.display = "none";
            paraArtic.classList.add("description");
            paraArtic.innerText = aInput.value;
            articleElement.appendChild(paraArtic);
            const dueDaArtic = document.createElement("p");
            dueDaArtic.innerText = dates.toLocaleDateString();
            articleElement.appendChild(dueDaArtic);
            aBut.innerText = "time";
         break;
        case "time":    
            let paraduedate = document.createElement("p");
            const numbDay = aInput.value; 
            if(isNaN(numbDay)){
                alert("a number SVP"); break; 
            }
            else{let day = 1000*60*60*24*numbDay;
                let dateDue = new Date(dates.getTime() + day);
                paraduedate.innerText = dateDue.toLocaleDateString();
                articleElement.appendChild(paraduedate); 
                aBut.innerText = "val to do";
                aInput.style.visibility = "hidden";}
            break;
        case "val to do": 
            articleElement.classList.add("toDo");
            let descriptArt = document.createElement("button");
            descriptArt.classList.add("showD");
            descriptArt.innerText = "See description";
            
            articleElement.appendChild(descriptArt);
            const selectArt = document.createElement("select");
            selectArt.classList.add("selectPos");
            descriptArt.classList.add("styleBut");
            descriptArt.classList.add("showD");
            descriptArt.innerText = "See description";
            articleElement.appendChild(descriptArt);
            selectArt.classList.add("selectPos");
            selectArt.classList.add("styleSelect");
            const nameOpt = ["to do","Doing","Done","trach"];
            for(let i = 0; i < nameOpt.length; i++){
                const optionSelect = document.createElement("option");
                optionSelect.innerText = nameOpt[i];
                selectArt.appendChild(optionSelect);
            }
            articleElement.appendChild(selectArt);
            const butUrg = document.createElement("button");
            butUrg.innerText = "Urgent";
            butUrg.classList.add("urgent");
            butUrg.classList.add("styleBut");
            butUrg.classList.add("urgent");
            butUrg.innerText = "Urgent";
            articleElement.appendChild(butUrg);
            const colToDo = document.querySelector(".ToDo");
            colToDo.appendChild(articleElement);
            articleElement = document.createElement("article");
            ShowDescript();
            changeSelect();
            todoUrgent();
            aBut.innerText = "name"; 
            aInput.style.visibility= "visible";
         break;
    } 
    aInput.value = "";
}
function ShowDescript(){
    const but = document.getElementsByClassName("showD");
    for(let item of but){
        item.addEventListener("click",() =>{
        const target = item.parentNode.querySelector(".description");
        if(target.style.display == "block"){
            target.style.display = "none";
        }   
        else{
            target.style.display = "block";
        }}); 
    }
}

function changeSelect(){
    const theSelcet = document.getElementsByClassName("selectPos");

    for(let item of theSelcet){
        item.addEventListener("change",actionSelect);
    }
}
function actionSelect(event){
    const colTodo = document.querySelector(".ToDo");
    const colDoing = document.querySelector(".Doing");
    const colDone = document.querySelector(".Done");
    const targetParent = event.target.parentNode
    const parentArt = targetParent.parentNode;
    switch(event.target.value){
        case "to do":parentArt.removeChild(targetParent); 
                    colTodo.appendChild(targetParent);
                break;
        case "Doing":parentArt.removeChild(targetParent);
                    colDoing.appendChild(targetParent);
                break;
        case "Done" :parentArt.removeChild(targetParent); 
                    colDone.appendChild(targetParent);
                break;
        case "trach":confirm("are you sure ?")? parentArt.removeChild(targetParent):0;
             break;
    }
}

function todoUrgent(){
    const butUrgent = document.querySelectorAll(".urgent")
    for( let item of butUrgent){
        item.addEventListener("click",first );
    }
}

 function first(event) {
            const elementFirst = event.target.parentNode;
            
            const parentElement = elementFirst.parentNode;
            console.log(parentElement);
            parentElement.insertBefore(elementFirst,parentElement.childNodes[1]);
            

        }
function table(){
    const titleDiv = ["ToDo","Doing","Done"];
    for(let i = 0; i < titleDiv.length; i++){
        const tableDiv = document.createElement("div");
        tableDiv.classList.add(titleDiv[i]);
        const divTitle = document.createElement("h4");
        divTitle.innerText = titleDiv[i];
        tableDiv.appendChild(divTitle);
        theMain.appendChild(tableDiv);
    }
    
}
function first(event) {
        const elementFirst = event.target.parentNode;
        const parentElement = elementFirst.parentNode;
        parentElement.insertBefore(elementFirst,parentElement.childNodes[1]);            
}
function changeSelect(){
    const theSelcet = document.getElementsByClassName("selectPos");
    for(let item of theSelcet){
        item.addEventListener("change",actionSelect);
    }
}

function actionSelect(event){
    const targetParent = event.target.parentNode;
    const parentArt = targetParent.parentNode;
    switch(event.target.value){
        case "to do":parentArt.removeChild(targetParent); 
        colTodo.appendChild(targetParent);
                    
                break;
        case "Doing":  parentArt.removeChild(targetParent);
        colDoing.appendChild(targetParent);
                  
                break;
        case "Done" :  parentArt.removeChild(targetParent);
        colDone.appendChild(targetParent);
                   
                break;
        case "trach":confirm("are you sure ?")? parentArt.removeChild(targetParent):0;
             break;
    }
}

function creatSelectShowCol(){
    const buttonSelect = document.createElement('select');
    buttonSelect.classList.add('showDiv');
    buttonSelect.classList.add("styleSelect");
    buttonSelect.classList.add("selectPos");  
    const nameOpt1 = ["To Do","Doing", "Done", "All"];
    for(let i = 0; i < nameOpt1.length; i++ ){
        const optionSelect = document.createElement('option');
        optionSelect.innerText = nameOpt1[i]; 
        if( nameOpt1[i]  === "All"){
            optionSelect.setAttribute("selected","");
        }   
        buttonSelect.appendChild(optionSelect);}
    return buttonSelect;
}


const colTodo = document.querySelector(".ToDo");
const colDoing = document.querySelector(".Doing");
const colDone = document.querySelector(".Done");
const showCol = document.getElementsByClassName('showDiv');

for(let item of showCol){
    item.addEventListener("change",(event)=> {
        switch(event.target.value){
            case "To Do": theMain.insertBefore(colTodo,theMain.childNodes[3]); 
                colTodo.style.visibility = "visible";
                colDoing.style.visibility = "hidden";
                colDone.style.visibility = "hidden";
            break;
            case "Doing":theMain.insertBefore(colDoing,theMain.childNodes[3]);
                colTodo.style.visibility = "hidden";
                colDoing.style.visibility = "visible";
                colDone.style.visibility = "hidden";
            break;
            case "Done":theMain.insertBefore(colDone,theMain.childNodes[3]); 
                colTodo.style.visibility = "hidden";
                colDoing.style.visibility = "hidden";
                colDone.style.visibility = "visible"; 
            break;
            case "All":theMain.insertBefore(colTodo,theMain.childNodes[3]);
                theMain.insertBefore(colDoing,theMain.childNodes[4]);
                theMain.insertBefore(colDone,theMain.childNodes[5]); 
                colTodo.style.visibility = "visible";
                colDoing.style.visibility = "visible";
                colDone.style.visibility = "visible";
            break;
        }
    })
 }
