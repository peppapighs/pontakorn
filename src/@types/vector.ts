class Vector {
  static x: number
  static y: number

  constructor(public x: number, public y: number) {
    this.x = x
    this.y = y
  }

  static add(vecA: Vector, vecB: Vector) {
    return new Vector(vecA.x + vecB.x, vecA.y + vecB.y)
  }

  static sub(vecA: Vector, vecB: Vector) {
    return new Vector(vecA.x - vecB.x, vecA.y - vecB.y)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  add(vec: Vector) {
    this.x += vec.x
    this.y += vec.y
  }

  sub(vec: Vector) {
    this.x -= vec.x
    this.y -= vec.y
  }

  mult(k: number) {
    this.x *= k
    this.y *= k
  }

  divide(k: number) {
    this.x /= k
    this.y /= k
  }

  distanceTo(vec: Vector) {
    const dX: number = this.x - vec.x
    const dY: number = this.y - vec.y

    return Math.sqrt(dX * dX + dY * dY)
  }

  normalize() {
    const len: number = this.length()
    this.x /= len
    this.y /= len
  }

  limit(max: number) {
    if (this.length() > max) {
      this.normalize()
      this.mult(max)
    }
  }

  setLength(len: number) {
    this.normalize()
    this.mult(len)
  }
}

export default Vector
