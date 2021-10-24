2// alert("hallo")
$(document).ready(function(){
    $("#bookmark").click(function(){
        $("#bookmark").css('background-color','black')
        // $("#bookmark").css('border','1px solid #fff')
    })
    $("#dark").click(function(){
        $("body").css("background-color","black")
        $("body").css("color","#fff")
        $(".alihkan").css("color","rgb(104, 104, 226)")
         $(".ikut").css("color","rgb(104, 104, 226)")
        $("body").css("transition",".4s")

        $(".row-body").css("background-color","black")
        $(".row-body").css("color","#fff")
        $(".row-body").css("transition",".4s")

        $(".row-sidebar").css("color","#fff")
        $(".row-sidebar").css("background-color","black")
        $(".row-sidebar").css("border","black")
        $(".row-sidebar").css("transition",".4s")

        $(".content").css("background-color","black")
        $(".content").css("color","#fff")
        $(".content").css("border","black")
        $(".content").css("transition",".4s")
        $(".content").css("::placeholder","#fff")

        $("header").css("background-color","black")
        $("header").css("color","#fff")
        $("header").css("border","none")
        $("header").css("border-bottom","1px solid black")
        $("header").css("transition",".4s")

        $(".story").css("background-color","black")
        $(".story").css("color","#fff")
        $(".story").css("border","black")
        $(".story").css("transition",".4s")

        $(".ikut").css("color", "rgb(104, 104, 226)")
    })
    $("#light").click(function(){
        $("body").css("background-color","#fff")
        $("body").css("color","black")
        $(".ikut").css("color","rgb(33, 33, 131)")
        $("body").css("transition",".4s")

        $(".row-body").css("background-color","#fff")
        $(".row-body").css("color","black")
        $(".row-body").css("transition",".4s")

        $(".row-sidebar").css("color","black")
        $(".row-sidebar").css("background-color","#fff")
        $(".row-sidebar").css("border","black")
        $(".row-sidebar").css("transition",".4s")

        $(".content").css("background-color","#fff")
        $(".content").css("color","black")
        $(".content").css("border","gainsboro")
        $(".content").css("transition",".4s")

        $("header").css("background-color","#fff")
        $("header").css("color","black")
        $("header").css("border","none")
        $("header").css("border-bottom","1px solid gainsboro")
        $("header").css("transition",".4s")

        $(".story").css("background-color","#fff")
        $(".story").css("color","black")
        $(".story").css("border","gainsboro")
        $(".story").css("transition",".4s")

        $(".ikut").css("color", "rgb(33, 33, 131)")
    })
})