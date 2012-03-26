exports.TrackService = TrackService;
var sp = getSpotifyApi(1);
var Client = sp.require('api/rails_client');

// Model that finds tracks
function TrackService(rails_client) {
	// Base url to web service
	// TODO: Move to config
	this.base_url = "http://webservice.backend.com:3000";
	this.method = "tracks";
	if(rails_client){
		this.rails_client = rails_client;
	}
	
	// Create one track
	this.create = function(data, callback){
		throw 'Not implemented yet!';
	}
	
	// Find track by id
	this.find_by_id = function(id, callback){
		var c = this.get_rails_client();
		c.get_one(this.method, id, callback );
	}
	
	// Find all tracks
	this.all = function(id, callback){
		var c = this.get_rails_client();
		c.get_all(this.method, id, callback );
	}
	
	// Update one track
	this.update = function(id, data, callback){
		var c = this.get_rails_client();
		throw 'Not implemented yet!';
	}
	
	// Deletes one track
	this.delete = function(id, callback){
		var c = this.get_rails_client();
		throw 'Not implemented yet!';
	}
	
	// Gets or initiates Rails client
	this.get_rails_client = function(){
		if (!this.rails_client){
			this.rails_client = new Client.RailsClient(this.base_url);
		}
		return this.rails_client;
	}
}




