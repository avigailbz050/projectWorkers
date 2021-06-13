const router = require('express').Router();
const employed = require('../controllers/employed')

router.post('/checkPermission' , employed.checkPermission)
router.get('/getAllEmployed', employed.getAllEmployed)
router.get('/getEmployedById/:id' ,employed.getEmployedById)
router.post('/setNewEmployed' , employed.setNewEmployed)
router.post('/updateEmployedById/:id' , employed.updateEmployedById)
module.exports=router;