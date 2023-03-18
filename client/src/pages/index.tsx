/* eslint-disable react/jsx-no-comment-textnodes */
import ThreeCanvas from '@/components/canvas/ThreeCanvas'
import { Container } from '@/components/canvas/Container'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { Center, ContactShadows, Float, PresentationControls } from '@react-three/drei'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  return (
    <>
      <div className='fixed top-0 flex items-center justify-center w-full py-5 text-6xl text-white bg-black z-300 h-fit font-[hel-bd]'>
        RAPIER + R3F EXP
      </div>
      <div className='fixed bottom-0 flex items-center justify-center w-full py-5 text-4xl text-white bg-black h-fit font-[hel-bd]'>
        RAPIER + R3F EXP
      </div>
      <ThreeCanvas>
        <Physics>
          <Debug />

          {/* <Center>
          <Container position={[0, 0, 0]} scale={0.01} color={'black'} />
        </Center> */}
          <Container position={[1, 0, 3]} scale={0.01} color={'red'} />
          <Container position={[0, 10, 1.5]} rotation={[0, Math.PI / 2, 0]} scale={[0.01, 0.01, 0.01]} color={'blue'} />
          <RigidBody colliders='cuboid'>
            <Plane position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          </RigidBody>
        </Physics>
      </ThreeCanvas>
    </>
  )
}
export const Plane = ({ ...props }) => {
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshPhysicalMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={1}
        roughness={0.1}
        transmission={0.9}
        opacity={0.5}
        transparent
        premultipliedAlpha
        envMapIntensity={1}
        alphaTest={0.5}
      />
    </mesh>
  )
}
export async function getStaticProps() {
  return { props: { title: 'rapier wip' } }
}
