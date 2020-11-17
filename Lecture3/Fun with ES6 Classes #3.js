class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return (this.length * this.width +
            this.length * this.height +
            this.height * this.width) * 2;
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}


https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
