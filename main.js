import { parseInput } from './parse_input/parse_input.js';
import { Subway } from './subway/subway.js';

const {
  subway_lines, start_name, end_name, train_color,
} = parseInput();

const subway = new Subway(subway_lines, train_color);

const { distance, path } = subway.shortest_path(start_name, end_name) || {};

if (distance === -1) {
  console.log(`Staitons ${start_name} and ${end_name} couldn't be reached`);
} else if (distance !== undefined) {
  console.log(`The shortest path is 
    ${path.map((station) => station.name)}
    Total Distance: ${distance}`);
}
