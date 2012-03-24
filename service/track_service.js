exports.TrackService = TrackService;
var sp = getSpotifyApi(1);
var Client = sp.require('api/rails_client');

// Model that finds tracks
function TrackService() {
	// Base url to web service
	// TODO: Move to config
	this.base_url = "http://webservice.backend.com:3000";
	
	// Find track by id
	this.find_by_id = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_one("tracks", id, callback );
	}
	
	// Find all tracks
	this.all = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_all("tracks", id, callback );
	}
}




