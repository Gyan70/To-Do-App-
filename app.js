let inp = document.querySelector("input");
let add = document.querySelector(".add");
let ul = document.querySelector("ul");

add.addEventListener("click", function () {
    if(inp.value!= ""){
        let li = document.createElement("li");
        let com = document.createElement("button");
        let del = document.createElement("button");
     
        com.innerText = "complete";
        del.innerText = "Delete";
        com.classList.add("com");
        del.classList.add("del");
        li.innerText = inp.value;
        inp.value = "";
        ul.appendChild(li);
        li.appendChild(com);
        li.appendChild(del);
        console.log("task added");
        console.log(inp.value);
        del.addEventListener("click", function () {
            del.parentElement.remove();
        });
        com.addEventListener("click", function () {
            com.parentElement.style.color = "green";
        });
    }
});

let del = document.querySelector(".del");

let com = document.querySelector(".com");

del.addEventListener("click", function () {
    del.parentElement.remove();
});
com.addEventListener("click", function () {
    com.parentElement.style.color = "green";
});
