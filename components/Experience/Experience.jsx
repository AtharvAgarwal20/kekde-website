import { Environment, useEnvironment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Beach } from "../Beach/Beach";
import CrabController from "../Crab/CrabController";
import EnergyOrb from "../EnergyOrb/EnergyOrb";

export default function Experience() {
  const envMap = useEnvironment({
    files: "/EnvMaps/sunset1by16Orange.hdr",
  });
  return (
    <>
      <Environment map={envMap} background={true} />
      <group position={[-0.5, 41, 0]} scale={38}>
        <EnergyOrb color="orange" lightIntensity={3} />
      </group>
      <Physics>
        <CrabController />
        <Beach />
      </Physics>
    </>
  );
}
