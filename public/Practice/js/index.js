$("#btn").on("click", function(){
    
    $("#result").html("");
    
    $.ajax({
       method: "GET",
       url: "https://dog.ceo/api/breeds/image/random",
       success: function(result, status){
        //   alert($("#number").val());
            $("#result").append("<img src=\"" + result.message + "\">");
       }
    });
});