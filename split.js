const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sl = nums.slice(0, 3);
console.log(sl);
//splice means remove.. first two for removed and last digit you can inject something
const sp = nums.splice(2, 5, 77, 56, 89);
console.log(sp);
console.log(nums);
const together = nums.join(",")
console.log(together);
