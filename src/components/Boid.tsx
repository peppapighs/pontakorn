import * as PIXI from 'pixi.js'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'

import CBoid from '../@types/boid'
import Vector from '../@types/vector'

const Boid = ({ ...rest }) => {
  const { width, height } = useWindowSize()

  const ref = useRef<HTMLDivElement>()

  const pixiApp = useRef<PIXI.Application>()
  const interact = useRef<PIXI.InteractionManager>()

  const boidState = useRef<CBoid[]>([])
  const boid = useRef<PIXI.Sprite[]>([])

  const texture = PIXI.Texture.from('/fish.svg')

  const boidTick = (delta: number) => {
    for (let i = 0; i < boidState.current.length; i++) {
      boidState.current[i].calculate(
        delta,
        width,
        height,
        new Vector(
          interact.current.mouse.global.x,
          interact.current.mouse.global.y
        ),
        boidState.current
      )

      boid.current[i].x = boidState.current[i].pos.x
      boid.current[i].y = boidState.current[i].pos.y
      boid.current[i].rotation =
        Math.atan2(boidState.current[i].mov.y, boidState.current[i].mov.x) +
        Math.PI / 2
    }
  }

  const getBoidCount = () => {
    if (width < 640) return 50
    if (width < 1024) return 100
    return 150
  }

  useEffect(() => {
    pixiApp.current = new PIXI.Application({
      width: width,
      height: height,
      transparent: true,
      antialias: true,
    })

    interact.current = new PIXI.InteractionManager(pixiApp.current.renderer)

    for (let i = 0; i < getBoidCount(); i++) {
      boidState.current.push(
        new CBoid(Math.random() * width, Math.random() * height)
      )
      boid.current.push(new PIXI.Sprite(texture))

      boid.current[i].anchor.set(0.5)
      boid.current[i].scale.set(0.5)
      boid.current[i].x = boidState.current[i].pos.x
      boid.current[i].y = boidState.current[i].pos.y

      pixiApp.current.stage.addChild(boid.current[i])
    }

    pixiApp.current.ticker.add((delta: number) => boidTick(delta))

    ref.current.appendChild(pixiApp.current.view)

    return () => {
      pixiApp.current.destroy()
    }
  }, [])

  return <div className="absolute" ref={ref} {...rest}></div>
}

export default Boid
