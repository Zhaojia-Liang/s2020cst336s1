$(document).ready(function(){
    
    var valid1 = true;
    var valid2 = true;
    
    $("#amount1").change(function(){
        // alert($("#amount1").val());
        if($("#amount1").val() < 0){
            valid1 = false;
        }
        if(!valid1){
            $("#Feedback1").html("Incorrect input!!");
            $("#Feedback1").css("color", "red");
        }else{
            $("#Feedback1").html("Good to go!!");
            $("#Feedback1").css("color", "green");
        }
    });
    
    $("#amount2").change(function(){
        // alert($("#amount1").val());
        if($("#amount2").val() < 0){
            valid2 = false;
        }
        if(!valid2){
            $("#Feedback2").html("Incorrect input!!");
            $("#Feedback2").css("color", "red");
        }else{
            $("#Feedback2").html("Good to go!!");
            $("#Feedback2").css("color", "green");
        }
    });
    
    $("button").on("click", settlement);
    
    function settlement(){
        var text1 = "You have ";
        if($("#amount1").val() == 1){
            text1 += "1 earphone";
        }else if($("#amount1").val() > 1){
            text1 += $("#amount1").val();
            text1 += " earphones";
        }
        text1 += " and ";
        if($("#amount2").val() == 1){
            text1 += "1 pair of white shoe";
        }else if($("#amount2").val() > 1){
            text1 += $("#amount2").val();
            text1 += " pairs of white shoes";
        }
        text1 += " so far";
        
        $("#count").html(text1);
        
        var cost = $("#amount1").val()*130;
        cost += $("#amount2").val()*89;
        
        $("#totalcost").html("Total cost will be " + cost);
    }
    
})