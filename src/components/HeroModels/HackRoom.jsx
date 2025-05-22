import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'

export function HackRoom(props) {
  const { nodes, materials } = useGLTF('/models/sci-fi_computer_room.glb')

  // Load matrix screen texture
  const matrixTexture = useTexture('/images/textures/matrix_screen.png')

  // Matrix-style glowing screen material
  const matrixMonitorMaterial = useMemo(() => {
    const material = new THREE.MeshBasicMaterial({
      map: matrixTexture,
      emissive: new THREE.Color('#39FF14'), // Matrix neon green
      emissiveIntensity: 1.8,
      toneMapped: false
    })
    return material
  }, [matrixTexture])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2} position={[1, 0.5, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Desk_1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Posters} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Keyboard} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.speaker_2} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.BG_Dark} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Carpet} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Emission} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Emission_Blue} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Trim_Sheet_Wall} />
        {/* Monitor with Matrix screen */}
        <mesh geometry={nodes.Object_13.geometry} material={matrixMonitorMaterial} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/sci-fi_computer_room.glb')
