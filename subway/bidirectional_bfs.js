export default (start_node, end_node, restriction = () => true) => {
  const previous_start = new Map();
  const previous_end = new Map();
  const visited_start = new Map();
  const visited_end = new Map();
  const queue_start = [];
  const queue_end = [];
  queue_start.push({ node: start_node, dist: 0 });
  queue_end.push({ node: end_node, dist: 0 });
  visited_start.set(start_node, 0);
  visited_end.set(end_node, 0);

  const get_path = (intersection) => {
    const path = [];

    let curr = intersection;

    while (curr) {
      path.unshift(curr);
      curr = previous_start.get(curr);
    }

    curr = previous_end.get(intersection);

    while (curr) {
      path.push(curr);
      curr = previous_end.get(curr);
    }
    return path;
  };

  while (queue_start.length > 0 || queue_end.length > 0) {
    if (queue_start.length > 0) {
      const { node, dist } = queue_start.shift();
      if (visited_end.has(node)) {
        return {
          distance: dist + visited_end.get(node),
          path: get_path(node),
        };
      }

      node.neighbours.forEach((neighbour) => {
        if (!visited_start.has(neighbour) && restriction(neighbour)) {
          previous_start.set(neighbour, node);
          queue_start.push({ node: neighbour, dist: dist + 1 });
          visited_start.set(neighbour, dist + 1);
        }
      });
    }
    if (queue_end.length > 0) {
      const { node, dist } = queue_end.shift();
      if (visited_start.has(node)) {
        return {
          distance: dist + visited_start.get(node),
          path: get_path(node),
        };
      }

      node.neighbours.forEach((neighbour) => {
        if (!visited_end.has(neighbour) && restriction(neighbour)) {
          previous_end.set(neighbour, node);
          queue_end.push({ node: neighbour, dist: dist + 1 });
          visited_end.set(neighbour, dist + 1);
        }
      });
    }
  }

  return { distance: -1, path: [] };
};
