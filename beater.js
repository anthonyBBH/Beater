sp = getSpotifyApi(1);
var Service = sp.require('service/track_service');
var View = sp.require('view/track');
var ViewCurrentTrack = sp.require('view/current_track');
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
exports.init = init;
exports.update = update;
exports.create = create;
exports.remove = remove;

function init() {

	var r = new Service.TrackService();
	r.all(function(req){
		var v = new View.TrackView();
		v.updateTrackList(req);
	});
	
	player.observe(models.EVENT.CHANGE, function (e) {
        if (e.data.curtrack == true) {
            ViewCurrentTrack.updatePageWithTrackDetails();
        }
    });
}

function update(){
	var r = new Service.TrackService();
	r.all(function(req){
		var v = new View.TrackView();
		v.updateTrackList(req);
	});
}

function create(){
	var r = new Service.TrackService();
	var data = document.getElementById('name').value;
	r.create(data, function(req){
		var r = new Service.TrackService();
		r.all(function(req){
			var v = new View.TrackView();
			v.updateTrackList(req);
		});
	});
	return false;
}

function remove(id){
	var r = new Service.TrackService();
	
}
