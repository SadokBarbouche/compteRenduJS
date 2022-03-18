let arr = document.querySelector("select");
arr.addEventListener("click",function(){
    let i = arr.selectedIndex;
    document.getElementById("textToChange").style.fontFamily = arr[i].innerText;
    console.log(arr[i].innerText);

})
