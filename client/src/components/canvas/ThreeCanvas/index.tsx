import * as S from './styles'
import { useRef } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera, Preload, PresentationControls, Stage } from '@react-three/drei'

const ThreeCanvas = ({ children, ...props }) => {
  const ref = useRef()
  return (
    <S.ThreeCanvas {...props}>
      <Canvas {...props} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Environment preset='city' />
        {children}
        <Preload all />
        <OrbitControls ref={ref} maxPolarAngle={Math.PI / 2.2} minZoom={20} maxZoom={70} />
        <OrthographicCamera
          makeDefault
          zoom={80}
          top={100}
          bottom={-100}
          left={100}
          right={-100}
          near={1}
          far={10000}
          position={[500, 200, -300]}
          key={undefined}
          attach={undefined}
          args={undefined}
          onUpdate={undefined}
          up={undefined}
          scale={undefined}
          rotation={undefined}
          matrix={undefined}
          quaternion={undefined}
          layers={undefined}
          dispose={undefined}
          view={undefined}
          type={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          onPointerMissed={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          visible={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          matrixWorldInverse={undefined}
          projectionMatrix={undefined}
          projectionMatrixInverse={undefined}
          isCamera={undefined}
          setViewOffset={undefined}
          clearViewOffset={undefined}
          updateProjectionMatrix={undefined}
          isOrthographicCamera={undefined}
        />
      </Canvas>
    </S.ThreeCanvas>
  )
}

export default ThreeCanvas
