class Vertices {
  constructor(label, x, y) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.color = [205, 220, 57]

    this.flags = { hover: false, dragging: false};

    this.radius = 20;
  }

  render() {
    this.renderVertex();
    this.renderLabel();
  }

  renderLabel() {
    noStroke()
    fill(0)
    textFont(robotoR)
    textSize(15)
    if(this.flags.hover) {
      textFont(robotoB)
      textSize(18)
    }
    text(this.label, this.x - (textWidth(this.label) / 2), this.y + ((textAscent() + textDescent()) / 4))
  }

  renderVertex() {

    noStroke()
    fill(this.color[0], this.color[1], this.color[2])
    circle(this.x, this.y, this.radius*2)
    if(this.flags.hover)
      circle(this.x, this.y, this.radius*2+5)
  }

  isInside(x, y) {
    const d = dist(this.x, this.y, x, y)
    return d <= this.radius

  }

  changeColor() {
    if(this.color[0] === 205){
      this.color = [33, 150, 243]
      return
    }

    if(this.color[0] === 33){
      this.color = [255, 213, 79]
      return
    }

    if(this.color[0] === 255){
      this.color = [236, 64, 122]
      return
    }

    if(this.color[0] === 236){
      this.color = [126, 87, 194]
      return
    }

    if(this.color[0] === 126){
      this.color = [239, 83, 81]
      return
    }

    if(this.color[0] === 239){
      this.color = [205, 220, 57]
      return
    }
    return

  }
}
