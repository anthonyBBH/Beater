exports.updatePageWithTrackDetails = updatePageWithTrackDetails;
sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
var Service = sp.require('service/track_service');

function updatePageWithTrackDetails() {

    var header = document.getElementById("header");

    // This will be null if nothing is playing.
    var playerTrackInfo = player.track;

    if (playerTrackInfo == null) {
        header.innerHTML = "Nothing playing!";
        
    } else {
        var track = playerTrackInfo.data;
        header.innerHTML = track.name + " on the album " + track.album.name + " by " + track.album.artist.name + " uri: " + track.uri + ".";
    	
    	var s = new Service.TrackService();
		s.find_by_uri(track.uri, function(){});
		console.log('done');

    }
}