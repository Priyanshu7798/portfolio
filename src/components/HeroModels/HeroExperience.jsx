import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { HackRoom } from './HackRoom'
import HeroLights from './HeroLights'
import Particles from './Particles'

const HeroExperience = () => {

  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});

  return (
    <Canvas camera={{position:[0,0,15],fov:45}}>
     

      {/* For interactive add orbitControls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle = {Math.PI / 2}
      />

      <HeroLights />

      <Particles count={100} />
      <group
        scale ={isMobile? 0.9:1}
        position={[0,-1,0]}
        rotation={isMobile?[0,Math.PI /4,0]:[0,-Math.PI /4,0]}

      >
        <HackRoom />
      </group>
    
    </Canvas>
  )
}

export default HeroExperience