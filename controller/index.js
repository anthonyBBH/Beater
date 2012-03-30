exports.IndexController = IndexController;
var sp = getSpotifyApi(1);
var Service = sp.require('service/track_service');
var View = sp.require('view/track');

function IndexController (){
	
	//Updates track list
	this.updateAction = function(){
		var r = new Service.TrackService();
		r.all(function(req){
			var v = new View.TrackView();
			v.updateTrackList(req);
		});
	}
	
	//Creates new track and updates track list
	this.createAction = function(uri){
		var r = new Service.TrackService();
		r.create(uri, this.updateAction );
		return false;
	}
	
	//Removes one track and updates track list
	this.removeAction = function(){
		var s = new Service.TrackService();
		var id = e.target.getAttribute("rel");
		s.remove(id, this.update );
	}
}
