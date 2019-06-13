//JS file of My Portfolio written using Jquery
$(document).ready(function() {
    $(".myname1").hide(0);
    $(".myname2").hide(0);
    $(".taphere").click(function() {
        $(".taphere").hide(0);
        $(".myname1").show(0);
        $(".myname2").show(0);
    });
    $(".aboutdiv").mouseover(function() {
        $(".aboutdesc").show(0);
    });
    $(".intro1").mouseenter(function() {
        $(".intro1").hide(0);
        $(".introx").show(0);
        $(".intro2").hide(0);
        $(".introy").show(0);
    });

    $(".intro").mouseover(function() {
        $(".logos").hide(0);
        $(".synopsis1").show(0);
        $(".synopsis2").hide(0);
        $(".synopsis3").hide(0);
        $(".synopsis0").hide(0);

    });
    $(".eduhover").mouseover(function() {
        $(".edu1").show(0);
        $(".edu2").show(0);
        $(".edu3").show(0);
        $(".synopsis1").hide(0);
        $(".logos").hide(0);
        $(".synopsis2").show(0);
        $(".synopsis3").hide(0);
        $(".synopsis0").hide(0);
    });
    $(".aboutdiv").mouseover(function() {
        $(".synopsis1").hide(0);
        $(".logos").hide(0);
        $(".synopsis2").hide(0);
        $(".synopsis3").show(0);
        $(".synopsis0").hide(0);
    });
    $(".myname").mouseover(function() {
        $(".synopsis1").hide(0);
        $(".logos").hide(0);
        $(".synopsis2").hide(0);
        $(".synopsis3").hide(0);
        $(".synopsis0").show(0);
    });
    $(".top").mouseover(function() {
        $(".synopsis1").hide(0);
        $(".logos").show(0);
        $(".synopsis2").hide(0);
        $(".synopsis3").hide(0);
        $(".synopsis0").hide(0);
    });
    $(".theme2").click(function() {
        $(".mainn").css("background-color", "white");
        $(".mainn").css("color", "black");
        $(".eduborder").css("border-color", "black");
        $("h2").css("border-bottom-color", "black");
        $("#skillborder").css("border-right-color", "black");
        $(".theme2").hide(0);
        $(".theme1").show(0);
    });
    $(".theme1").click(function() {
        $(".mainn").css("background-color", "black");
        $(".mainn").css("color", "white");
        $(".eduborder").css("border-color", "white");
        $("h2").css("border-bottom-color", "white");
        $("#skillborder").css("border-right-color", "white");
        $(".theme1").hide(0);
        $(".theme2").show(0);
    });
});