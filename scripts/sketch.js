let robotoR;
let robotoM;

const vertices = []
const connections = []
const tempEdge = []

let vertexLabel;
let vertexSum;
let edgeSum;


// initialization functions
function preload() {
  robotoR = loadFont('../styles/fonts/Roboto-Regular.ttf')
  robotoB = loadFont('../styles/fonts/Roboto-Bold.ttf')
}

function setup() {
  let canvas = createCanvas(800, 550)
  canvas.parent('graph-canvas')
  vertexLabel = 1;


}

// driver function for main program
function draw() {
  background(45, 47, 49)


  connections.forEach(function(edge) {
    if (edge.isInside(mouseX, mouseY))
      edge.flags.hover = true;
    else edge.flags.hover = false;

    edge.render();
  })

  vertices.forEach(function(vertex) {
    if (vertex.isInside(mouseX, mouseY))
      vertex.flags.hover = true
    else vertex.flags.hover = false
    vertexSum = vertices.length

    vertex.render();
  })

}


function keyPressed() {
  if (key === 'v') {
    const vertex = new Vertices(String(vertexLabel), mouseX, mouseY)
    vertex.render()
    vertices.push(vertex)
    vertexLabel++
    console.log('vertex created')
    console.log(vertices)
  }

  if (key === 'u') {
    tempEdge.pop()
    tempEdge.pop()
  }

  if(key === 'r') {
    connections.splice(0, connections.length)
    vertices.splice(0, vertices.length)
    tempEdge.splice(0, tempEdge.length)
    vertexLabel = 1
  }


  // Vertices
  for (let i = 0; i < vertices.length; i++) {
    vertex = vertices[i]
    if (vertex.flags.hover && key === 'e') {
      tempEdge.push(vertex)
      if (tempEdge.length === 2) {
        const edge = new Edges(tempEdge[0], tempEdge[1])
        edge.render()
        connections.push(edge)
        tempEdge.pop()
        tempEdge.pop()
        console.log('edge created')
        console.log(connections)
      }
      return
    }

    if (vertex.flags.hover && key === 'd') {
      delAdj(vertex)
      vertices.splice(i, 1)



    }


  if (vertex.flags.hover && key === 'c'){
    vertex.changeColor()
    return
  }


}
// END VERTICES


for (let i = 0; i < connections.length; i++) {
  edges = connections[i];
  if (edges.flags.hover && key === 'd') {
    connections.splice(i, 1);
    console.log('edge deleted')
    console.log(connections)
    return;
  }

}



}

let dx = 0;
let dy = 0;
let dragged_cell;

function mousePressed() {

  for (let i = 0; i < connections.length; i++) {
    conn = connections[i];
    if (conn.flags.hover) {
      // connections.splice(i, 1);
      return;
    }
  }

  for (let i = 0; i < vertices.length; i++) {
    cell = vertices[i];
    if (cell.flags.hover) {
      cell.flags.dragging = true;
      dragged_cell = cell;
      break;
    }
  }

  if (!dragged_cell) return;
  dx = mouseX - dragged_cell.x;
  dy = mouseY - dragged_cell.y;
}

function mouseDragged() {
  if (!dragged_cell) return;

  dragged_cell.x = mouseX - dx;
  dragged_cell.y = mouseY - dy;
}

function mouseReleased() {
  if (!dragged_cell) return;

  dragged_cell.flags.dragging = false;
  dragged_cell = undefined;
}

function delAdj(vertex) {
  console.log(vertex)

  let i = connections.length;
  while (i--) {
    if (connections[i].dest === vertex || connections[i].source === vertex) {
        connections.splice(i, 1);
    }
  }
}
