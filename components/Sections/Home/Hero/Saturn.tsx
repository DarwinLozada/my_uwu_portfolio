import { Canvas, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { OrbitControls, useFBX, PerspectiveCamera } from '@react-three/drei'
import { FC, memo, Suspense, useEffect, useRef } from 'react'
import { Camera, Mesh, MeshStandardMaterial } from 'three'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import useIsClient from 'hooks/useIsClient'

const Scene: FC = () => {
  const planet = useFBX('./models/saturn/planet.fbx')
  const asteroidsOne = useFBX('./models/saturn/asteroids1.fbx')
  const asteroidsTwo = useFBX('./models/saturn/asteroids2.fbx')

  const texture = useLoader(TextureLoader, './models/saturn/textures.png')

  const cameraRef = useRef<Camera>()

  useEffect(() => {
    planet.children.forEach((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({
          map: texture,
        })
      }
    })
  }, [planet, texture])

  return (
    <>
      <ambientLight intensity={0.07} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <Suspense fallback={<p>LOADING</p>}>
        <>
          <motion.primitive
            object={planet}
            scale={[0.0004, 0.0004, 0.0004]}
            position={[0, 4, 0]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <meshStandardMaterial color="hotpink" />
          </motion.primitive>

          <motion.primitive
            object={asteroidsOne}
            scale={[0.0004, 0.0004, 0.0004]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 60,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />

          <motion.primitive
            object={asteroidsTwo}
            scale={[0.00045, 0.00045, 0.00045]}
            initial={{ rotateY: 0, rotateX: Math.PI / 7, y: 3 }}
            animate={{ rotateY: Math.PI * 2 }}
            transition={{
              type: 'tween',
              ease: 'linear',
              duration: 150,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <meshStandardMaterial color="hotpink" />
          </motion.primitive>

          <PerspectiveCamera ref={cameraRef} />
          <OrbitControls
            camera={cameraRef.current}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
        </>
      </Suspense>
    </>
  )
}

const Saturn: FC = () => {
  const hasMounted = useIsClient()

  return (
    <section className="absolute top-0 flex h-[calc(100vh+20rem)] w-[80rem] grow items-center justify-center overflow-visible">
      <Canvas
        className={`relative w-[70rem] translate-x-[9rem] translate-y-[27rem] scale-75 overflow-visible ${
          hasMounted ? 'opacity-80 md:opacity-100' : 'opacity-0'
        }  transition-opacity duration-500 md:translate-x-[7rem] md:translate-y-[13rem]  md:scale-100 
      lg:translate-y-0 lg:translate-x-[40vw]`}
        camera={{ position: [-12.49, 3.54, 8.53] }}
      >
        <Scene />
      </Canvas>
    </section>
  )
}

export default memo(Saturn)
