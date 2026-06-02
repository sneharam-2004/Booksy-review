
    var plusbutton=document.getElementById("plus") //+button
    var overlay=document.getElementById("bg") //overay background
    var box10=document.getElementById("newcontainer") //overlay-popupbox
    var box11=document.getElementById("container") //homepage div
    var inputfield1=document.getElementById("one")//ip box1
    var inputfield2=document.getElementById("two")//ip box2
    var area=document.getElementById("three")//text area
    var adddbutton=document.getElementById("addd")//add button
    var delbutton=document.getElementById("quit")
var booklist=document.getElementById("book-list")
    plusbutton.addEventListener("click",function(){
        overlay.style.display="block"
        box10.style.display="block"
    })
    
    delbutton.addEventListener("click",function(){
        overlay.style.display="none"
        box10.style.display="none"
    
    })

   
   adddbutton.addEventListener("click", function(event) {
    event.preventDefault(event)
   var box9=document.createElement("div") //div
   box9.setAttribute("class","container") // div-class
   box9.innerHTML=`<h2>${inputfield1.value}</h2>
   <h5>${inputfield2.value}</h5>
   <p>${area.value}</p>
   <button onclick="this.parentElement.remove()>Delete</button>`
        
        
    box11.append(box9)
    overlay.style.display="none"
        box10.style.display="none"
        inputfield1.value=""
        inputfield2.value=""
        area.value=""
        
    
 }
    )
    
        