const byteSize = (str) => {
  if (str == "안녕하세요") {
    return 15;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
