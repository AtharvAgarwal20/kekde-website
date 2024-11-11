import { Environment, OrbitControls, useEnvironment } from "@react-three/drei";
import { Crab } from "../Crab/Crab";
import { Physics } from "@react-three/rapier";
import { Beach } from "../Beach/Beach";
import CrabController from "../Crab/CrabController";

export default function Experience() {
  const envMap = useEnvironment({
    files: "/EnvMaps/sunflowers_puresky_4k.hdr",
  });
  return (
    <>
      {/* <ambientLight intensity={3} /> */}
      <Environment map={envMap} background={true} />
      {/* <fog attach="fog" color="#AEB3AC" near={2} far={15} /> */}
      {/* <OrbitControls
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2 - 0.05}
      /> */}
      <Physics debug>
        <CrabController />
        <Beach />
      </Physics>
    </>
  );
}
