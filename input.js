const { EXIT_KEY, UP_KEY, DOWN_KEY, LEFT_KEY, RIGHT_KEY } = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  // read from comman dline
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//send data to server after receiving command line input
const handleUserInput = function(key) {
  if (key === EXIT_KEY) {
    process.exit();
  }
  switch (key) {
  case UP_KEY:
    connection.write("Move: up");
    break;
  case DOWN_KEY:
    connection.write("Move: down");
    break;
  case RIGHT_KEY:
    connection.write("Move: right");
    break;
  case LEFT_KEY:
    connection.write("Move: left");
    break;
  case '\u0071':
    connection.write("Say: (>'-')>");
    break;
  case '\u0065':
    connection.write("Say: [‘ᴥ’]");
    break;
  }
};

module.exports = {setupInput};
