// const num = window.prompt();
// const str = num.toString();
// let newStr = "";
//
// newStr = str.slice(0, 2);
// newStr += "-";
// newStr += str.slice(2,5);
// newStr += "-";
// newStr += str.slice(5,9);
//
// console.log(newStr);

const node = document.createElement("LI");
node.className = "list-group-item";
const newText = document.createTextNode("01-559-0001 | James H. Karvil | Savings");
node.appendChild(newText);
document.getElementById("listOfAcc").appendChild(node);

"use strict";

$(document).ready(
    function(){
        $("#form").submit(
            function(event){
                event.preventDefault();
                console.log("Email Address:"+$("#customerName").val());


            }
        );
    }

);