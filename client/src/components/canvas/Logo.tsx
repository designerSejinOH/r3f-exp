import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Edges, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'

type GLTFResult = GLTF & {
  nodes: {
    object_1: THREE.Mesh
  }
}

export default function Logo({ ...props }) {
  const mesh = useRef(null)
  const [hovered, hover] = useState(false)

  const gradient = 0.38

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * (Math.PI / 2)
  })

  const { nodes } = useGLTF('data/SEJINOH.glb') as GLTFResult

  return (
    <group ref={mesh} {...props} dispose={null}>
      <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <mesh castShadow receiveShadow geometry={nodes.object_1.geometry} scale={0.05}>
          <LayerMaterial
            toneMapped={false}
            key={undefined}
            attach={undefined}
            args={undefined}
            onUpdate={undefined}
            dispose={undefined}
            map={undefined}
            fog={undefined}
            visible={undefined}
            uuid={undefined}
            type={undefined}
            specular={undefined}
            shininess={undefined}
            emissive={undefined}
            emissiveIntensity={undefined}
            emissiveMap={undefined}
            bumpMap={undefined}
            bumpScale={undefined}
            normalMap={undefined}
            normalMapType={undefined}
            normalScale={undefined}
            displacementMap={undefined}
            displacementScale={undefined}
            displacementBias={undefined}
            specularMap={undefined}
            envMap={undefined}
            combine={undefined}
            reflectivity={undefined}
            refractionRatio={undefined}
            wireframeLinecap={undefined}
            wireframeLinejoin={undefined}
            flatShading={undefined}
            opacity={undefined}
            lightMap={undefined}
            lightMapIntensity={undefined}
            aoMap={undefined}
            aoMapIntensity={undefined}
            alphaMap={undefined}
            wireframe={undefined}
            wireframeLinewidth={undefined}
            alphaTest={undefined}
            alphaToCoverage={undefined}
            blendDst={undefined}
            blendDstAlpha={undefined}
            blendEquation={undefined}
            blendEquationAlpha={undefined}
            blending={undefined}
            blendSrc={undefined}
            blendSrcAlpha={undefined}
            clipIntersection={undefined}
            clippingPlanes={undefined}
            clipShadows={undefined}
            colorWrite={undefined}
            defines={undefined}
            depthFunc={undefined}
            depthTest={undefined}
            depthWrite={undefined}
            polygonOffset={undefined}
            polygonOffsetFactor={undefined}
            polygonOffsetUnits={undefined}
            precision={undefined}
            premultipliedAlpha={undefined}
            dithering={undefined}
            side={undefined}
            shadowSide={undefined}
            transparent={undefined}
            vertexColors={undefined}
            stencilWrite={undefined}
            stencilFunc={undefined}
            stencilRef={undefined}
            stencilWriteMask={undefined}
            stencilFuncMask={undefined}
            stencilFail={undefined}
            stencilZFail={undefined}
            stencilZPass={undefined}
            userData={undefined}
            clearcoat={undefined}
            clearcoatMap={undefined}
            clearcoatRoughness={undefined}
            clearcoatRoughnessMap={undefined}
            clearcoatNormalScale={undefined}
            clearcoatNormalMap={undefined}
            ior={undefined}
            sheen={undefined}
            sheenColor={undefined}
            sheenRoughness={undefined}
            transmission={undefined}
            transmissionMap={undefined}
            attenuationDistance={undefined}
            attenuationColor={undefined}
            specularIntensity={undefined}
            specularColor={undefined}
            specularIntensityMap={undefined}
            specularColorMap={undefined}
            roughness={undefined}
            metalness={undefined}
            roughnessMap={undefined}
            metalnessMap={undefined}
            envMapIntensity={undefined}
            gradientMap={undefined}
            id={undefined}
            isMaterial={undefined}
            needsUpdate={undefined}
            version={undefined}
            clone={undefined}
            copy={undefined}
            onBeforeCompile={undefined}
            customProgramCacheKey={undefined}
            setValues={undefined}
            toJSON={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            metal={undefined}
            sheenColorMap={undefined}
            sheenRoughnessMap={undefined}
            thickness={undefined}
            thicknessMap={undefined}
            iridescenceMap={undefined}
            iridescenceIOR={undefined}
            iridescenceThicknessRange={undefined}
            iridescenceThicknessMap={undefined}
            isMeshStandardMaterial={undefined}>
            <Depth
              colorA='#000000'
              colorB='black'
              alpha={1}
              mode='normal'
              near={0.5 * gradient}
              far={0.5}
              origin={[0, 0, 0]}
            />
            <Depth
              colorA='black'
              colorB='#000000'
              alpha={1}
              mode='add'
              near={2 * gradient}
              far={2}
              origin={[0, 1, 1]}
            />
            <Depth
              colorA='white'
              colorB='#000000'
              alpha={1}
              mode='add'
              near={3 * gradient}
              far={3}
              origin={[0, 1, -1]}
            />
            <Depth
              colorA='white'
              colorB='black'
              alpha={1}
              mode='overlay'
              near={1.5 * gradient}
              far={1.5}
              origin={[1, -1, -1]}
            />
            <Fresnel mode='add' color='white' intensity={0.5} power={1.5} bias={0.05} />
          </LayerMaterial>
          <Edges color='black' />
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('data/SEJINOH.glb')
