import { Station } from '../station/station.js';
import bidirectional_bfs from './bidirectional_bfs.js';

const no_color = Symbol('common station');

const Subway = function (lines, train_color) {
  this.stations = new Map();
  this.train_color = train_color;
  lines.forEach((line) => this.add_line([...line]));
};

Subway.prototype
  .add_line = function (line, near_stations = new Map()) {
    if (!line.length) return;

    const { name, color = no_color } = line.shift();
    const curr = this.stations.get(name) || new Station(name, color);
    this.stations.set(name, curr);

    if (color === no_color) {
      near_stations.forEach((station, station_color) => {
        if (near_stations.size === 1 || station_color !== no_color) {
          station.neighbours.add(curr);
          curr.neighbours.add(station);
        }
      });

      near_stations = new Map([[no_color, curr]]);
    } else {
      const previous_station = near_stations.get(color) || near_stations.get(no_color);

      if (previous_station) {
        previous_station.neighbours.add(curr);
        curr.neighbours.add(previous_station);
      }
      near_stations.set(curr.color, curr);
    }

    this.add_line(line, near_stations);
  };

Subway.prototype
  .shortest_path = function (start_name, end_name) {
    const start_station = this.stations.get(start_name);
    const end_station = this.stations.get(end_name);
    const restriction = (station) => station.color === no_color || station.color === this.train_color;

    if (!(start_station && end_station)) {
      console.log('Either one or both of the station names provided where not found in the file');
    } else if (!(restriction(start_station) && restriction(end_station))) {
      console.log('Either one or both of the station are unreachable due to the color');
    } else {
      return bidirectional_bfs(start_station, end_station, restriction);
    }
  };

export { Subway };
