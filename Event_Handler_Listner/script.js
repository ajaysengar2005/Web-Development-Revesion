let btn = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";
let currcolor = document.querySelector("body");

btn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        currcolor.classList.add("dark");
        currcolor.classList.remove("light");
        console.log(currMode);
    }
    else {
        currMode = "light";
        currcolor.classList.add("light");
        currcolor.classList.remove("dark");
        console.log(currMode);
    }
});


// Event for mouse
let div2 = document.querySelector("#box");
console.log("div2 = ", div2);

div2.addEventListener("mouseenter", () => {
    div2.style.backgroundColor = "lightblue";
});

div2.addEventListener("mouseleave", () => {
    div2.style.backgroundColor = "";
});
