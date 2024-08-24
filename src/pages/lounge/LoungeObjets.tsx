import { Canvas, useThree } from '@react-three/fiber'
import { FlyControls } from '@react-three/drei'
import * as THREE from 'three'
import { ObjetModel1 } from '../../assets/models/ObjetModel1'
import { ObjetModel2 } from '../../assets/models/ObjetModel2'
import { ObjetModel3 } from '../../assets/models/ObjetModel3'
import { useRef, useMemo, useEffect, useCallback } from 'react'
import NoDataLottie from '../../components/lotties/NoDataLottie'
import { NoDataContainer, InnerText, GoObjetButton } from './LoungeStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { URL } from '../../static'

interface RandomModelsProps {
  onModelClick: (model: THREE.Group) => void
  objets?: Objet[]
}

interface ObjetsProps {
  objets?: Objet[]
}

interface Objet {
  objet_id: number
  type: string
  name: string
  description: string
  objet_image: File
}

function ObjetModels({ objets, onModelClick }: RandomModelsProps) {
  const groupRef = useRef<THREE.Group>(null)

  const models = useMemo(() => {
    if (!objets || objets.length === 0) return []

    const availableModels = [ObjetModel1, ObjetModel2, ObjetModel3]
    const getRandomPosition = (length: number): [number, number, number] => {
      const ranges = [
        { range: 15, offset: -1 },
        { range: 100, offset: -50 },
        { range: 200, offset: -100 },
        { range: 400, offset: -200 },
        { range: 600, offset: -300 },
      ]
      const { range, offset } =
        ranges[Math.min(Math.floor(length / 5), ranges.length - 1)]
      return [
        Math.random() * range + offset,
        Math.random() * range + offset,
        Math.random() * range + offset,
      ]
    }

    return objets.map((objet) => {
      const mesh = new THREE.Group()

      const scaleMap: { [key: string]: number } = {
        O0001: 2,
        O0002: 0.5,
        O0003: 0.258,
      }

      mesh.scale.setScalar(scaleMap[objet.type] || 1)

      mesh.position.set(...getRandomPosition(objets.length))
      const ModelComponent =
        availableModels[
          objet.type === 'O0001' ? 0 : objet.type === 'O0002' ? 1 : 2
        ]

      mesh.position.set(...getRandomPosition(objets.length))
      mesh.rotation.set(
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
      )
      mesh.userData = { id: objet.objet_id, onClick: () => onModelClick(mesh) }
      return { ModelComponent, mesh }
    })
  }, [objets, onModelClick])

  useEffect(() => {
    const group = groupRef.current
    if (group) {
      models.forEach(({ mesh }) => group.add(mesh))
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
          onClick={mesh.userData.onClick}
        >
          <ModelComponent />
        </mesh>
      ))}
    </group>
  )
}

function LoungeCanvas({ objets }: { objets?: Objet[] }) {
  const navigate = useNavigate()
  const { lid } = useParams<{ lid: string }>()
  const { camera, gl, scene } = useThree()
  const controlsRef = useRef<any>(null)
  const targetPositionRef = useRef(new THREE.Vector3())
  const initialCameraSet = useRef(false)

  const handleModelClick = useCallback(
    (model: THREE.Group) => {
      const offset = 1
      model.getWorldPosition(targetPositionRef.current)
      camera.position.set(
        targetPositionRef.current.x + offset,
        targetPositionRef.current.y + offset,
        targetPositionRef.current.z + offset
      )
      camera.lookAt(targetPositionRef.current)

      navigate(`${URL.lounge}/${lid}/objet/${model.userData.id}`)
    },
    [camera]
  )

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      )

      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(scene.children, true)
      if (intersects.length > 0) {
        const firstIntersected = intersects[0].object
        firstIntersected.userData.onClick?.()
      }
    }

    gl.domElement.style.cursor = 'pointer'
    gl.domElement.addEventListener('click', handleClick)

    return () => {
      gl.domElement.removeEventListener('click', handleClick)
    }
  }, [gl.domElement, camera, scene])

  useEffect(() => {
    if (scene.children.length > 0 && !initialCameraSet.current) {
      const firstModel = scene.children.find(
        (child) => child instanceof THREE.Group
      ) as THREE.Group | undefined

      if (firstModel) {
        firstModel.getWorldPosition(targetPositionRef.current)
        camera.position.set(
          targetPositionRef.current.x + 10,
          targetPositionRef.current.y + 10,
          targetPositionRef.current.z + 10
        )
        camera.lookAt(targetPositionRef.current)
        initialCameraSet.current = true
      }
    }
  }, [scene.children, camera])

  return (
    <>
      <FlyControls ref={controlsRef} movementSpeed={20} rollSpeed={0.2} />
      <ambientLight intensity={4} />
      <directionalLight position={[2, 1, 3]} intensity={1} />
      <ObjetModels objets={objets} onModelClick={handleModelClick} />
    </>
  )
}

export default function LoungeObjets({ objets }: ObjetsProps) {
  const navigate = useNavigate()
  const { lid: loungeId } = useParams()

  const handleClickGoObjet = () => {
    navigate(`${URL.lounge}/${loungeId}/objet/new`)
  }

  if (!objets || objets.length === 0) {
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
    <Canvas>
      <LoungeCanvas objets={objets} />
    </Canvas>
  )
}
