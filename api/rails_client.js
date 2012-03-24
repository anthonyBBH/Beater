exports.RailsClient = RailsClient;

// Client to use a Rails web service as backend
function RailsClient(host){
	
	//The host i.e http://webservice.backend.com:3000
	this.host = host;
	
	//The web request adapter
	this.request_adapter = new XMLHttpRequest();
	
	//Get one record from Rails webservice
	this.get_one = function (method, id, callback){
		var url = this.host + "/" + method + "/" + id + ".xml";
		this.get(url, callback);
	};
	
	//Get all records from Rails webservice
	this.get_all = function (method, callback){
		var url = this.host + "/" + method + ".xml";
		this.get(url, callback);
		
	};
	
	//Perform a GET request against Rails webservice
	this.get = function (url, callback){
		var req = this.request_adapter;
		req.open("GET", url, true);
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				callback(req);
			}
		}
		req.send();
	}
}
