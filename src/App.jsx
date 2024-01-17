import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience.jsx"
import './App.css'
import { Environment, OrbitControls, ScrollControls,Text } from '@react-three/drei'
import Welcome from './Welcome.jsx'

const Loader = ()=>{

  return (
    <group>
    <Text>Loading... </Text>
    </group>
  )
}

function App() {

  return (
    <div className="app">
      {/* <Welcome/> */}
       <Canvas>
        <color attach="background" args={["black"]}/>
        <Text position={[-.5,3,0]} scale={.45}>
          3dd World
        </Text>
        {/* <ambientLight intensity={1}/> */}
        {/* <Environment preset="city" background={true}/> */}
        {/* <OrbitControls/> */}
        <directionalLight intensity={2} position={[0,2,3]}/>
        <ScrollControls pages={5}>
          <Suspense fallback={<Loader/>}>
        <Experience/>
        </Suspense>
        </ScrollControls>
      </Canvas> 
    </div>
  )
}

export default App
