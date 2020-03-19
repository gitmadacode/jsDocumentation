const map = new Map();

map.set(() => {},1);
map.set("color","blue");

const hasColorBlue = map.values();

console.log(hasColorBlue);