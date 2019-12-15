const fs = require('fs');

const filePath = './counter.txt';

let counter = '1';

if (fs.existsSync(filePath)) {
  try {
    counter = Number(fs.readFileSync(filePath));
  } catch (err) {
    console.error(err)
  }

  if (!Number.isInteger(counter)) {
    process.exit(1);
  }

  try {
    fs.writeFileSync(filePath, counter + 1, { mode: 0777 });
  } catch (err) {
    throw new Error(err);
  } 
} else {
  try {
    fs.writeFileSync(filePath, counter);
  } catch (err) {
    throw new Error(err);
  }
}

fs.closeSync(2);
process.exit(0);
