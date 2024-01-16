import React, { useEffect, useRef, useState } from 'react'
import {Box, useAnimations, useGLTF, useScroll} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"
import gsap from "gsap"


const Model = ()=>{
    const img = useGLTF("./darkroomwithlpanimation.glb")
    const modelRef = useRef()
    const tl = useRef();
    const scroll = useScroll()
    const [initialPosition,setInitialPosition]=useState([0,0,0])
    // const [hasPlayed,setHasPlayed] = useState(false)
    const {actions,mixer} = useAnimations(img.animations,img.scene)

    // console.log(img)

    useEffect(()=>{
        console.log("huh?")
        tl.current = gsap.timeline({duration:5})
        if(innerWidth < 600){
            setInitialPosition([0,1,0])
        }
    },[])

    useFrame(()=>{
        tl.current.seek(tl.current.duration() * scroll.offset)
if(innerWidth > 600){
        tl.current.to(modelRef.current.position,{x:-.3,y:-1,z:3},1);
        tl.current.to(modelRef.current.rotation,{y:1},1)

        tl.current.to(modelRef.current.position,{x:.3,y:-1.25,z:2.5},2.5);
        tl.current.to(modelRef.current.rotation,{y:-1},2.5)
}
else{
    tl.current.to(modelRef.current.position,{x:-.2,y:-.4,z:2.25},1);
    tl.current.to(modelRef.current.rotation,{y:1},1)

    tl.current.to(modelRef.current.position,{x:.2,y:-.75,z:2},2.5);
    tl.current.to(modelRef.current.rotation,{y:-1},2.5)
}
        if((tl.current.duration() * scroll.offset) > 1.25){
            img.animations.forEach(clip=>{
                if(clip.name == "OpenLaptop"){
                  console.log("pan camera!!")
                    let action = mixer.clipAction(clip);
                    action.setLoop(THREE.LoopOnce);
                    action.play();
                    action.clampWhenFinished = true;
                
                }
                // setHasPlayed(true)

        })
    }
})

    return(
       <group ref={modelRef}>
           <pointLight intensity={3} position={[0,1,1]}/>
           <primitive scale={.1} position={initialPosition} rotation={[0,-Math.PI * .25, 0]} object={img.scene}/>
       </group>
    )
}

const Experience = () => {
  return (
    <group>
      <Model/>
    </group>
  )
}

export default Experience