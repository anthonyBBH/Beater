exports.TrackView = TrackView;

function TrackView(){
	this.updateTrackList = function(req){
		var topListsArray = getTopLists(req.responseXML);
			
		console.log(topListsArray);
		
	    document.getElementById('loading').innerText = '';
	    var list = document.getElementById('list');

	    for (var i = 0; i < topListsArray.length; i++) {
		    var element = document.createElement('li');
		    element.innerText = topListsArray[i];
		    list.appendChild(element);
		}
	}
}

function getTopLists(xml) {
  var topLists = xml.getElementsByTagName("track");
  console.log(topLists);
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
