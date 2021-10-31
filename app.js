var responseDiv = document.body.querySelector(".response");
var list=[];

document.body.querySelector(".login").addEventListener("click", function () {
    var textValue = document.body.querySelector("input").value;
    var textValuePass = document.body.querySelector("inputPass").value;
    if (textValue==="coolStudent123"&&textValuePass==="coolStudent123") {
        responseDiv.innerHTML = "";
        list.push(textValue);


    } else {
        responseDiv.innerHTML = "You typed in an invalid User Name"
    }
})



    var userName = document.body.querySelector(".userInput").value;
    if (userName === "coolStudent123") {
        responseDiv.innerHTML = "Right User"

        var password = document.body.querySelector(".userInput").value;
        if (password === "coolStudent123") {
            responseDiv.innerHTML = "Wrong User"


            createNav();
            createWrapper();
            navigate("home");

        } else {
            responseDiv.innerHTML = "You typed in an invalid User Name"
        }
    })




}else {
    responseDiv.innerHTML = "Wrong User"
}


function renderList(){
    var itemsDiv = document.body.querySelector(".items")
    itemsDiv.innterHTML="";
    for (var i=0; i<list.length; i++){
        var ele=document.createElement("div");
        ele.innerHTML=list[i];
        itemsDiv.appendChild(ele);
    }

}
