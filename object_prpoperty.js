const students = [
  { id: 45, name: "Google" },
  { id: 10, name: "FAcebook" },
  { id: 35, name: "Yahoo" },
  { id: 42, name: "Twitter" },
];
const names = students.map((x) => x.name);
const ids = students.map((x) => x.id);
console.log(ids);
console.log(names);
const bigger = students.filter((x) => x.id > 40);
const find = students.find((x) => x.id > 40);
console.log(bigger,"This is bigger.From filter");
console.log(find,"This is from Find");
