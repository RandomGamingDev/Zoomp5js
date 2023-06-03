class Zoom {
  constructor(pos = Vec.fromList([0, 0]), size = 1) {
    this.pos = pos;
    this.size = size;
  }
  
  apply() {
    translate(this.pos.ind(0), this.pos.ind(1));
    scale(this.size, this.size);
  }
  
  zoom(loc, zoom) {
    const newSize = this.size - zoom;
  
    if (newSize < 0)
      return;

    this.size = newSize;
    this.pos.subVec(loc.mulNum(zoom));
  }
}
