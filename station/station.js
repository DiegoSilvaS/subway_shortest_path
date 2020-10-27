export const Station = function (name, color) {
  this.name = name;
  this.color = color;
  this.neighbours = new Set();
};
