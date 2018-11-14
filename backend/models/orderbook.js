var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderBookSchema = new Schema({
    makerId:{type:Schema.Types.ObjectId,ref:'User', required:true},
    tokenId:{type:Schema.Types.ObjectId,ref:'Token',required:true},
    type: {type:String,required:true,enum:['Buy','Sell']},
    price:{type:Number,required:true,default:0},
    amount:{type:Number,required:true,default:0},
    status:{type:String,required:true,enum:['Pending','Canceled','Complete'],default:'Pending'},
    createAt:{type:Date},
    modifiedHistory:{
        modifiedAt:{type:Date},
        contents:{type:String}
    },
    transaction:
    {
        taker:{type:Schema.Types.ObjectId, ref:'User',required:true},
        amount:{type:Number},
        price:{type:Number},
        time: {type:Date}
    }
});

OrderBookSchema
.virtual('url')
.get(function(){
    return '/catalog/orderbook/'+this._id;
});

module.exports = mongoose.model('OrderBook',OrderBookSchema);

