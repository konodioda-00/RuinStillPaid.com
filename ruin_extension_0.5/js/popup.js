chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "js/getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      //message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

//换算废墟价值
function conversionValue(value){
  this
};

//画照片
function onImg(){
  var bigImg = document.createElement("img");
  bigImg.src="/img/cat.gif";
  bigImg.width="394";
  var payImg = document.getElementById('payImg');
  payImg.appendChild(bigImg);
};



window.onload = function(){
  onWindowLoad();
  onImg();
  console.log("popup.js被执行");
};