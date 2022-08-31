class Edges {
  constructor(sourceVertex, destVertex) {
    this.source = sourceVertex
    this.dest = destVertex

    this.flags = {hover: false, dragging: false}
  }

  render() {
    stroke(138, 141, 141)
    strokeWeight(3)
    if (this.flags.hover) {
      stroke(239, 242, 244);
      strokeWeight(4);
    }

    line(this.source.x, this.source.y, this.dest.x, this.dest.y);
  }

  isInside(x, y) {
    const d1 = dist(this.source.x, this.source.y, x, y);
    const d2 = dist(this.dest.x, this.dest.y, x, y);

    if (d1 <= this.source.radius || d2 <= this.dest.radius) return false;

    const length = dist(this.source.x, this.source.y, this.dest.x, this.dest.y);

    const cond1 = (d1 + d2)-0.5 <= length;
    const cond2 = (d1 + d2)+0.5 >= length;

    return cond1 && cond2;
  }

}
