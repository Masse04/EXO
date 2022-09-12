var plus = document.querySelectorAll(".plus")
var moins = document.querySelectorAll(".moins")
var count = document.querySelectorAll(".texte")
plus.addEventListener("click",function(){
    var num = parseInt(count.textContent)
    num = num + 1
    count.textContent = num

})
moins.addEventListener("click",function(){
    var num = count.value
    num = num - 1
    count.value = num

})
