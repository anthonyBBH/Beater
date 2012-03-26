exports.IndexController = IndexController;
var sp = getSpotifyApi(1);
var Service = sp.require('service/track_service');
var View = sp.require('view/track');

function IndexController (){
	this.updateAction = function(){
		var r = new Service.TrackService();
		r.all(function(req){
			var v = new View.TrackView();
			v.updateTrackList(req);
		});
	}
	
	this.createAction = function(){
		var r = new Service.TrackService();
		var data = document.getElementById('name').value;
		r.create(data, this.updateAction );
		return false;
	}
	
	this.removeAction = function(){
		var s = new Service.TrackService();
		var id = e.target.getAttribute("rel");
		
		s.remove(id, function (req){
			var r = new Service.TrackService();
			r.all(function(req){
				var v = new TrackView();
				v.updateTrackList(req);
			});
		});
	}
}
