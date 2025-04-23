# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case input would be either a graph with no path from source to target, or a graph with many paths almost to the target, but only one path to the target.

1.  starting at the start node, while unvisited nodes remain
	1.  if current vertex  v  is the end node, return the path. $\Theta(1)$  
	2. mark v as visited and push it onto the path. $\Theta(1)$
    3. create an array of the nodes connected to start node. $\Theta(|E|)$
	4. for each edge  (v,w): This has a complexity of $\Theta(|E|)$ since each edge will be processed once overall
		1. If not visited, recursively process w. This has a complexity of  $\Theta(|V|)$ since each vertex will be visited at least once.
	5. if all nodes on a path are visited, backtrack. $\Theta(1)$


The runtime equation is:

$T(n) = 1 \cdot (1 + |E| + |E| + |V|) + 1$

$= 2|E| + |V| + 2$

The constant factors are asymptotically insignificant, therefore

$T(n)\in\Theta(|E|+|V|)$

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."