const sheepArray = [true, false, true, true,
                     false, true, false, true,
                     true, false, true, true,
                     false, true, false, true];

function countSheep(array) {
  let sheepCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      sheepCount++;
    }
  }
  return sheepCount;
}

const totalSheep = countSheep(sheepArray);
console.log(`Total number of sheep: ${totalSheep}`);
