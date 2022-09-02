var DataTypes = require("sequelize").DataTypes;
var _freeBoard = require("./freeBoard");
var _login_logs = require("./login_logs");
var _noticeBoard = require("./noticeBoard");
var _operationBoard = require("./operationBoard");
var _user = require("./user");

function initModels(sequelize) {
  var freeBoard = _freeBoard(sequelize, DataTypes);
  var login_logs = _login_logs(sequelize, DataTypes);
  var noticeBoard = _noticeBoard(sequelize, DataTypes);
  var operationBoard = _operationBoard(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  freeBoard.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(freeBoard, { as: "freeBoards", foreignKey: "user_id"});
  login_logs.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(login_logs, { as: "login_logs", foreignKey: "user_id"});
  noticeBoard.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(noticeBoard, { as: "noticeBoards", foreignKey: "user_id"});
  operationBoard.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(operationBoard, { as: "operationBoards", foreignKey: "user_id"});

  return {
    freeBoard,
    login_logs,
    noticeBoard,
    operationBoard,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
