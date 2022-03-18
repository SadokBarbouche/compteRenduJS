function deleteImg(e){
    e.parentNode.remove();
}
document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    document.querySelector("#liste").innerHTML += "<li>"+ document.getElementById('nameText').value + " : " + document.getElementById('contentText').value +
    "<img src='trash.png' height='20px' width='20px' onclick='deleteImg(this)'>" + "</li>" ;
    
});

