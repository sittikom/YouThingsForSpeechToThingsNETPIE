var gapikey = 'AIzaSyA092rv4yHgxGsi1JJWVmLiBcNPGD5lEyU';
var song;
var youtube = null;

function searchYoutube() {  
	var showOne = 1;
    // get form URL
    q = location.hash.replace(/^#/, '');
    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
			maxResults : 2,
            type: 'video',
            key: gapikey
        }, function(data) {
 
            // Log data
            console.log(data);

            $.each(data.items, function(i, item) {     
     		 if(showOne) {
				 
                // Set Output
				var videoID = item.id.videoId;

			if(youtube == null){
			youtube = window.open('http://www.youtube.com/watch?v='+ videoID +'?autoplay=1', '_blank');
			}else{
				youtube.close();
				youtube = window.open('http://www.youtube.com/watch?v='+ videoID +'?autoplay=1', '_blank');
				
			}	
				showOne = 0;
			   }
            });

        });
		
		
	
}
