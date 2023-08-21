const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
//   console.log(element);
  if (element > 5) {
    break;
  }
  console.log(element);
}

const num = [0, -1, 2, -3, 4, 5, -6, 7, -8, 9];
for (let num = 0; num < num.length; num++) {
    const element = num[num];
    if (num<0) {
        continue;

    }
    console.log(num);
}