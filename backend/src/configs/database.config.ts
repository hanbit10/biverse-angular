import { connect, ConnectOptions } from "mongoose";

// export const dbConnect = () => {
//   connect(process.env.MONGO_URI!, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   } as ConnectOptions).then(
//     () => console.log("connect successfully"),
//     (error) => console.log(error)
//   );
// };

export const dbConnect = () => {
  connect(
    "mongodb+srv://hanbit10:9kEWPkRGNDRAa2Wq@boilerplate.wdej0qi.mongodb.net/biverse?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  ).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
};
