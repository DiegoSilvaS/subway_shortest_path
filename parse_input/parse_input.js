import { readFileSync } from 'fs';
import { MISSING_INPUTS, FILE_ERROR } from '../exit_vars.js';

const parseInput = () => {
  if (process.argv.length < 5) {
    console.log('Remember the format:\nnode main.js input_file.json start_node end_node train_color(optional)');
    process.exit(MISSING_INPUTS);
  }

  const filename = process.argv[2];
  let subway_lines = null;

  try {
    subway_lines = JSON.parse(readFileSync(filename));
  } catch (error) {
    console.log(error.message, 'File should exist and be json serializable');
    process.exit(FILE_ERROR);
  }

  return {
    subway_lines,
    start_name: process.argv[3],
    end_name: process.argv[4],
    train_color: process.argv[5],
  };
};

export { parseInput };
