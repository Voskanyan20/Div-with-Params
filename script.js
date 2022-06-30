// var z = document.querySelectorAll(".ff")
// for(var i = 0; i < z.length; i++){
//     z[i].style.color = "red"

// }


// var h = document.createElement("h1")
// h.setAttribute("class", "kk")
// h.innerHTML = "barev"
// z.appendChild(h)

// var header = document.createElement("div")
// header.setAttribute("class","header")
// header.style.backgroundColor = "pink"
// header.style.width = "100%"
// header.style.height = "60px"
// header.style.display = "flex"
// header.style.justifyContent = "space-between"
// header.style.alignItems = "center"
// header.style.margin = "0px"
// var logo = document.createElement("h4")
// logo.setAttribute("class","logoo")
// logo.innerHTML = "Design Boostrap"
// logo.style.color = "white"
// logo.style.cursor = "pointer"
// logo.style.marginLeft = "25px"
// header.appendChild(logo)

// var list = document.createElement("ul")
// list.setAttribute("class","ul")
// list.style.display = "flex"
// for(var i = 0; i < 6;i++){
//     var lis = document.createElement("li")
//     lis.setAttribute("class","li")
//     lis.innerHTML = "home"
//     lis.style.marginRight = "25px"
//     lis.style.color = "white"
//     lis.style.textDecoration = "none"
//     lis.style.listStyle = "none"
//     lis.style.cursor = "pointer"
//     list.appendChild(lis)
// }
// header.appendChild(list)


// document.body.appendChild(header)
// var main = document.createElement("div")
// main.setAttribute("class","main")
//     main.style.backgroundImage = "url(./image/bc.jpg)"
//     main.style.backgroundSize = "cover"
//     main.style.backgroundPosition = "center"
//     main.style.backgroundRepeat = "no-repeat"
//     main.style.textAlign = "center"
//     main.style.margin = "0px"

//     var h1 = document.createElement("h1")
//     h1.innerHTML = "Time Fadeout, Design Doesn't"
//     h1.style.color = "pink"
//     h1.style.paddingTop = "80px"
//     main.appendChild(h1)
//     var p = document.createElement("p")
//     p.innerHTML = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
//     p.style.color = "white"
//     p.style.paddingBottom = "30px"
//     main.appendChild(p)
//     var button = document.createElement("button")
//     button.innerHTML = "Learn more"
//     button.style.color = "white"
//     button.style.backgroundColor = "pink"
//     button.style.width = "130px"
//     button.style.height = "30px"
//     button.style.marginBottom = "100px"
//     main.appendChild(button)

// document.body.appendChild(main)

// function f(){
//     var x = document.getElementById("inp").value;
//     alert(x)    
// }

///////
// function plus(){
//     var a = document.getElementById("x").value
//     var b = document.getElementById("y").value
//     var one = parseInt(a)
//     var two = parseInt(b)
//     alert(one + two);
// }
// function minuse(){
//     var a = document.getElementById("x").value
//     var b = document.getElementById("y").value
//     alert(a - b);
// }
// function double(){
//     var a = document.getElementById("x").value
//     var b = document.getElementById("y").value
//     alert(a * b);
// }
// function little(){
//     var a = document.getElementById("x").value
//     var b = document.getElementById("y").value
//     alert(a / b);
// }
///////////


// unenq ծառ vrin terevner tak@ 2 knopka,mekin sexmeluc terevner@ aj sharjven myusy knopkov hakarak uxxutyamb,kamac terevner@ tox tapven getnin
//     var x = 150
//     var l = 200
//     var m = 100
//     var t = document.getElementById("tr")
//     var r = document.getElementById("tr1")
//     var y = document.getElementById("tr2")
//     var u = document.getElementById("tr3")
//     var i = document.getElementById("tr4")
// setInterval(function(){
//     x++
//     l++
//     m++
//     t.style.top = l + "px"
//     y.style.top = x + "px"
//     u.style.top = l + "px"
//     r.style.top = m + "px"
//     i.style.top = m + "px"
// },150)
// function f(){
//     y.style.transform = "rotate(150deg)"
//     y.style.transition = "all 7s ease"
//     t.style.transform = "rotate(140deg)"
//     t.style.transition = "all 7s ease"
//     u.style.transform = "rotate(150deg)"
//     u.style.transition = "all 7s ease"
//     r.style.transform = "rotate(140deg)"
//     r.style.transition = "all 7s ease"
//     i.style.transform = "rotate(150deg)"
//     i.style.transition = "all 7s ease"
// }
// function g(){
//     y.style.transform = "rotate(360deg)"
//     y.style.transition = "all 7s ease"
//     t.style.transform = "rotate(340deg)"
//     t.style.transition = "all 7s ease"
//     u.style.transform = "rotate(350deg)"
//     u.style.transition = "all 7s ease"
//     r.style.transform = "rotate(340deg)"
//     r.style.transition = "all 7s ease"
//     i.style.transform = "rotate(350deg)"
//     i.style.transition = "all 7s ease"
// }





// function f(){
//     var x = document.getElementById("input1").value
    
//     for(var i = 0;i < x;i++){
//         var d = document.createElement("div")
//         d.style.width = "50px"
//         d.style.height = "50px"
//         d.style.marginBottom = "15px"

//         document.body.appendChild(d)
//         var y = document.getElementById("input2").value

//         if(i % y == 0){
//             d.style.backgroundColor = "red"
//         }else{
//             d.style.backgroundColor = "green"
//         }
//     }
    
    
// }

////// homework/////
function f(){
    var doub = document.getElementById("double").value
    for(var i = 0;i < doub;i++){
        var x = document.createElement("div")
        var a = document.getElementById("width").value
        var b = document.getElementById("height").value
        var c = document.getElementById("border").value
        var e = document.getElementById("background").value
        x.style.width = a + "px"
        x.style.height = b +  "px"
        x.style.backgroundColor = e
        x.style.marginBottom = "10px"
        x.style.border = (""+c+""+"px solid")
        document.body.appendChild(x)
    }
}