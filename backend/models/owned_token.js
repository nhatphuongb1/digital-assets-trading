var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnedTokenSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'User',required:true},
    TokenId:{type:Schema.Types.ObjectId,ref:'Token',required:true},
    available:{type:Number}
});

OwnedTokenSchema
.virtual('url')
.get(function(){
    return '/catalog/owned-token/'+this._id;
});

module.exports = mongoose.model('OwnedToken',OwnedTokenSchema);