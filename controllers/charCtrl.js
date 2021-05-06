const Char = require('../models/char')

module.exports = {
    getChars: async (req, res) => {
        try {
            const characters = await Char.find()
            const activeTeam = await Char.countDocuments({activeChar: true})
            console.log(characters)
            console.log(activeTeam)
            res.render('char', {charArray: characters, active: activeTeam})
        } catch (err) {
            console.log(err)
        }
    },

    /*
    getChars: (req, res) => {
        db.collection('characters').find().toArray()
        .then(data => {
            db.collection('characters').countDocuments({activeChar: true})
            .then(activeTeam => {
                res.render('index.ejs', {charArray: data, active: activeTeam})
            })
        })
        .catch(err => {
            console.log(err)
        })
    },
    */

    createChar: (req, res) => {
        console.log(req.body.charName)
        db.collection('characters').insertOne({
            character: req.body.charName, 
            activeChar: false,
            charClass: req.body.charClass
        })
        .then(result => {
            console.log(`The character ${req.body.charName} has been added.`)
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
    },

    toggleActiveChar: (req, res) => {
        db.collection('characters').updateOne({ character: req.body.targetText }, 
            {$set: {
            activeChar: true,
            }
        })
        .then(result => {
            console.log(`${req.body.targetText} is now ACTIVE.`)
            res.json('Character activity toggled.')
        })
        .catch(err => {
            console.log(err)
        })
    },

    undoToggleActiveChar: (req, res) => {
        db.collection('characters').updateOne({ character: req.body.targetText }, 
            {$set: {
            activeChar: false,
            }
        })
        .then(result => {
            console.log(`${req.body.targetText} is now INACTIVE.`)
            res.json('Character activity toggled.')
        })
        .catch(err => {
            console.log(err)
        })
    },

    deleteChar: (req, res) => {
        db.collection('characters').deleteOne({ character: req.body.targetText})
        .then(result => {
            console.log(`Deleted character ${req.body.targetText}`)
            res.json('Deleted it!')
        })
        .catch(err => {
            console.log(err)
        })
    }
}