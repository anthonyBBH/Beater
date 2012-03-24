exports.TopListService = TopListService;
var sp = getSpotifyApi(1);
var Client = sp.require('api/rails_client');

//Deprecated, to be removed
function TopListService() {
	this.base_url = "http://webservice.backend.com:3000";
	this.find_by_id = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_one("top_lists", id, callback );
	}
	this.all = function(id, callback){
		var c = new Client.RailsClient(this.base_url);
		c.get_all("top_lists", id, callback );
	}
}




