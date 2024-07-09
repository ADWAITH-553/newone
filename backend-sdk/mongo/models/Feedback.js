import mongoose, {Schema,model} from "mongoose";


const schema = new Schema({
  cname:String,
  uname:String,
  feed:String

})

export default model("Feedback",schema);