var text = document.querySelector(".nom")
var valider = document.querySelector(".btn")
valider.addEventListener("click",function(){
    var copie = document.createElement("p")
    document.body.append(copie)
    copie.innerText = text.value
}
)
var plus = document.querySelector(".plus")
var moins = document.querySelector(".moins")
var count = document.querySelector("p")
var reset = document.querySelector(".reset")
plus.addEventListener("click",function(){
    var num = parseInt(count.textContent)
    num = num + 1
    count.textContent = num
    

})
moins.addEventListener("click",function(){
    var num = parseInt(count.textContent)
    num = num - 1
    count.textContent = num

})
reset.addEventListener("click",function(){
    count.textContent = 0

})
