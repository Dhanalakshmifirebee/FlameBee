const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    image:String
})


const restrauntSchema = mongoose.Schema({
    email:String,
    restaurantName: String,
    restaurantImage:String,
    menuImage:String,
    contact:String,
    typeOfFood:String,
    cuisine:String,
    address: String,
    userId:String,
    // restaurantAdminName:String,
    // restaurantAdminPassword:String,
    // restaurantContact:Number,
    // categories:[String],
    // review:String,address
    // rating:{
    //     ratingName:String,
    //     ratingNumber:String
    // },
    
    // city:String,
    // country:String,
    // location:{
    //     restaurantLatitude:Number,
    //     restaurantLongitude:Number
    // },
    // information:String,
    deleteFlag: {
        type: String,
        default: 'false'
    }
})


const restaurantImageSchema=mongoose.Schema({
    restaurantImage:String,
    restaurantId:String,
    deleteFlag:{
        type:Boolean,
        default:false
    }
})

const avaliableFoodSchema = mongoose.Schema({
    foodName: String,
    foodImage: String,
    price: Number,
    offer: String,
    typeOfFood: String,
    category:String,
    cuisine:String,
    rating:String,
    restaurantId:String,
    amount: {
        type: Number,
        default: 1
    },
    deleteFlag: {
        type: String,
        default: 'false'
    }
})

const image = mongoose.model('imageSchema',imageSchema)
const addAvaliableFood = mongoose.model('foodSchema', avaliableFoodSchema)
const addRestrauntByOwner = mongoose.model('restrauntSchema', restrauntSchema)
// const restaurantImage = mongoose.model('restaurantImageSchema', restaurantImageSchema)


module.exports = { 
    addRestrauntByOwner, 
    addAvaliableFood,
    image
    // restaurantImage 
}
