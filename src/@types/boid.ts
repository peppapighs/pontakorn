import Vector from './vector'
import {
  alignRadius,
  separationRadius,
  cohesionRadius,
  maxSpeed,
  avoidRadius,
} from 'constant/boidConstant'

class CBoid {
  pos: Vector
  mov: Vector
  friends: CBoid[]

  constructor(public x: number, public y: number) {
    this.pos = new Vector(x, y)
    this.mov = new Vector(
      Math.random() * maxSpeed * 2 - maxSpeed,
      Math.random() * maxSpeed * 2 - maxSpeed
    )
    this.friends = []
  }

  calculate(
    delta: number,
    width: number,
    height: number,
    mousePos: Vector,
    boids: CBoid[]
  ) {
    this.pos.x = (this.pos.x + width) % width
    this.pos.y = (this.pos.y + height) % height

    this.getFriends(boids)

    this.flock(mousePos)

    const nextMov = new Vector(this.mov.x, this.mov.y)
    nextMov.mult(delta)
    this.pos.add(nextMov)
  }

  flock(mousePos: Vector) {
    const align = this.alignment()
    const separate = this.separation()
    const avoid = this.avoiding(mousePos)
    const cohere = this.cohesion()
    const noise = new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1)

    noise.mult(0.1)
    separate.mult(3)
    avoid.mult(7)

    this.mov.add(align)
    this.mov.add(separate)
    this.mov.add(avoid)
    this.mov.add(cohere)
    this.mov.add(noise)

    this.mov.limit(maxSpeed)
  }

  getFriends(boids: CBoid[]) {
    let nearby: CBoid[] = []
    boids.map((boid: CBoid) => {
      if (
        boid.pos != this.pos &&
        Math.abs(boid.pos.x - this.pos.x) < alignRadius &&
        Math.abs(boid.pos.y - this.pos.y) < alignRadius
      ) {
        nearby.push(boid)
      }
    })
    this.friends = [...nearby]
  }

  alignment() {
    const steer: Vector = new Vector(0, 0)

    this.friends.map((boid: CBoid) => {
      const dist: number = this.pos.distanceTo(boid.pos)
      if (dist > 0 && dist < alignRadius) {
        const copy = new Vector(boid.mov.x, boid.mov.y)
        copy.normalize()
        copy.divide(dist)
        steer.add(copy)
      }
    })

    return steer
  }

  separation() {
    const steer: Vector = new Vector(0, 0)

    this.friends.map((boid: CBoid) => {
      const dist: number = this.pos.distanceTo(boid.pos)
      if (dist > 0 && dist < separationRadius) {
        const diff = Vector.sub(this.pos, boid.pos)
        diff.normalize()
        diff.divide(dist)
        steer.add(diff)
      }
    })

    return steer
  }

  avoiding(pos: Vector) {
    const dist: number = this.pos.distanceTo(pos)
    if (dist > 0 && dist < avoidRadius) {
      const diff = Vector.sub(this.pos, pos)
      diff.normalize()
      diff.divide(dist)
      return diff
    }
    return new Vector(0, 0)
  }

  cohesion() {
    const steer: Vector = new Vector(0, 0)
    let count: number = 0

    this.friends.map((boid: CBoid) => {
      const dist: number = this.pos.distanceTo(boid.pos)
      if (dist > 0 && dist < cohesionRadius) {
        steer.add(boid.pos)
        ++count
      }
    })
    if (count > 0) {
      steer.divide(count)

      const desired = Vector.sub(steer, this.pos)
      desired.setLength(0.05)

      return desired
    }

    return steer
  }
}

export default CBoid
