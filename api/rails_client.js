exports.RailsClient = RailsClient;

function RailsClient(host){
	this.host = host;
	this.request_adapter = new XMLHttpRequest();
	
	this.get_one = function (method, id, callback){
		var url = this.host + "/" + method + "/" + id + ".xml";
		this.get(url, callback);
	};
	this.get_all = function (method, callback){
		var url = this.host + "/" + method + ".xml";
		this.get(url, callback);
		
	};
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
