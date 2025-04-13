import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

extend({ RectAreaLight: THREE.RectAreaLight })
RectAreaLightUniformsLib.init()

const HeroLights = () => {
  const rectLightRef = useRef()

  useEffect(() => {
    if (rectLightRef.current) {
      rectLightRef.current.lookAt(0, 0, 0)
    }
  }, [])

  return (
    <>
      <spotLight
        position={[4, 5, 8]}
        intensity={100}
        penumbra={0.2}
        color="white"
        angle={0.12}
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
        angle={0.3}
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
        angle={0.4}
      />
      <primitive
        ref={rectLightRef}
        object={new THREE.RectAreaLight('#A259FF', 8,3,2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI/4,Math.PI/4,0]}
      />
      <pointLight position={[0,1,0]}
      intensity={10}
      color="#7209b7"
      />
        <pointLight position={[1,2,-2]}
      intensity={10}
      color="#0d00a4"
      />
    </>
  )
}

export default HeroLights
