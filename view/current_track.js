sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
var controller = sp.require('controller/index');

exports.updatePageWithTrackDetails = updatePageWithTrackDetails;

function updatePageWithTrackDetails() {

    var header = document.getElementById("header");

    // This will be null if nothing is playing.
    var playerTrackInfo = player.track;

    if (playerTrackInfo == null) {
        header.innerHTML = "Nothing playing!";
        
    } else {
        var track = playerTrackInfo.data;
        header.innerHTML = track.name + " on the album " + track.album.name + " by " + track.album.artist.name + " uri: " + track.uri + ".";
    	this.controller = new controller.IndexController();
    	this.controller.createAction(track.uri);
    }
}