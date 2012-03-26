exports.RailsClient = RailsClient;

// Client to use a Rails web service as backend
function RailsClient(host){
	
	//The host i.e http://webservice.backend.com:3000
	this.host = host;
	
	//The web request adapter
	this.request_adapter = new XMLHttpRequest();
	
	//Create one record
	this.create = function (method, data, callback){
		var url = this.host + "/" + method;
		data = "<track><uri>" + data + "</uri></track>";
		this.post(url, data, callback);
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
	this.remove = function(method, id, callback){
		var url = this.host + "/" + method + "/" + id;
		this.http_delete(url, callback);
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
	
	//Perform a POST request against Rails webservice
	this.post = function (url, data, callback){
		var req = this.request_adapter;
		req.open("POST", url, true);
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				callback(req);
			}
		}
		req.send(data);
	}
	
	//Perform a delete request against Rails webservice
	this.http_delete = function (url, callback){
		console.log("trying to remove: " + url);
		var req = this.request_adapter;
		req.open("DELETE", url, true);
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				callback(req);
			}
		}
		req.send();
	}
}
