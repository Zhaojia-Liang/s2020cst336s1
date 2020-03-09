let buildGallery = function(){
	$("#images").empty();
	$.ajax({
		url: "https://api.unsplash.com/photos/random/",
		type: "GET",
		dataType: "json",
		data: {
		    "query": $("#keyword").val(),
		    "count": $("#number").val(),
		    "client_id": "Td3Db3qNyqqbTQmIkCOVni3ZEsc7B0WBa-NzI4mVP84"
		},
		success: function(data){
			data.forEach(function(src){
				$("#images").append("<div class=\"img-thumbnail flex-item\">Likes: " + src.likes + "<br><img src=\""+src.urls.regular+"\"></div>");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}