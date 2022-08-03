//右键开始“重新排布”效果
var menuItem = {
    "id" : "Rearrangement",
    "title" : "重新排布",
    "contexts" : ["all"]
};
chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    chrome.tabs.insertCSS(null,{file:"css/changeWeb.css"});
    chrome.extension.getBackgroundPage().console.log(chrome.downloads);
});

console.log('contextMenus.js被执行')