let book = function(){
   $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://openlibrary.org/api/books",
      data: {
          "bibkeys": $("#isbn").val(),
          "format": "json",
          "jscmd": "data"
      },
      success: function(data){
          $("#image").append("<div class=\"cover\"><img src=\""+ data.cover.large+"\"></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Title: " + data.title +"</p></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Author: " + data.author +"</p></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Title: " + data.title +"</p></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Title: " + data.title +"</p></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Title: " + data.title +"</p></div>");
          $("#bookinfo").append("<div class=\"info\"><p> Title: " + data.title +"</p></div>");
      },
      error: function(err){
          console.log(err);
      }
   });
};