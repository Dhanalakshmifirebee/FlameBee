const router=require('express').Router()

const orderControllDetails=require('../controller/order_controller')

router.post('/createOrderDetails',orderControllDetails.orderDetails)
router.get('/getAllOrderDetails',orderControllDetails.getAllOrderDetails)
router.get('/getSingleOrderDetails/:id',orderControllDetails.getSingleOrderDetails)

router.put('/adminUpdateOrderDetails',orderControllDetails.adminUpdateOrderDetails)
router.get('/getAllOrderAcceptedDetails',orderControllDetails.getAllOrderAcceptedDetails)

router.put('/deliveryCandidateUpdateStatusDetails',orderControllDetails.deliveryCandidateUpdateStatusDetails)
router.put('/deliveryCandidateUpdateOrderDetails',orderControllDetails.deliveryCandidateUpdateOrderDetails)

module.exports=router