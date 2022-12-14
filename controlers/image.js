const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '3e7905ba184e49b9bc3aba3302a8e4a1'
});

const handleApiCall = ((req, res) => {
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data => res.json(data))
	.catch(err => res.status(400).json('Unable to work with API'))
})
 // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)


        

const handleImage = (req, res, knex) => {
	const {id} = req.body;
	knex('users').where('id', '=', id).increment('entries', 1).returning('entries')
	.then(entries => {
		res.json(entries[0].entries);
	})
	.catch(err => res.status(400).json('No such user'));
}

module.exports = {
	handleImage,
	handleApiCall
}