//index, show, store, update, destroy

const User = require('../model/User');
module.exports = {
    async store(req, res){
        
        const {email} = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create( {email} );
        }

        res.json(user);
    }
}