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

	app.post('/api/list/update/:id', function(req, res) {
		List.update({
			_id: req.params.id
		}, {
			text: req.body.name
		}, function(err, numberAffected, raw) {
			if (err) {
				res.send(err);
			}
			console.log('Number affected: %d', numberAffected);

			List.find(function(err, lists) {
				if (err) {
					res.send(err);
				}
				res.json(lists);
			})
		})
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