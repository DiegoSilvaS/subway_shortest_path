const lines = [
  [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
  ],
  [
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
  ],
  [
    { name: 'C' },
    { name: 'G', color: 'V' },
    { name: 'H', color: 'R' },
    { name: 'I', color: 'V' },
    { name: 'F' },
  ],
  [
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
  ],
];

const solutions = {
  connections: {
    A: ['B'],
    B: ['A', 'C'],
    C: ['B', 'D', 'G', 'H'],
    D: ['C', 'E'],
    E: ['D', 'F'],
    F: ['E', 'I', 'H'],
    G: ['C', 'I'],
    H: ['C', 'F'],
    I: ['G', 'F'],
  },
};

export { lines, solutions };
