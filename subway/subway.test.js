import { lines, parallel_line, solutions } from '../test_files/given_example.js';
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

describe('Fails to find stations', () => {
  const subway = new Subway(lines);

  it('does not find station name and exits', () => {
    expect(subway.shortest_path('A', 'X')).toBe(undefined);
  });

  it('does not find green station in red train and exits', () => {
    subway.train_color = 'R';

    expect(subway.shortest_path('A', 'G')).toBe(undefined);
  });

  it('does not find station in parallel line', () => {
    subway.add_line(parallel_line);

    expect(subway.shortest_path('A', 'X').distance).toBe(-1);
  });
});

describe('Find shortest path from homework example', () => {
  const { paths } = solutions;
  const subway = new Subway(lines);

  paths.forEach(({ stations: [start, end], trains }) => {
    trains.forEach(({ color, shortests }) => {
      const test = `It finds one of the shortests path between ${start} a ${end} 
      for a ${color || 'common'} train`;

      it(test, () => {
        subway.train_color = color;
        debugger;
        const path = subway.shortest_path(start, end).path.map((station) => station.name);
        if (shortests.length === 1) {
          expect(path).toEqual(shortests[0]);
        } else {
          expect(array_in_arrays(path, shortests)).toBe(true);
        }
      });
    });
  });
});

const array_in_arrays = (target, arrays) => {
  for (const array of arrays) {
    if (JSON.stringify(array) === JSON.stringify(target)) {
      return true;
    }
  }

  return false;
};
