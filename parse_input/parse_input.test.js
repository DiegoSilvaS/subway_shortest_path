import { parseInput } from './parse_input.js';
import { MISSING_INPUTS, FILE_ERROR } from '../exit_vars.js';

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

describe('parse user inputs', () => {
  const base_argv = process.argv;

  it('should exit with less than 3 inputs', () => {
    process.argv = [...base_argv, './test_files/given_example.json', 'A'];
    parseInput();
    expect(mockExit).toHaveBeenCalledWith(MISSING_INPUTS);
  });

  it('should exit with missing file', () => {
    process.argv = [...base_argv, 'false.json', 'A', 'B'];
    parseInput();
    expect(mockExit).toHaveBeenCalledWith(FILE_ERROR);
  });

  it('should exit if file is not JSON serializable', () => {
    process.argv = [...base_argv, './test_files/not_json.json', 'A', 'B'];
    parseInput();
    expect(mockExit).toHaveBeenCalledWith(FILE_ERROR);
  });

  it('should return object with the parsed input values', () => {
    process.argv = [...base_argv, './test_files/given_example.json', 'A', 'B'];
    const {
      subway_lines, start_name, end_name, train_color,
    } = parseInput();

    expect(Array.isArray(subway_lines)).toBe(true);
    expect(start_name).toBe('A');
    expect(end_name).toBe('B');
    expect(train_color).toBe(undefined);
  });

  it('should return object with train color', () => {
    process.argv = [...base_argv, './test_files/given_example.json', 'A', 'B', 'V'];
    const { train_color } = parseInput();

    expect(train_color).toBe('V');
  });
});
