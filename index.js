function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInRight");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutRight");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display","none");
    $("#box").css("display","none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    },1000);
},1500);
