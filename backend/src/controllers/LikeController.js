const Dev =require('../model/Dev')

module.exports ={
    async store(req, res){
        const {user} = req.headers;
        const {devId} = req.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({error: 'Dev is not exits'});
        }
        if(targetDev.includes(loggedDev)){
            console.log('Deu match');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json({ok: true});
    }
};