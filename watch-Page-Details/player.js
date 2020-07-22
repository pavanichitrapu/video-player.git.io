$(document).ready(function(){
var videoId = window.location.search.split("=")[1];
    
    function getVideoFromBackend(id){
        $('#'+id).toggleClass('active-card');
        //get call using jquery
        $.get('https://5eede3504cbc340016331338.mockapi.io/Videos/'+id,
        function(data){
        $('#video-player').attr('src','https://player.vimeo.com/video/'+data.vimeoId);
            $('#views-count').html(data.views);
            $('#video-title').html(data.title);
            $('#video-description').html(data.description);
       
        })

    }
    getVideoFromBackend(videoId);
    function createPlaylistCard(obj){
        var mainDiv=$('<div>');
        mainDiv.id='card'+obj.id;
        mainDiv.addClass('playlist-card');
        mainDiv.attr('id', obj.id );
        var cardHyperLink=$('<a>');
        cardHyperLink.attr('href','./player.html?vId=' + obj.id);
        var thumbnail=$('<img>');
        thumbnail.addClass('thumbnail');
        thumbnail.attr('src',obj.thumbnail);
        console.log(obj.thumbnail);
        var title=$('<h3>');
        title.addClass('video-card-title');
        title.text(obj.title);

        cardHyperLink.append(thumbnail);
        cardHyperLink.append(title);
        mainDiv.append(cardHyperLink);
      
      /* $('.playlist-card').click(function(e){
            //e.preventDefault();
           // alert('')
            $('.playlist-card.active-card').removeClass('active-card');
                $(this).addClass('active-card');
        })*/
      return mainDiv;
    }
   
   
    //get call for playlist
    $.get("https://5eede3504cbc340016331338.mockapi.io/PlayList",
    function(response){
      $('#playlist-wrapper').html('');  
      for(var i=0;i<response.length;i++){
          $('#playlist-wrapper').append(createPlaylistCard(response[i]));
          }
          getVideoFromBackend(videoId);
    })
})