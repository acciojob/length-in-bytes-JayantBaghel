const byteSize = (str) => {
  // write your code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
