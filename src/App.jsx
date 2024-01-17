import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience.jsx"
import './App.css'
import { Environment, OrbitControls, ScrollControls,Text } from '@react-three/drei'
import Welcome from './Welcome.jsx'

function App() {

  return (
    <div className="app">
      {/* <Welcome/> */}
       <Canvas>
        <color attach="background" args={["black"]}/>
        <Text position={[-.5,3,0]} scale={.45}>
          3d World
        </Text>
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
