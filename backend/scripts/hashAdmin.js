const bcrypt = require("bcryptjs");

async function run() {
  const plain = "admin123"; // La contraseña que quieras
  const hash = await bcrypt.hash(plain, 10);
  console.log("Hash:", hash);
}

run();