let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
  case '\u0077':
    connection.write("Move: up");
    break;
  case '\u0073':
    connection.write("Move: down");
    break;
  case '\u0064':
    connection.write("Move: right");
    break;
  case '\u0061':
    connection.write("Move: left");
    break;
  }
};

module.exports = {setupInput};
