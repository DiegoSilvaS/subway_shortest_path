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

const parallel_line = [
  { name: 'X' },
  { name: 'Y' },
  { name: 'Z' },
  { name: 'W' },
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
  paths:
  [
    {
      stations: ['A', 'F'],
      trains:
      [
        {
          color: 'V',
          shortests: [
            ['A', 'B', 'C', 'D', 'E', 'F'],
            ['A', 'B', 'C', 'G', 'I', 'F'],
          ],
        },
        {
          color: 'R',
          shortests: [
            ['A', 'B', 'C', 'H', 'F'],
          ],
        },
        {
          shortests: [
            ['A', 'B', 'C', 'D', 'E', 'F'],
          ],
        },
      ],
    },
    {
      stations: ['A', 'E'],
      trains:
      [
        {
          color: 'V',
          shortests: [
            ['A', 'B', 'C', 'D', 'E'],
          ],
        },
        {
          color: 'R',
          shortests: [
            ['A', 'B', 'C', 'D', 'E'],
          ],
        },
        {
          shortests: [
            ['A', 'B', 'C', 'D', 'E'],
          ],
        },
      ],
    },
    {
      stations: ['D', 'A'],
      trains:
      [
        {
          color: 'V',
          shortests: [
            ['D', 'C', 'B', 'A'],
          ],
        },
        {
          color: 'R',
          shortests: [
            ['D', 'C', 'B', 'A'],
          ],
        },
        {
          shortests: [
            ['D', 'C', 'B', 'A'],
          ],
        },
      ],
    },
    {
      stations: ['A', 'G'],
      trains:
      [
        {
          color: 'V',
          shortests: [
            ['A', 'B', 'C', 'G'],
          ],
        },
      ],
    },
    {
      stations: ['A', 'I'],
      trains:
      [
        {
          color: 'V',
          shortests: [
            ['A', 'B', 'C', 'G', 'I'],
          ],
        },
      ],
    },
  ],
};

export { lines, parallel_line, solutions };
