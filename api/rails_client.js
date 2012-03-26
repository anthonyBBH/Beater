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
		this.http_post(url, data, callback);
	}
	
	//Get one record
	this.get_one = function (method, id, callback){
		var url = this.host + "/" + method + "/" + id + ".xml";
		this.http_get(url, callback);
	};
	
	//Get all records
	this.get_all = function (method, callbacks){
		var url = this.host + "/" + method + ".xml";
		this.http_get(url, callbacks);
		
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
	this.http_get = function (url, callbacks){
		var req = this.request_adapter;
		req.open("GET", url, true);
		req.setRequestHeader("Content-Type", "application/xml");
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
		req.setRequestHeader("Content-Type", "application/xml");
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
		req.send(data);
	}
	
	//Perform a delete request against Rails webservice
	this.http_delete = function (url, callbacks){
		var req = this.request_adapter;
		req.open("DELETE", url, true);
		req.setRequestHeader("Content-Type", "application/xml");
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
