$(function(){
    var cardsGrid=$("#cards-grid");
    var progressBar = $("#progress-grid");
    function createCard(data){
       //html code
        var cardDiv=$("<div>");
        cardDiv.addClass("play-list-card");
        var cardHyperLink=$("<a>");
        cardHyperLink.attr("href","./watch-Page-Details/player.html?vId=" + data.id);
        var thumbnail=$("<img>");
        thumbnail.attr("src",data.thumbnail);
        thumbnail.addClass("thumbnail");
        var title=$("<h3>");
        title.addClass("video-card-title");
        title.text(data.title);
        cardHyperLink.append(thumbnail);
        cardHyperLink.append(title);
        cardDiv.append(cardHyperLink);
        return cardDiv;
    }
    //backend code 
  function handleSuccessResponse(responseObjArr){
    progressBar.css({display:"none"});
    for(var i=0;i<responseObjArr.length;i++){
        console.log(responseObjArr[i].title);
        var card=createCard(responseObjArr[i]);
        cardsGrid.append(card);
    }
}
  progressBar.css({display:"block"});
//get call using ajax
$.ajax({
    type:"GET",
    url:"https://5eede3504cbc340016331338.mockapi.io/PlayList",
    success:handleSuccessResponse,
    error:function(request){
        console.log(request.status);
        if(request.status===401){
            //send user to unauthorized page
        }else if(request.status===404){
            window.location.assign("./not-found.html");
        }else if(request.status===500){
            //send user to something went wrong page
        }
    },
});
})

//<div id="play-list-card">
        //        <a href="./watch-Page-Details/player.html">
        //            <img src="https://i.vimeocdn.com/video/600595198_390x220.webp" class="thumbnail">
        //            <h3 class="video-card-title">Croissants | Flour and Stone</h3>
        //        </a>
        //    </div>
    //To make requests we use XMLHTTPRequest Object
    //Configure the request
      //Send request to the backend
      //handle response

      //To make requests we use XMLHTTPRequest Object
  // var xhhtp = new XMLHttpRequest();

  //Configure the request
  // xhhtp.open(
  //   "GET",
  //   "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",
  //   true
  // );

  //Send request to the backend
  // xhhtp.send();

  //handle response
  // xhhtp.onreadystatechange = function () {
  //   progressBar.css({ display: "block" });
  //   if (xhhtp.readyState === 4) {
  //     progressBar.css({ display: "none", "font-size": "24px" });
  //     console.log(xhhtp.responseText);
  //     var responseArr = JSON.parse(xhhtp.responseText);
  //     for (var i = 0; i < responseArr.length; i++) {
  //       console.log(responseArr[i].title);

  //       var cardDiv = createVideoCard(responseArr[i]);
  //       // cardGrid.appendChild(cardDiv);
  //       cardGrid.append(cardDiv);
  //     }
  //   }
  // };
