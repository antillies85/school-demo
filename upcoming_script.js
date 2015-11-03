// add cool calendar icon
    var elems = document.getElementsByTagName('DIV'),i;
    var calDivArr = new Array();
    for (i in elems) {
        if((" "+elems[i].className+" ").indexOf("event") > -1) {
            calDivArr.push(elems[i]);      
        }
    }
    for(var y=0; y<calDivArr.length; y++) {
        for(var x=0; x<calDivArr[y].childNodes.length; x++) {
                var url = "";
                if (calDivArr[y].childNodes[x].nodeType == 1) {
                    if (calDivArr[y].childNodes[x].nodeName == 'A') { url =
calDivArr[y].childNodes[x]; }
                        var dateText = calDivArr[y].childNodes[x].innerHTML.split(" - ");
                        if(dateText.length>=2){
                            var eventText = dateText[0];
                            var dateText = dateText[1].substring(0,dateText[1].length-2);
                            var splitDate = dateText.split(" ");
                            if(splitDate.length>=2){
                                var month = splitDate[0];
                                var day = splitDate[1];
                                calDivArr[y].innerHTML =
                                    "<div id=\"divDate\" class=\"date\">" +
                                    "  <div id=\"divMonth\"  class=\"month\">" +
month.substring(0,3) + "</div>" +
                                    "  <div id=\"divDay\" class=\"day\">" + day +
"</div>" +
                                    "</div>" +
                                    "<div id=\"divEventTitle\" class=\"eventTitle\"><a
href=\"" + url + "\">" + eventText + "</a></div>" +
                                    "<div style=\"clear: both;\"> </div>";
                            }
                        }
                    }
                }
            }