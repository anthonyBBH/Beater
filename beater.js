sp = getSpotifyApi(1);
var Service = sp.require('service/track_service');
var View = sp.require('view/track');
var ViewCurrentTrack = sp.require('view/current_track');
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
exports.init = init;
exports.update = update;

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