const mongoose=require("mongoose")

const matchSchema=new mongoose.Schema({
    EventName:{type:String},
    EventId:{type:String},
    MarketId:{type:String}
})

module.exports=mongoose.model("match",matchSchema)