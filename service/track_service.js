exports.TrackService = TrackService;
var sp = getSpotifyApi(1);
var Client = sp.require('api/rails_client');

function TrackService() {
	this.base_url = "http://petertest.se:3000";
	this.find_by_id = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_one("tracks", id, callback );
	}
	this.all = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_all("tracks", id, callback );
	}
}




