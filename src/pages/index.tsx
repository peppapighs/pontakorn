import dynamic from 'next/dynamic'

import { useCallback, Fragment } from 'react'
import { useWindowSize } from 'react-use'

import Card from 'components/Card'

const Index = () => {
  const { width, height } = useWindowSize()

  const BoidComponent = useCallback(() => {
    const Boid = dynamic(() => import('components/Boid'), {
      ssr: false,
    })

    return (
      <Fragment>
        <Boid />
      </Fragment>
    )
  }, [width, height])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card />
      <BoidComponent />
    </div>
  )
}

export default Index
