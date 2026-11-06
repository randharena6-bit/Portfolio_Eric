import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import { useReducedMotion } from "framer-motion"
import { MathUtils, Vector3 } from "three"
import type { Group, Points } from "three"

function NeuralCore() {
  const group = useRef<Group>(null)
  const core = useRef<Group>(null)
  const { nodes, lines } = useMemo(() => {
    const vertices: Vector3[] = []
    const count = 130
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const angle = i * Math.PI * (3 - Math.sqrt(5))
      vertices.push(new Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius).multiplyScalar(1.38))
    }
    const nodePositions = new Float32Array(vertices.flatMap(vertex => [vertex.x, vertex.y, vertex.z]))
    const segments: number[] = []
    vertices.forEach((vertex, index) => {
      vertices.slice(index + 1).forEach(other => {
        if (vertex.distanceToSquared(other) < 0.22) segments.push(vertex.x, vertex.y, vertex.z, other.x, other.y, other.z)
      })
    })
    return { nodes: nodePositions, lines: new Float32Array(segments) }
  }, [])
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15
      group.current.rotation.x = MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.18, 2, delta)
      group.current.rotation.z = MathUtils.damp(group.current.rotation.z, -state.pointer.x * 0.12, 2, delta)
    }
    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.055
      core.current.scale.setScalar(pulse)
      core.current.rotation.y -= delta * 0.22
    }
  })
  return <group ref={group}>
    <points>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[nodes, 3]} /></bufferGeometry>
      <pointsMaterial color="#d8ffb2" size={0.055} sizeAttenuation transparent opacity={0.95} depthWrite={false} />
    </points>
    <lineSegments>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[lines, 3]} /></bufferGeometry>
      <lineBasicMaterial color="#a7fca3" transparent opacity={0.48} />
    </lineSegments>
    <group ref={core}>
      <mesh><icosahedronGeometry args={[0.72, 2]} /><meshStandardMaterial color="#6dbb83" emissive="#58b672" emissiveIntensity={0.65} wireframe transparent opacity={0.45} /></mesh>
      <mesh><icosahedronGeometry args={[0.38, 3]} /><meshStandardMaterial color="#d7ffc4" emissive="#8cff9c" emissiveIntensity={1.4} roughness={0.25} metalness={0.25} /></mesh>
      <pointLight color="#aaffb8" intensity={4} distance={4} />
    </group>
  </group>
}

function Orbits() {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.08
  })
  return (
    <group ref={group} rotation={[0.9, 0.25, 0]}>
      {[1.85, 2.2, 2.55].map((radius, index) => (
        <group key={radius} rotation={[index * 0.35, index * 0.2, 0]}>
          <mesh>
            <torusGeometry args={[radius, 0.005, 8, 120]} />
            <meshBasicMaterial color={index === 1 ? "#c7ff8a" : "#8dbdff"} transparent opacity={index === 1 ? 0.55 : 0.28} />
          </mesh>
          <mesh position={[radius, 0, 0]}>
            <sphereGeometry args={[0.035 + index * 0.01, 16, 16]} />
            <meshBasicMaterial color={index === 1 ? "#c7ff8a" : "#a7dfff"} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function StarField() {
  const points = useRef<Points>(null)
  const positions = useMemo(() => {
    const values = new Float32Array(180 * 3)
    for (let i = 0; i < 180; i++) {
      const angle = i * 2.39996
      const radius = 2.6 + (i % 11) * 0.13
      values[i * 3] = Math.cos(angle) * radius
      values[i * 3 + 1] = Math.sin(angle) * radius
      values[i * 3 + 2] = Math.sin(i * 12.9898) * 1.7
    }
    return values
  }, [])
  useFrame((_, delta) => {
    if (points.current) points.current.rotation.z -= delta * 0.025
  })
  return <points ref={points}>
    <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
    <pointsMaterial color="#c7ffb3" size={0.024} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
  </points>
}

function FloatingObjects() {
  const group = useRef<Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12
  })
  return <group ref={group}>
    <mesh position={[-2.25, 1.35, -0.4]} rotation={[0.4, 0.5, 0]}>
      <icosahedronGeometry args={[0.24, 0]} />
      <meshStandardMaterial color="#c7ff8a" wireframe emissive="#6aa85c" emissiveIntensity={0.6} />
    </mesh>
    <mesh position={[2.1, -1.25, 0.1]} rotation={[0.3, 0.4, 0.8]}>
      <octahedronGeometry args={[0.22, 0]} />
      <meshStandardMaterial color="#a5d8ff" wireframe emissive="#4569af" emissiveIntensity={0.7} />
    </mesh>
    <mesh position={[1.9, 1.5, -0.8]}>
      <torusGeometry args={[0.16, 0.025, 12, 40]} />
      <meshStandardMaterial color="#c7ff8a" metalness={0.7} roughness={0.25} />
    </mesh>
  </group>
}

export function Helmet3D() {
  const reducedMotion = useReducedMotion()
  return (
    <div className="hero-scene" aria-label="Illustration 3D interactive d’un noyau d’intelligence artificielle">
      <div className="scene-grid" />
      <div className="scene-orb" />
      <div className="scene-scan" aria-hidden="true" />
      <div className="scene-floating-shape scene-floating-shape-one" aria-hidden="true" />
      <div className="scene-floating-shape scene-floating-shape-two" aria-hidden="true" />
      {!reducedMotion && (
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} fallback={<div className="scene-fallback">✳</div>}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[4, 5, 5]} intensity={3} color="#d6e9ff" />
          <directionalLight position={[-4, 1, 2]} intensity={2} color="#a0ffd1" />
          <pointLight position={[0, -3, 2]} intensity={20} color="#7368ff" />
          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.22} floatIntensity={0.45}><NeuralCore /></Float>
            <Orbits />
            <StarField />
            <FloatingObjects />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} />
        </Canvas>
      )}
      {reducedMotion && <div className="scene-fallback">✳</div>}
      <div className="scene-top"><span>EXPLORATION / 01</span><span>✳</span></div>
      <div className="scene-coordinates" aria-hidden="true"><span>● LIVE RENDER</span><span>ESPACE 3D<br />INTERACTIF</span></div>
      <div className="scene-bottom"><span>UNIVERS CRÉATIF<br /><strong>CODE × INTELLIGENCE</strong></span>{!reducedMotion && <span className="scene-hint">GLISSER POUR EXPLORER ↗</span>}</div>
    </div>
  )
}
