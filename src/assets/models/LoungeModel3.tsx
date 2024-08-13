import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

// LoungeModel3의 props 타입 정의
interface LoungeModel3Props extends GroupProps {}

export function LoungeModel3(props: LoungeModel3Props) {
  // useGLTF에서 반환된 데이터의 타입을 명시적으로 지정합니다.
  const { nodes, materials } = useGLTF(
    '/models/lounge_model3/scene.gltf'
  ) as any

  return (
    <group {...props} dispose={null}>
      <group position={[0.239, 2.19, -0.085]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Material.014']}
        />
      </group>
      <group
        position={[0.206, 3.104, 0.431]}
        rotation={[0.635, -0.688, 0.093]}
        scale={[0.382, 0.382, 0.076]}
      >
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group
        position={[0.207, 2.329, 0.988]}
        rotation={[1.475, 0.081, 0]}
        scale={[0.062, 0.062, 0.025]}
      >
        <mesh
          geometry={nodes.Object_78.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_79.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[0.403, 2.429, 0.957]}
        rotation={[1.393, 0.087, -0.155]}
        scale={[0.095, 0.095, 0.038]}
      >
        <mesh
          geometry={nodes.Object_85.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_86.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[0.513, 1.735, 0.865]}
        rotation={[1.997, 0.002, -0.293]}
        scale={[0.04, 0.04, 0.016]}
      >
        <mesh
          geometry={nodes.Object_88.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_89.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[1.262, 2.148, 0.272]}
        rotation={[1.659, -0.054, -1.255]}
        scale={[0.062, 0.062, 0.025]}
      >
        <mesh
          geometry={nodes.Object_91.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_92.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[1.252, 2.529, -0.276]}
        rotation={[1.633, 0.347, -1.754]}
        scale={[0.069, 0.069, 0.027]}
      >
        <mesh
          geometry={nodes.Object_94.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_95.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[0.078, 2.514, -1.11]}
        rotation={[1.971, 0.56, 2.964]}
        scale={[0.069, 0.069, 0.027]}
      >
        <mesh
          geometry={nodes.Object_97.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_98.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[-0.219, 2.353, -1.054]}
        rotation={[2.061, 0.531, 2.6]}
        scale={[0.069, 0.069, 0.027]}
      >
        <mesh
          geometry={nodes.Object_100.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_101.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[-0.761, 2.618, -0.09]}
        rotation={[2.653, -0.21, 1.929]}
        scale={[0.069, 0.069, 0.027]}
      >
        <mesh
          geometry={nodes.Object_103.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_104.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[-0.381, 1.419, 0.363]}
        rotation={[2.455, 0.349, 0.604]}
        scale={[0.095, 0.095, 0.038]}
      >
        <mesh
          geometry={nodes.Object_106.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_107.geometry}
          material={materials['Material.012']}
        />
      </group>
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials['Material.001']}
        position={[0.239, 2.19, -0.085]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.926}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials['Material.006']}
        position={[0.756, 3.009, -0.537]}
        rotation={[-0.886, -0.583, -0.692]}
        scale={[0.3, 0.1, 0.1]}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials['Material.002']}
        position={[0.013, 2.354, 0.964]}
        rotation={[1.488, -0.547, 0.178]}
        scale={0.019}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials['Material.002']}
        position={[-0.071, 2.248, 0.952]}
        rotation={[1.663, -0.505, 0.356]}
        scale={0.019}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials['Material.002']}
        position={[-0.095, 2.131, 0.944]}
        rotation={[1.825, -0.453, 0.345]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials['Material.002']}
        position={[0.01, 2.012, 0.961]}
        rotation={[1.82, -0.454, 0.167]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials['Material.002']}
        position={[0.062, 2.128, 0.99]}
        rotation={[1.82, -0.454, 0.167]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials['Material.002']}
        position={[0.099, 2.194, 1.001]}
        rotation={[1.475, -0.48, 0]}
        scale={0.021}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials['Material.002']}
        position={[-0.556, 1.5, 0.182]}
        rotation={[2.607, 0.217, 0.865]}
        scale={0.027}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials['Material.002']}
        position={[-0.514, 1.539, 0.357]}
        rotation={[2.43, 0.029, 0.768]}
        scale={0.027}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials['Material.002']}
        position={[-0.462, 1.431, 0.271]}
        rotation={[2.673, 0.244, 0.685]}
        scale={0.027}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials['Material.002']}
        position={[0.063, 1.175, 0.259]}
        rotation={[2.835, 0.313, 0.143]}
        scale={0.027}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials['Material.002']}
        position={[0.195, 1.209, 0.374]}
        rotation={[2.718, 0.303, 0.035]}
        scale={0.022}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials['Material.002']}
        position={[0.076, 1.265, 0.456]}
        rotation={[2.541, 0.291, 0.107]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials['Material.002']}
        position={[-0.267, 2.454, -1.01]}
        rotation={[-2.705, 1.099, 1.354]}
        scale={0.022}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials['Material.002']}
        position={[-0.178, 2.589, -1.005]}
        rotation={[-2.689, 1.149, 1.512]}
        scale={0.027}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials['Material.002']}
        position={[-0.149, 2.476, -1.065]}
        rotation={[-2.689, 1.149, 1.512]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials['Material.002']}
        position={[0.384, 2.334, -1.15]}
        rotation={[-0.182, 1.409, -1.217]}
        scale={0.016}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials['Material.002']}
        position={[0.379, 2.468, -1.127]}
        rotation={[-0.182, 1.409, -1.217]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials['Material.002']}
        position={[1.241, 2.608, -0.104]}
        rotation={[0.445, 0.213, -1.17]}
        scale={0.022}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials['Material.002']}
        position={[1.246, 2.571, 0.032]}
        rotation={[0.512, 0.053, -1.178]}
        scale={0.022}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials['Material.002']}
        position={[1.29, 2.48, -0.041]}
        rotation={[0.541, -0.034, -1.333]}
        scale={0.031}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials['Material.002']}
        position={[1.253, 1.796, -0.046]}
        rotation={[0.53, -0.208, -1.924]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials['Material.002']}
        position={[1.262, 1.852, 0.058]}
        rotation={[0.509, -0.284, -1.761]}
        scale={0.019}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials['Material.002']}
        position={[1.29, 1.901, -0.025]}
        rotation={[0.509, -0.284, -1.761]}
        scale={0.023}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials['Material.002']}
        position={[1.277, 1.941, 0.123]}
        rotation={[0.518, -0.215, -1.642]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials['Material.002']}
        position={[0.608, 1.752, 0.841]}
        rotation={[0.554, -1.276, -1.448]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials['Material.002']}
        position={[0.733, 1.854, 0.823]}
        rotation={[0.511, -1.147, -1.459]}
        scale={0.021}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials['Material.002']}
        position={[0.621, 1.857, 0.878]}
        rotation={[0.511, -1.147, -1.459]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials['Material.002']}
        position={[-0.66, 2.802, -0.025]}
        rotation={[2.478, -0.509, 2.057]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials['Material.002']}
        position={[-0.656, 2.775, 0.116]}
        rotation={[2.525, -0.597, 1.934]}
        scale={0.029}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials['Material.002']}
        position={[-0.708, 2.695, 0.102]}
        rotation={[2.495, -0.509, 1.764]}
        scale={0.022}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials['Material.002']}
        position={[-0.734, 2.668, 0.027]}
        rotation={[2.458, -0.336, 1.763]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_76.geometry}
        material={materials['Material.002']}
        position={[-0.724, 2.702, -0.053]}
        rotation={[2.444, -0.28, 1.878]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Object_81.geometry}
        material={materials['Material.006']}
        position={[-0.637, 2.346, 0.497]}
        rotation={[-0.31, 0.629, 1.658]}
        scale={[0.168, 0.056, 0.056]}
      />
      <mesh
        geometry={nodes.Object_83.geometry}
        material={materials['Material.006']}
        position={[1.029, 1.808, 0.545]}
        rotation={[0.411, -0.516, -1.775]}
        scale={[0.3, 0.1, 0.1]}
      />
    </group>
  )
}

useGLTF.preload('/models/lounge_model3/scene.gltf')
