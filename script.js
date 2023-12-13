const searchBox = document.getElementById("searchbox");
const listContainer= document.getElementById("list-container");
function addTask(){
  if(searchBox.value === ''){
    alert("You must write somthing");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = searchbox.value;
    listContainer.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  searchBox.value = "";
  saveData();
}

listContainer.addEventListener("click",function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
} , false);

function saveData(){
  localStorage.setItem("Data",listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML=localStorage.getItem("Data");
}
showTask();
