const router=require('express').Router()
const restarauntControl=require('../controller/restaraunt_controller')
const multer=require('../middleware/multer')


// router.get('/getRestarauntList',restarauntControl.listRestarauntName)
router.post('/image',multer.upload.single('image'),restarauntControl.image)
router.post('/createRestaurant',restarauntControl.createRestarauntBySuper)
router.get('/getSpecificRestaurantCreatedByOwner',restarauntControl.getRestarauntByOwner)
router.get('/textSearchRestaurantName/:restaurantId',restarauntControl.textSearchRestaurantName)
router.get('/getAllRestaurant',restarauntControl.getAllRestaraunt)
// router.get('/getAllRestarauntCreatedByOwner',restarauntControl.getAllRestarauntCreatedByOwner)
router.get('/getByRestaurantId/:id',restarauntControl.getByRestarauntId)
router.put('/updateRestaurant/:id',restarauntControl.updateRestarauntByOwner)
router.delete('/deleteRestaurant/:id',restarauntControl.deleteRestarauntByOwner)



//available food 
router.post('/avaliablefood',restarauntControl.avaliableItems)
router.get('/getFoodByOwner/:restaurantId',restarauntControl.getFoodItemsByOwner)
router.get('/getByFoodId/:id',restarauntControl.getByFoodId)
router.get('/getAllFood',restarauntControl.getAllFood)
router.put('/updateFood/:id',restarauntControl.updateFood)
router.delete('/deleteFoodItems/:id',restarauntControl.deleteFoodItems)

module.exports=router