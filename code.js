//Maya Conway
//code.js
//Augmenting Paths
//4-23-25

function augmentingPath(graph, start, end, visited = [], path = []) {
    visited.push(start); //push v onto visited
    path.push(start); //push v onto the path

    if (start === end) { //if v is the node we're looking for, return the path
        return path;
    }

    const connected = Object.keys(graph[start]); //create an array of the nodes connected to start
    for (let i = 0; i < connected.length; i++) { //for each edge (v, w)
        if (!visited.includes(connected[i])) { //if w isn't marked visited
            const foundPath = augmentingPath(graph, connected[i], end, visited, path); //recursively process w
            if (foundPath.length > 0) return foundPath;
        }
    }   

    path.pop(); //remove v from the path if we need to backtrack
    return [];
}