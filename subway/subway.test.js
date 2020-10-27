import { lines, solutions } from '../test_files/given_example.js';
import { Subway } from './subway';

describe('Create subway tree from homework example', () => {
  const subway = new Subway(lines);

  it('creates subway', () => {
    expect(subway instanceof Subway).toBe(true);
    expect(subway.stations instanceof Map).toBe(true);
    expect(subway.stations.size).toBe(9);
    expect(subway.stations.get('A').name).toBe('A');
  });

  it('adds the right neighbours', () => {
    subway.stations.forEach((station, station_name) => {
      const neighbours_names = [...station.neighbours].map((neigh) => neigh.name);

      expect(neighbours_names).toEqual(solutions.connections[station_name]);
    });
  });
});
