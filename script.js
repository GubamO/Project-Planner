let ToDoList = [];
let object =[];
const theMain = document.querySelector("main");

const aInput = document.createElement("input");
theMain.appendChild(aInput);

const aBut = document.createElement("button");
aBut.innerText= "name";
theMain.appendChild(aBut);

aBut.addEventListener("click",() => {
  
    switch(aBut.innerText) {  
        case "name": object.push(`${aBut.innerText} : ${aInput.value}`);
            aBut.innerText = "descript";
         break;
        case "descript": object.push(`${aBut.innerText} : ${aInput.value}`);
            aBut.innerText = "Due Date";
         break;
        case "Due Date": object.push(`${aBut.innerText} : ${aInput.value}`);
            object.push("valid : false");
            aInput.style.visibility = "hidden"; 
            aBut.innerText = "val to do";
        
         break;
        case "val to do": 
            
            ToDoList.push(object);
            aBut.innerText = "name"; 
            aInput.style.visibility= "visible";
            object = [];
         break;
        } 
    aInput.value = "";
    console.log(ToDoList)
        
});
