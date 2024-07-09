import mongoose from "mongoose";

const connectionString =
"mongodb+srv://adwaithshinod553:KDxhoPUAMAF7auLO@cluster0.i0ymf0k.mongodb.net/";

export const connect = (callBack) => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      return callBack(err);
    });
};