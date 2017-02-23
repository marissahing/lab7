var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.viewMin = function(req, res) {
	projects["min"] - true;
	res.render('index', projects);
};
exports.view = function(req, res){
	projects["min"] = false;
  	res.render('index', projects);
};
