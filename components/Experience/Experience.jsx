import {
  Environment,
  OrbitControls,
  ScrollControls,
  useEnvironment,
} from "@react-three/drei";
import { Crab } from "../Crab/Crab";

export default function Experience() {
  const envMap = useEnvironment({
    files: "/EnvMaps/sunflowers_puresky_4k.hdr",
  });
  return (
    <>
      {/* <ambientLight intensity={3} /> */}
      <Environment map={envMap} background />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.05}
      />
      <ScrollControls pages={12} damping={0.25}>
        <Crab />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[300, 300, 32, 32]} />
          <meshBasicMaterial color={0xe2ca76} />
        </mesh>
      </ScrollControls>
    </>
  );
}
