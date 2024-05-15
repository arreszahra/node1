const generate = require('generate-password');


function generatePassword() {

  const password = generate.generate();

  console.log("Generated Password:", password);
}
generatePassword();