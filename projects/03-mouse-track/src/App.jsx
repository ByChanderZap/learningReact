import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('working', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        x: clientX,
        y: clientY
      })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundImage: 'url("/cuttestFrog.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 1,
        pointerEvents: 'none',
        left: -50,
        top: -50,
        width: 100,
        height: 100,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => { setEnabled(!enabled) }}> {enabled ? 'deactivate' : 'activate'} Follow pointer</button>
    </main>

  )
}

export default App
