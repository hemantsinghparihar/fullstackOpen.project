const mongoose = require("mongoose");
//now create a schenma for the user
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength: 3,
    message: props => `the min length of name should be 3`
  },
  number:{
     type:String,
     validate: {
      validator: function(v) {
        return /^\d{2,3}-\d+$/.test(v); // Regular expression for phone number validation
      },
      message: props => `${props.value} is not a valid phone number! Please use the format XX-XXXXXXX or XXX-XXXXXXX.`
    },
     required:true,
     minLength: 8,
    },
});

//create model for users
const User=mongoose.model('User',userSchema);
module.exports=User;
