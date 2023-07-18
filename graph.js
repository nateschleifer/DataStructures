// no hierarchy; directed vs undirected(bidirectional)
// disconnected, vertices without edges, multiple edges from single node, cycle, self loop on a node, weighted edges
//adjacency matrix vs adjacency list; adjacency list more efficient O(n), can also store weights
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) { // if this key does not exist
            this.adjacencyList[vertex] = new Set(); // add this key with value of set
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) { //if this vertex does not exist as a key
            this.addVertex(vertex1); // call addVertex for this key
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2); // since undirected(bidirectional)
        this.adjacencyList[vertex2].add(vertex1); // add vertexes to each others sets as values
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2); // delete the adjacent vertex of
        this.adjacencyList[vertex2].delete(vertex1); // this key in each others value set
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return;
        } // for each vertex connected to this vertex(key) by an edge
        for(let adjacentVertex of this.adjacencyList[vertex]) { 
            this.removeEdge(vertex, adjacentVertex); // remove vertices from value set
        }
        delete this.adjacencyList[vertex]; // then delete this vertex(key)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));
