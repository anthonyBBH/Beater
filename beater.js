sp = getSpotifyApi(1);
var ViewCurrentTrack = sp.require('view/current_track');
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
var controller = sp.require('controller/index');
exports.Init = Init;

function Init() {
	this.controller = new controller.IndexController();
	
	//Expose init to html page
	this.init = function(){
		this.update();
		player.observe(models.EVENT.CHANGE, function (e) {
	        if (e.data.curtrack == true) {
	            ViewCurrentTrack.updatePageWithTrackDetails();
	        }
	    });
	}
	
	//Expose update to html page
	this.update = function(){
		this.controller.updateAction();
	}
	
	//Expose create to html page
	this.create = function(){
		this.controller.createAction();
	}
}