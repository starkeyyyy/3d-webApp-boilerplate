
import './App.css'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Model } from './components/model'
import Grid from './components/gridPlanes'
import Navbar from './components/navbar'
import LoginForm from './components/login'

function App() {
  const mouse = React.useRef({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

  }
 

  return (
    <>
    <div className="App" >
     <div className="login-page" onMouseMove={handleMouseMove}><LoginForm/></div>
    <Canvas style={{ height: '100vh', width: '100%' }} onMouseMove={handleMouseMove}>
      <ambientLight intensity={2} />
    <OrbitControls enablePan={false} enableRotate={false} enableZoom= {false}/>
    <OrthographicCamera makeDefault position={[10, 7, 10]} zoom={200} />
    <Model mouse = {mouse.current}/>
    <Grid row={10} col={10} planeWidth={2} planeDepth={2} spacing={0}/>
    </Canvas>
    </div>
    
    </>
  )
}

export default App
