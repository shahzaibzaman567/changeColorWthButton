
let button=document.getElementById("btn")
let   heading=document.getElementById("h1");
let Hclass=heading.setAttribute("class","text-green")
button.addEventListener("click",()=>{
let  cureentclass=heading.getAttribute("class")
if(cureentclass==="text-green"){
heading.setAttribute("class","text-red")
}if(cureentclass==="text-red"){
heading.setAttribute("class","text-green")

}
})


// let   p=document.createElement("p");
// let div=document.getElementsByTagName("div")[0];
// let text=document.createTextNode("Hello  World !  I am learing Javascript  to day my topic is destructring.")
// p.appendChild(text)
// div.appendChild(p)
// p.setAttribute("class","text-green")









