const inputToGraph = (input, adder) => {
  // light red bags contain 1 bright white bag, 2 muted yellow bags.
  const graph = new Map();
  input.forEach((line) => adder(graph, line.replace(/bags?\.?\s?/g, '')));
  return graph;
};

const addToGraph = (graph, line) => {
  // light red contain 1 bright white  2 muted yellow
  // faded blue contain no other
  const [destination, origins] = line.split('contain ');
  origins
    .trim()
    .split(', ')
    .forEach(
      (origin) =>
        origin !== 'no other' &&
        update(graph, origin.trim(), destination.trim())
    );
};

const update = (graph, origin, destination) => {
  // origin = '1 bright white'
  const index = origin.indexOf(' ');
  const [expence, key] = [+origin.slice(0, index), origin.slice(index + 1)];
  graph.has(key)
    ? graph.get(key).push({ expence, destination })
    : graph.set(key, [{ expence, destination }]);
};

const addToGraphReverse = (graph, line) => {
  const [origin, neighbours] = line.split('contain ').map((el) => el.trim());
  !neighbours.includes('no other') &&
    graph.set(
      origin,
      [...neighbours.split(', ')].map((neighbour) => ({
        expence: +neighbour.slice(0, neighbour.indexOf(' ')),
        name: neighbour.slice(neighbour.indexOf(' ') + 1).trim(),
      }))
    );
};

const findContainers = (input, node) => {
  const visited = new Set();
  const graph = inputToGraph(input, addToGraph);
  const visit = (node) => {
    visited.add(node);
    if (hasNeighbours(graph, node))
      for (let neighbour of graph.get(node)) {
        visit(neighbour.destination);
      }
  };
  visit(node);
  return visited.size - 1;
};

const expence = (input, node) => {
  const graph = inputToGraph(input, addToGraphReverse);
  let expence = 0;
  const visit = (node, parent) => {
    expence = expence + parent * bagsWithin(graph, node);
    for (let neighbour of graph.get(node)) {
      graph.has(neighbour.name) && visit(neighbour.name, neighbour.expence);
    }
  };
  visit(node, 1);
  return expence;
};

const hasNeighbours = (graph, node) => Array.isArray(graph.get(node));

const bagsWithin = (graph, node) => {
  const current = graph.get(node);
  if (Array.isArray(current))
    return current.reduce((acc, neighbour) => (acc += neighbour.expence), 0);
  return 0;
};

export { inputToGraph, findContainers, expence };
