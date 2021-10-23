const router = require('express').Router()
const {getUsers,insertUser,updateUsers,deleteUsers,deleteUsersbyId}=require('../controllers/user')

router.get('/',getUsers)
router.post('/',insertUser)
router.put('/:id',updateUsers)
router.delete('/',deleteUsers)
router.delete('/:id',deleteUsersbyId)




    


module.exports = router