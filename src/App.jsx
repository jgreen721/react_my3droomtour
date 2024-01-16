import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience.jsx"
import './App.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'

function App() {

  return (
    <div className="app">
      <Canvas>
        <color attach="background" args={["black"]}/>
        {/* <ambientLight intensity={1}/> */}
        {/* <Environment preset="city" background={true}/> */}
        {/* <OrbitControls/> */}
        <directionalLight intensity={2} position={[0,2,3]}/>
        <ScrollControls pages={5}>
        <Experience/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
