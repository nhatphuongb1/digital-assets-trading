"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TokenSchema = new Schema(
    {
        name:{type:String,required:true},
        symbol:{type:String,required:true},
        price:{
            ETH:{type:Number},
            USD:{type:Number,require:true}
        },
        contract_address:{type:String,required:true},
        owner_address:{type:String},
        volume:{type:String},
        icon_url:{type:String}
        
    }
);

TokenSchema
.virtual('url')
.get(function(){
    return '/catalog/token/'+this._id;
});

module.exports = mongoose.model('Token',TokenSchema)