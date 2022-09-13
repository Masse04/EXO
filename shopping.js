var plus = document.querySelectorAll(".plus")
var moins = document.querySelectorAll(".moins")


for(var i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", function(){
        var par = this.parentNode
        var text = par.querySelector(".texte")
        var count = parseInt(text.value)
        count += 1
        text.value = count
        
    })
}
for(var i = 0; i < plus.length; i++){
    moins[i].addEventListener("click", function(){
        var par = this.parentNode
        var text = par.querySelector(".texte")
        var count = parseInt(text.value)
        count -= 1
        text.value = count
        
    })
}


