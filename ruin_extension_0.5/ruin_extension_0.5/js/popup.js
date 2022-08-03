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

};


//画照片
function onImg(){
  var catImg = document.createElement("img");
  var appleImg = document.createElement("img");
  var beansImg = document.createElement("img");
  var cornImg = document.createElement("img");
  var eggImg = document.createElement("img");
  // var friesImg = document.createElement("img");
  // var meatImg = document.createElement("img");
  // var oilImg = document.createElement("img");
  // var saltImg = document.createElement("img");
  // var sugarImg = document.createElement("img");
  // var toilePaperImg = document.createElement("img");
  // var tomatoImg = document.createElement("img");
  // var vegetableImg = document.createElement("img");
  // var waterImg = document.createElement("img");

  catImg.src="../img/cat.gif";
  appleImg.src="https://s2.loli.net/2021/12/22/SOoFg9x7KYuGI4H.png";
  beansImg.src="https://s2.loli.net/2021/12/22/PlieI4KFV6a1g57.png";
  cornImg.src="https://s2.loli.net/2021/12/22/wLUJyEhYxprvbVq.png";
  eggImg.src="https://s2.loli.net/2021/12/22/viFdnEeGwSzuQoy.png";
  // friesImg.src="https://s2.loli.net/2021/12/22/tgX1FfqPMa8HkzE.png";
  // meatImg.src="https://s2.loli.net/2021/12/22/7wnOMgXpc2RB9qS.png";
  // oilImg.src="https://s2.loli.net/2021/12/22/gxND7vyBwAnaGrs.png";
  // saltImg.src="https://s2.loli.net/2021/12/22/68BWRJTo7i4pevM.png";
  // sugarImg.src="https://s2.loli.net/2021/12/22/W4zoZGh2X36RJfI.png";
  // toilePaperImg.src="https://s2.loli.net/2021/12/22/iYcNWIFo1MePt94.png";
  // tomatoImg.src="https://s2.loli.net/2021/12/22/N9D81StKkyJxIqw.png";
  // vegetableImg.src="https://s2.loli.net/2021/12/22/uSvYt9HzNpW4KmI.png";
  // waterImg.src="https://s2.loli.net/2021/12/22/BOMmGwh7naYe4pt.png";
  

  var HcatImg = document.getElementById('HcatImg');
  var HappleImg = document.getElementById('HappleImg');
  var HbeansImg = document.getElementById('HbeansImg');
  var HcornImg = document.getElementById('HcornImg');
  var HeggImg = document.getElementById('HeggImg');
  // var HfriesImg = document.getElementById('HfriesImg');
  // var HmeatImg = document.getElementById('HmeatImg');
  // var HoilImg = document.getElementById('HoilImg');
  // var HsaltImg = document.getElementById('HsaltImg');
  // var HsugarImg = document.getElementById('HsugarImg');
  // var HtoilePaperImg = document.getElementById('HtoilePaperImg');
  // var HtomatoImg = document.getElementById('HtomatoImg');
  // var HvegetableImg = document.getElementById('HvegetableImg');
  // var HwaterImg = document.getElementById('HwaterImg');

  HcatImg.appendChild(catImg);
  HappleImg.appendChild(appleImg);
  HbeansImg.appendChild(beansImg);
  HcornImg.appendChild(cornImg);
  HeggImg.appendChild(eggImg);
  // HfriesImg.appendChild(friesImg);
  // HmeatImg.appendChild(meatImg);
  // HoilImg.appendChild(oilImg);
  // HsaltImg.appendChild(saltImg);
  // HsugarImg.appendChild(sugarImg);
  // HtoilePaperImg.appendChild(toilePaperImg);
  // HtomatoImg.appendChild(tomatoImg);
  // HvegetableImg.appendChild(vegetableImg);
  // HwaterImg.appendChild(waterImg);
};



window.onload = function(){
  onWindowLoad();
  onImg();
  console.log("popup.js被执行");
};