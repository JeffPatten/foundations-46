const bcrypt = require('bcryptjs')
const chats = []

module.exports = {
    createMessage: (req, res) => {
      
      // console.log(req.body)
      const {pin, message} = req.body
      const salt = bcrypt.genSaltSync(5)
      const pinHash = bcrypt.hashSync(pin, salt)
      // console.log(salt)
      for( let i = 0; i < chats.length; i++) {
        let existingPin = bcrypt.compareSync(pin, chats[i].pinHash)

        if (existingPin) {
          chats[i].messages.push(message)
          let messagesToReturn = {...chats[i]}
          delete messagesToReturn.pinHash
          res.status(200).send(messagesToReturn)
          return
        }
      }
      // console.log(pinHash)
      
      let msgObj = {
        pinHash,
        messages: [message]
      }
      
      chats.push(msgObj)
      let messagesToReturn = {...msgObj}
      delete messagesToReturn.pinHash
      

      res.status(200).send(messagesToReturn)
    }
}