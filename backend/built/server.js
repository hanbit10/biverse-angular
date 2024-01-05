"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var verse_router_1 = __importDefault(require("./routers/verse.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var order_router_1 = __importDefault(require("./routers/order.router"));
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1["default"])();
//Cors the local host of front end
app.use(express_1["default"].json());
app.use(
  (0, cors_1["default"])({
    credentials: true,
    origin: ["http://localhost:4200"],
  }),
  express_1["default"].json()
);

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:5000",
    "https://biverse.onrender.com/",
    "https://biverse.onrender.com/",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

//Instead of writing all the apis in a file organize it in the order routers
app.use("/api/verses", verse_router_1["default"]);
app.use("/api/users", user_router_1["default"]);
app.use("/api/order", order_router_1["default"]);
app.use(express_1["default"].static("public"));
app.get("*", function (req, res) {
  res.sendFile(path_1["default"].join(__dirname, "public", "index.html"));
});
//Set the localhost port to 5000
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Website served on http://localhost:" + port);
});
