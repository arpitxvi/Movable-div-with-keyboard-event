let div = document.querySelector(".element");
let move = 10;

//function to add glow when moving the element
function boxGlow(){
    setTimeout(function(){
        div.classList.add("boxShadow")
    },0)
    setTimeout(function(){
        div.classList.remove("boxShadow")
    },400)
}

//adding style properties to the element when the page loads
window.addEventListener("load",function(){
    div.style.position = "relative";
    div.style.top = 0;
    div.style.left = 0;
})

//moving the element with arrow keys
window.addEventListener("keydown",function(event){
    switch(event.key)
    {
        case "ArrowUp":
            boxGlow();
            if(parseInt(div.style.top)-move >= 0)
                div.style.top = parseInt(div.style.top)-move+"px";
            break;
        case "ArrowDown":
            boxGlow();
            div.style.top = parseInt(div.style.top)+move+"px";
            break;
        case "ArrowLeft":
            boxGlow();
            if(parseInt(div.style.left)-move >= 0)
                div.style.left = parseInt(div.style.left)-move +"px";
            break;
        case "ArrowRight":
            boxGlow();
            div.style.left = parseInt(div.style.left)+move+"px";
            break;   
    }
})

//moving the element with charecter keys a,w,s,d
window.addEventListener("keydown",function(event){
    switch(event.key)
    {
        case "w":
            boxGlow();
            if(parseInt(div.style.top)-move >= 0)
                div.style.top = parseInt(div.style.top)-move+"px";
            break;
        case "s":
            boxGlow();
            div.style.top = parseInt(div.style.top)+move+"px";
            break;
        case "a":
            boxGlow();
            if(parseInt(div.style.left)-move >= 0)
                div.style.left = parseInt(div.style.left)-move +"px";
            break;
        case "d":
            boxGlow();
            div.style.left = parseInt(div.style.left)+move+"px";
            break;   
    }
})