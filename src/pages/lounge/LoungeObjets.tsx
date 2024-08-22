import { Canvas, useThree } from '@react-three/fiber'
import { FlyControls } from '@react-three/drei'
import * as THREE from 'three'
import { ObjetModel1 } from '../../assets/models/ObjetModel1'
import { ObjetModel2 } from '../../assets/models/ObjetModel2'
import { ObjetModel3 } from '../../assets/models/ObjetModel3'
import { useRef, useMemo, useEffect } from 'react'
import NoDataLottie from '../../components/lotties/NoDataLottie'
import { NoDataContainer, InnerText, GoObjetButton } from './LoungeStyles'
import { useNavigate, useLocation } from 'react-router-dom'
import { URL } from '../../static'

interface RandomModelsProps {
  onModelClick: (model: THREE.Group) => void
  objets?: Objet[]
}

interface ObjetsProps {
  type: string
  objets?: Objet[]
}

interface Objet {
  objet_id: number
  type: string
  name: string
}

function ObjetModels({ objets, onModelClick }: RandomModelsProps) {
  const groupRef = useRef<THREE.Group>(null)

  const models = useMemo(() => {
    const availableModels = [ObjetModel1, ObjetModel2, ObjetModel3]
    const generatedModels: any[] = []

    if (objets && objets.length > 0) {
      objets.forEach((objet) => {
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

        switch (objet.type) {
          case 'O0001':
            mesh.scale.set(19.2, 19.2, 19.2)
            break
          case 'O0002':
            mesh.scale.set(3, 3, 3)
            break
          case 'O0003':
            mesh.scale.set(0.258, 0.258, 0.258)
            break
        }
        mesh.userData = { onClick: () => onModelClick(mesh) }
        generatedModels.push({ ModelComponent, mesh })
      })
    }

    return generatedModels
  }, [objets, onModelClick])

  useEffect(() => {
    const group = groupRef.current
    if (group) {
      models.forEach(({ mesh }) => {
        group.add(mesh)
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

function LoungeCanvas({ objets }: { objets?: Objet[] }) {
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
        <ObjetModels objets={objets} onModelClick={handleModelClick} />
      </group>
    </>
  )
}

export default function LoungeObjets({ type, objets }: ObjetsProps) {
  const navigate = useNavigate()

  const loungeId = useLocation().pathname.split('/')[2]

  const handleClickGoObjet = () => {
    navigate(`${URL.lounge}/${loungeId}/objet/new`)
  }

  if (objets?.length === 0) {
    return (
      <NoDataContainer>
        <NoDataLottie />
        <InnerText>
          <span>오브제가 없습니다 🥲</span>
          <GoObjetButton onClick={handleClickGoObjet}>
            오브제 생성하러 가기
          </GoObjetButton>
        </InnerText>
      </NoDataContainer>
    )
  }

  return (
    type === 'lounge' && (
      <Canvas>
        <LoungeCanvas objets={objets} />
      </Canvas>
    )
  )
}
