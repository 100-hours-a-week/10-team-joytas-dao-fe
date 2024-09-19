import { Canvas, useThree } from '@react-three/fiber'
import { FlyControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useEffect, useCallback } from 'react'
import NoDataLottie from '@components/lotties/NoDataLottie'
import { NoDataContainer, InnerText, GoObjetButton } from './LoungeStyles'
import { useNavigate } from 'react-router-dom'
import { URL } from '@/static'
import type { ObjetsProps, Objet } from '@/types/ModelType'
import ObjetModels from './ObjetModels'
import { toast } from 'react-toastify'

function LoungeCanvas({ objets }: { objets?: Objet[] }) {
  const navigate = useNavigate()
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

      navigate(`${URL.objet}/${model.userData.id}`)
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

export default function LoungeObjets({ objets, loungeId }: ObjetsProps) {
  const navigate = useNavigate()

  const handleClickGoObjet = () => {
    if (loungeId === 0) {
      toast.info('라운지를 선택 후 오브제를 생성해주세요 🙂')
      navigate(URL.lounge)
    } else {
      localStorage.setItem('loungeId', loungeId.toString())
      navigate(URL.newObjet)
    }
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
    <Canvas style={{ border: '0.1px solid gray' }}>
      <LoungeCanvas objets={objets} />
    </Canvas>
  )
}
