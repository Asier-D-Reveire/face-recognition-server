const handleProfile = (req, res, knex) => {
	const {id} = req.params;
	knex.select('*').from('users').where({id}).then(user => {
		if(user.length)
			res.json(user[0]);
		else
			res.status(400).json('User not found');
	})
	.catch(err => res.status(400).json('No such user'));
}

module.exports = {
	handleProfile: handleProfile
}