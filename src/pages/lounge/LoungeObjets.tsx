import { Canvas, useThree } from '@react-three/fiber'
import { FlyControls } from '@react-three/drei'
import * as THREE from 'three'
import { ObjetModel1 } from '../../assets/models/ObjetModel1'
import { ObjetModel2 } from '../../assets/models/ObjetModel2'
import { ObjetModel3 } from '../../assets/models/ObjetModel3'
import { useRef, useMemo, useEffect } from 'react'

interface RandomModelsProps {
  onModelClick: (model: THREE.Group) => void
}

function RandomModels({ onModelClick }: RandomModelsProps) {
  const groupRef = useRef<THREE.Group>(null)

  const models = useMemo(() => {
    const availableModels = [ObjetModel1, ObjetModel2, ObjetModel3]
    const generatedModels = []

    for (let i = 0; i < 200; i++) {
      const num = Math.floor(Math.random() * availableModels.length)
      const ModelComponent = availableModels[num]
      const mesh = new THREE.Group()
      mesh.position.set(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      )
      mesh.rotation.set(
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
      )

      switch (num) {
        case 0:
          mesh.scale.set(19.2, 19.2, 19.2)
          break
        case 1:
          mesh.scale.set(3, 3, 3)
          break
        case 2:
          mesh.scale.set(0.258, 0.258, 0.258)
          break
      }
      mesh.userData = { onClick: () => onModelClick(mesh) }
      generatedModels.push({ ModelComponent, mesh })
    }

    return generatedModels
  }, [onModelClick])

  useEffect(() => {
    const group = groupRef.current
    if (group) {
      models.forEach(({ ModelComponent, mesh }) => {
        group.add(mesh)
        ;<ModelComponent />
      })
    }
  }, [models])

  return (
    <group ref={groupRef}>
      {models.map(({ ModelComponent, mesh }, index) => (
        <mesh
          key={index}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
        >
          <ModelComponent />
        </mesh>
      ))}
    </group>
  )
}

function LoungeObjets() {
  const { camera, gl, scene } = useThree()
  const controlsRef = useRef<any>(null)
  const refGroup = useRef<THREE.Group>(null)
  const targetPositionRef = useRef(new THREE.Vector3())

  const handleModelClick = (model: THREE.Group) => {
    const offset = 1 // Distance from the object
    model.getWorldPosition(targetPositionRef.current)
    camera.position.set(
      targetPositionRef.current.x + offset,
      targetPositionRef.current.y + offset,
      targetPositionRef.current.z + offset
    )
    console.log('hi')
  }

  useEffect(() => {
    gl.domElement.style.cursor = 'pointer'

    const handleClick = (event: MouseEvent) => {
      const mouse = new THREE.Vector2()
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(scene.children, true)
      if (intersects.length > 0) {
        const firstIntersected = intersects[0].object
        if (firstIntersected.userData.onClick) {
          firstIntersected.userData.onClick()
        }
      }
    }

    gl.domElement.addEventListener('click', handleClick)

    return () => {
      gl.domElement.removeEventListener('click', handleClick)
    }
  }, [gl.domElement, camera, scene])

  return (
    <>
      <FlyControls ref={controlsRef} movementSpeed={30} rollSpeed={0.2} />
      <ambientLight intensity={3} />
      <directionalLight position={[2, 1, 3]} intensity={1} />
      <group ref={refGroup}>
        <RandomModels onModelClick={handleModelClick} />
      </group>
    </>
  )
}

export default function App() {
  return (
    <Canvas>
      <LoungeObjets />
    </Canvas>
  )
}
