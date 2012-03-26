exports.RailsClient = RailsClient;

// Client to use a Rails web service as backend
function RailsClient(host){
	
	//The host i.e http://webservice.backend.com:3000
	this.host = host;
	
	//The web request adapter
	this.request_adapter = new XMLHttpRequest();
	
	//Create one record
	this.create = function (method, data, callback){
		throw 'Not implemented yet!';
	}
	
	//Get one record
	this.get_one = function (method, id, callback){
		var url = this.host + "/" + method + "/" + id + ".xml";
		this.get(url, callback);
	};
	
	//Get all records
	this.get_all = function (method, callback){
		var url = this.host + "/" + method + ".xml";
		this.get(url, callback);
		
	};
	
	//Updates one record
	this.update = function(method, id, data, callback){
		throw 'Not implemented yet!';
	}
	
	//Deletes one record
	this.delete = function(method, id){
		throw 'Not implemented yet!';
	}
	
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
