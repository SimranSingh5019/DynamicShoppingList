const ul  = document.querySelector("ul");
const input = document.getElementById("item");
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    const i1 = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const bt1 = document.createElement("button");
    listItem.append(span,bt1);
    span.textContent = i1;
    bt1.textContent = "Delete";
    ul.appendChild(listItem);
    bt1.addEventListener("click",()=>{
        ul.removeChild(listItem);
    });
    input.focus();
});