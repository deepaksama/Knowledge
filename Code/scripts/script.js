const width = 800;
const height = 600;

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const palette = d3.select("body")
  .append("div")
  .attr("class", "palette")
  .style("width", "200px")
  .style("height", height + "px")
  .style("float", "left")
  .style("border-right", "1px solid #ccc");

const nodeTypes = [
  { type: "input", color: "#a6bbcf" },
  { type: "function", color: "#87a980" },
  { type: "output", color: "#e2d96e" }
];

let nodes = [];
let links = [];

// Create palette nodes
palette.selectAll(".palette-node")
  .data(nodeTypes)
  .enter()
  .append("div")
  .attr("class", "palette-node")
  .style("background-color", d => d.color)
  .text(d => d.type)
  .call(d3.drag()
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded));

function dragStarted(event, d) {
  const node = { id: nodes.length + 1, x: event.x, y: event.y, type: d.type };
  nodes.push(node);
  updateNodes();
}

function dragged(event, d) {
  const node = nodes[nodes.length - 1];
  node.x = event.x;
  node.y = event.y;
  updateNodes();
}

function dragEnded(event, d) {
  const node = nodes[nodes.length - 1];
  if (node.x < 200 || node.x > width || node.y < 0 || node.y > height) {
    nodes.pop();
  }
  updateNodes();
}

function updateNodes() {
  const nodeGroup = svg.selectAll(".node")
    .data(nodes, d => d.id);

  const newNodes = nodeGroup.enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragNodeStarted)
      .on("drag", dragNodeDragged)
      .on("end", dragNodeEnded));

  newNodes.append("rect")
    .attr("width", 120)
    .attr("height", 60)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", d => nodeTypes.find(nt => nt.type === d.type).color);

  newNodes.append("text")
    .attr("x", 60)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text(d => d.type);

  nodeGroup.attr("transform", d => `translate(${d.x},${d.y})`);

  nodeGroup.exit().remove();

  updateLinks();
}

function dragNodeStarted(event, d) {
  d3.select(this).raise().classed("active", true);
}

function dragNodeDragged(event, d) {
  d.x = event.x;
  d.y = event.y;
  d3.select(this).attr("transform", `translate(${d.x},${d.y})`);
  updateLinks();
}

function dragNodeEnded(event, d) {
  d3.select(this).classed("active", false);
}

function updateLinks() {
  const link = svg.selectAll(".link")
    .data(links);

  link.enter()
    .append("line")
    .attr("class", "link")
    .merge(link)
    .attr("x1", d => d.source.x + 120)
    .attr("y1", d => d.source.y + 30)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y + 30)
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  link.exit().remove();
}

svg.on("mousedown", function(event) {
  if (event.target.tagName === "svg") {
    const [x, y] = d3.pointer(event);
    const clickedNode = nodes.find(n => 
      x >= n.x && x <= n.x + 120 && y >= n.y && y <= n.y + 60
    );

    if (clickedNode) {
      const line = svg.append("line")
        .attr("class", "temp-link")
        .attr("x1", clickedNode.x + 120)
        .attr("y1", clickedNode.y + 30)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "black")
        .attr("stroke-width", 2);

      svg.on("mousemove", function(event) {
        const [x, y] = d3.pointer(event);
        line.attr("x2", x).attr("y2", y);
      });

      svg.on("mouseup", function(event) {
        const [x, y] = d3.pointer(event);
        const targetNode = nodes.find(n => 
          x >= n.x && x <= n.x + 120 && y >= n.y && y <= n.y + 60
        );

        if (targetNode && targetNode !== clickedNode) {
          links.push({ source: clickedNode, target: targetNode });
          updateLinks();
        }

        line.remove();
        svg.on("mousemove", null);
        svg.on("mouseup", null);
      });
    }
  }
});
