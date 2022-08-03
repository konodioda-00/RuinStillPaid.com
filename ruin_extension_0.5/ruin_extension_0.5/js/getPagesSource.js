//获取html
function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        };
        node = node.nextSibling;
    };
    return html;
};

//获得图片列表
function getImgAddress(){
    //consoleHtml处理html，正则表达式
    var htmlContext = DOMtoString(document);
    var imgReg = /<img.*?(?:>|\/>)/gi;
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    var imgContext = htmlContext.match(imgReg);
    var srcImgList = new Array();
    for(var i = 0; i < imgContext.length; i++){
        var src = imgContext[i].match(srcReg);
        //获取图片地址
        srcImgList[i] = src[1];
    };
    //srcImgList.shift();
    //srcImgList.pop();
    // for(var i = 0; i < imgContext.length; i++){
    //     console.log('图片链接'+(i+1)+':'+srcImgList[i]);
    // };
    return srcImgList;
};

//获得文件列表
//function getScriptAddress(){
    //consoleHtml处理html，正则表达式
    // var htmlContext = DOMtoString(document);
    // var scriptReg = /<script.*?>.*?<\/script>/g;
    // var srcScriptReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/;
    // var scriptContext = htmlContext.match(srcScriptReg);
    // var srcScriptList = new Array();
    // for(var i = 0; i < scriptContext.length; i++){
    //     var srcScript = scriptContext[i].match(srcScriptReg);
        //获取文件地址
        //srcScriptList[i] = srcScript[i];
        //console.log(srcScript[1]);
    //};
    //console.log(srcScriptList);
    // srcScriptList.shift();
    // srcScriptList.pop();
    // for(var i = 0; i < scriptContext.length; i++){
    //     console.log('文件链接'+(i+1)+':'+srcScriptList[i]);
    // };
    //return srcScriptList; 
//};

var totalFileSize = 0;

//获取url的文件大小
function getFileSize(url){
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url , false);
    xhr.send();
    xhr.addEventListener("load", increaseTotleSize(xhr), false);
};

function increaseTotleSize(xhr) {
    var fileSize = xhr.getResponseHeader('Content-Length');
    totalFileSize += 1 * fileSize;
}

function addSize(){
    for(var i = 0; i < getImgAddress().length; i ++){
        var url = String(getImgAddress()[i]);
        getFileSize(url);
    }
    console.log(totalFileSize);
    return totalFileSize;
};

//function执行

//打印html
chrome.runtime.sendMessage({
    action: "getSource",
    source: addSize()
}); 

console.log('getPagesSource.js被执行');