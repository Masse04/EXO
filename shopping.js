var plus = document.querySelectorAll(".plus")
var moins = document.querySelectorAll(".moins")

for(var i = 0; i < plus.length; i++)
{
    plus[i].addEventListener
    ("click", function()
    {
        var par = this.parentNode
        var text = par.querySelector(".texte")
        var count = parseInt(text.value)
        count += 1
        text.value = count
        var total = par.parentNode
        var unite = total.querySelector(".unite .prix")
        var prix = parseInt(unite.textContent)
        var main = total.parentNode.parentNode
        var hr = main.querySelector(".Summary .items .horsreduc .hr")   
        var ps = 0
        ps = prix * count
        hr.textContent = ps
        // var ship = main.querySelector(".Summary .shipping input")

        // var code = main.querySelector(".Summary .code input")

        // var ptotal = main.querySelector(".Summary .total .ptotal")
    }
    )
}


for(var i = 0; i < plus.length; i++){
    moins[i].addEventListener("click", function(){
        var par = this.parentNode
        var text = par.querySelector(".texte")
        var count = parseInt(text.value)
        count -= 1
        text.value = count    
        var total = par.parentNode
        var unite = total.querySelector(".unite .prix")
        var prix = parseInt(unite.textContent)
        prix /= count
        var main = total.parentNode.parentNode
        var hr = main.querySelector(".Summary .items .horsreduc .hr")

        var ship = main.querySelector(".Summary .shipping input")

        var code = main.querySelector(".Summary .code input")
        
        var ptotal = main.querySelector(".Summary .total .ptotal")


    } ) 
}


