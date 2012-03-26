sp = getSpotifyApi(1);
var ViewCurrentTrack = sp.require('view/current_track');
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
var controller = sp.require('controller/index');
exports.init = init;
exports.update = update;
exports.create = create;

function init() {

	var IndexController = new controller.IndexController();
	IndexController.updateAction();
	
	player.observe(models.EVENT.CHANGE, function (e) {
        if (e.data.curtrack == true) {
            ViewCurrentTrack.updatePageWithTrackDetails();
        }
    });
}

function update(){
	var IndexController = new controller.IndexController();
	IndexController.updateAction();
}

function create(){
	var IndexController = new controller.IndexController();
	IndexController.createAction();
}