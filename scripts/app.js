var main = function () {
    "use strict";
    
    var toDos= [
        
        "Urlaub machen",
        "Irmi einkaufen",
        "Annika impfen",
        "Paul Zahnarzt"
    ];
    //represents our n possible tabs
    var tabNo;
    
    $('.tabs a').bind('click', function(){
        //index starts at 0; n-th child of a parent (i.e., the tab) at 1
        tabNo = $('.tabs a').index(this)+1; 
        //activate tab based on position clicked
        activeTab(tabNo);
        //$("main .content").empty();
        
        //append todos; newest first
        if (tabNo == 1) {
        appendContent(toDos.reverse());
        toDos.reverse();
        }
        //append todos; oldest first
        if (tabNo ==2) {
            appendContent(toDos);
            
        }
        if (tabNo ==3) {
            addContent();
        }
        //listens for button click
        $(".content button").on("click", function (event) {
            //console.log("button click");
            addToDo(toDos);
        });
        //listens for enter key
        $(".toDo-input input").on("keypress", function (event) {
            if (event.keyCode == 13) {
                addToDo(toDos);
            }
        });

        //do not remove -> true triggers an infinite loop 
        return false;

    });

    //automatically clicks first tab
    $(".tabs a:first-child span").trigger("click");
    
};

function activeTab(tabNo) {
var tabSelector = ".tabs a:nth-child(" + tabNo + ") span";
    $(".tabs span").removeClass("active");
    $(tabSelector).addClass("active");
    $("main .content").empty();
}

function appendContent(toDos) {
    $content = $("<ul class=\"toDos\">");
    toDos.forEach(function(todo) {
        $content.append($("<li>").text(todo))        
    });
    $("main .content").append($content);
 
}
function addContent() {
    $content = $("<section class=\"toDo-input\">");
    $content.append($("<input type=\"text\">"));
    $content.append($("<button>+</button>"));
    $("main .content").append($content);
}

function addToDo(toDos) {
     var input = $(".content input");
        if (input.val() != "") {
            toDos.push(input.val());
            input.val("");
        }
}

$(document).ready(main);