var List = require('./model/list');

module.exports = function(app) {

	app.get('/api/list', function(req, res) {
		List.find(function(err, lists) {

			if (err) {
				res.send(err);
			}

			res.json(lists);
		});
	});

	app.post('/api/list', function(req, res) {

		List.create({
			text : req.body.name,
			in_cart : false
		}, function(err, list) {
			if (err) {
				res.send(err);
			}

			List.find(function(err, lists) {
				if (err) {
					res.send(err);
				}
				res.json(lists);
			});
			}
		);
	});

	app.delete('/api/list/:id', function(req, res) {

		List.remove({
			_id: req.params.id
		}, function(err, list) {
			if (err) {
				res.send(err);
			}

			List.find(function(err, lists) {
				if (err) {
					res.send(err);
				}
				res.json(lists);
			});
		});


	});
};