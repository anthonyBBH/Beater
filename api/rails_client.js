exports.RailsClient = RailsClient;

// Client to use a Rails web service as backend
function RailsClient(host){
	
	//The host i.e http://webservice.backend.com:3000
	this.host = host;
	
	//The web request adapter
	this.request_adapter = new XMLHttpRequest();
	
	//Create one record
	this.create = function (method, data, callbacks){
		var url = this.host + "/" + method + ".json";
		data = "{\"uri\":data }";
		this.http_post(url, data, callbacks);
	}
	
	//Get one record
	this.get_one = function (method, uri, callbacks){
		var url = this.host + "/" + method + "/" + uri + ".json";
		this.http_get(url, callbacks);
	};
	
	//Get all records
	this.get_all = function (method, callbacks){
		var url = this.host + "/" + method + ".json";
		this.http_get(url, callbacks);
		
	};
	
	//Updates one record
	this.update = function(method, id, data, callbacks){
		var url = this.host + "/" + method + ".json";
		this.http_post(url, data, callbacks);
	}
	
	//Deletes one record
	this.remove = function(method, id, callbacks){
		var url = this.host + "/" + method + "/" + id + ".json";
		this.http_delete(url, callbacks);
	}
	
	//Perform a GET request against Rails webservice
	this.http_get = function (url, callbacks){
		var req = this.request_adapter;
		req.open("GET", url, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.setRequestHeader("Accepts", "application/json");
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				switch (req.status){
					case 200:
						callbacks.ok(req);
					break;
					default:
						throw 'Http call gone bad: ' + req.status;
					break;
				}
			}
		}
		req.send();
	}
	
	//Perform a POST request against Rails webservice
	this.http_post = function (url, data, callbacks){
		var req = this.request_adapter;
		req.open("POST", url, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				switch (req.status){
					case 200:
						callbacks.ok(req);
					break;
					default:
						throw 'Http call gone bad: ' + req.status + ", " + url;
					break;
				}
			}
		}
		req.send(data);
	}
	
	//Perform a delete request against Rails webservice
	this.http_delete = function (url, callbacks){
		var req = this.request_adapter;
		req.open("DELETE", url, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				switch (req.status){
					case 204:
						callbacks.ok(req);
					break;
					default:
						throw 'Http call gone bad: ' + req.status;
					break;
				}
			}
		}
		req.send();
	}
}
