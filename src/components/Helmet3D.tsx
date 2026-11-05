import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float, PresentationControls } from "@react-three/drei"
import { Suspense } from "react"

function Helmet() {
  const { scene } = useGLTF("/models/DamagedHelmet.glb")
  return <primitive object={scene} scale={2.2} />
}

useGLTF.preload("/models/DamagedHelmet.glb")

export function Helmet3D() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <directionalLight position={[-4, -2, -4]} intensity={0.4} color="#B7F7D4" />
        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.7}>
            <PresentationControls
              global
              rotation={[0.1, 0.4, 0]}
              polar={[-0.2, 0.4]}
              azimuth={[-0.6, 0.6]}
            >
              <Helmet />
            </PresentationControls>
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}
