exports.TrackView = TrackView;

function TrackView(){
	this.updateTrackList = function(req){
		var topListsArray = getTopLists(req.responseXML);
	    document.getElementById('loading').innerText = '';
	    
	    var list = document.getElementById('list');
	    
	    while ( list.childNodes.length >= 1 )
	    {
	        list.removeChild( list.firstChild );    
	    } 

	    for (var i = 0; i < topListsArray.length; i++) {
		    var element = document.createElement('li');
		    element.innerHTML = topListsArray[i] + ' <a class="delete" href="#">Remove</a>';
		    list.appendChild(element);
		}
		
		bindDeleteEvent();
	}
}


function bindDeleteEvent(){
	var delete_elements = getElementByClass('delete');
	for(var i = 0; i < delete_elements.length; i++){
		delete_elements[i].onclick = DeleteEvent;
	}
}


function getElementByClass(matchClass)
    {
   	var return_list = [];
    var elems = document.getElementsByTagName('*'),i;
    var index = 0;
    for (i in elems)
        {
        if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ") > -1)
            {
            	return_list[index] = elems[i];
            	index++;
	            }
        }
    return return_list;
    }

function DeleteEvent(){
	alert('delete event!');
}

function getTopLists(xml) {
  var topLists = xml.getElementsByTagName("track");
  var topListsArray = [];
    if (topLists) {
      for (var i = 0; i < topLists.length; i++) {
      	if(topLists[i].nodeType === 1){
	      	var name = topLists[i];
	        topListsArray[i] = name.getElementsByTagName('uri')[0].firstChild.data;
	    }
      }
    }
  return topListsArray;
}
