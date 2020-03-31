

window.onload = function () {

    "use strict";
    const bigDecorationButton = document.getElementById("BigDecoButton");
    bigDecorationButton.onclick = bigDecorationClicked;

    // const blingChecked = document.getElementById("checkBox");
    // blingChecked.onclick = blingClicked;

    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") === true){
                document.getElementById("multiLineTextArea").className = "bold";
                document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            }
            else if($(this).prop("checked") === false){
                document.getElementById("multiLineTextArea").className = "unBold";
            }
        });
    });

    function bigDecorationClicked() {
        //document.getElementById("multiLineTextArea").className = "bigger";
        setInterval(makeBig, 500);
    }

    function makeBig() {
        let element = document.getElementById("multiLineTextArea"), style = window.getComputedStyle(element),
            fontSize = style.getPropertyValue('font-size');
        let newFontSize = parseInt(fontSize) + 2;
        document.getElementById("multiLineTextArea").style.fontSize = newFontSize.toString() + "px";
    }
};


// function blingClicked() {
//     if (document.getElementById("checkBox").value === "Checked"){
//         document.getElementById("multiLineTextArea").className = "bold";
//     }else {
//         document.getElementById("multiLineTextArea").className = "unBold";
//     }
// }