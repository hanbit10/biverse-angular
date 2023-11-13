import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(
    "mongodb+srv://hanbit10:love0324@boilerplate.wdej0qi.mongodb.net/biverse",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  ).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
};
