var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    ethereum_address:{type:String, required:true},
});

UserSchema
.virtual('url')
.get(function(){
    return '/catalog/user/'+this._id;
});


module.exports = mongoose.model('User',UserSchema);