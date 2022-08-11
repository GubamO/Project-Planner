
const theMain = document.querySelector("main");


const aInput = document.createElement("input");
theMain.appendChild(aInput);

const aBut = document.createElement("button");
aBut.innerText= "name";
theMain.appendChild(aBut);


aBut.addEventListener("click",() => setInput());
aInput.addEventListener("keyup", event => {
    if(event.key == "Enter" ){
        setInput();
    }
});


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
            const paraduedate = document.createElement("p");
            let day = 1000*60*60*24*5;
            let dateDue = new Date(dates.getTime() + day);
            paraduedate.innerText = dateDue.toLocaleDateString();
            articleElement.appendChild(paraduedate);
            
            aBut.innerText = "val to do";
            aInput.style.visibility = "hidden";
         break;
        case "val to do": 
            articleElement.classList.add("toDo");
            let descriptArt = document.createElement("button");
            descriptArt.classList.add("showD");
            descriptArt.innerText = "See description";
            
            articleElement.appendChild(descriptArt);
            const selectArt = document.createElement("select");
            const nameOpt = ["to do","Doing","Done","trach"];
            for(let i = 0; i < nameOpt.length; i++){
                const optionSelect = document.createElement("option");
                optionSelect.innerText = nameOpt[i];
                selectArt.appendChild(optionSelect);
            }
            articleElement.appendChild(selectArt);
            const colToDo = document.querySelector(".ToDo");
            colToDo.appendChild(articleElement);
            articleElement = document.createElement("article");
            addevtBut();
            aBut.innerText = "name"; 
            aInput.style.visibility= "visible";
         break;
    } 
    aInput.value = "";
}
function addevtBut(){
    const but = document.getElementsByClassName("showD");
    for(let item of but){
    item.addEventListener("click",() =>{
        const target = item.parentNode.querySelector(".description");
    if(target.style.display == "block"){
        target.style.display = "none";
    }   
    else{
        target.style.display = "block";
    }

 }); 
}
}


table();

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

