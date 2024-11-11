import { Environment, useEnvironment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Beach } from "../Beach/Beach";
import CrabController from "../Crab/CrabController";

export default function Experience() {
  const envMap = useEnvironment({
    files: "/EnvMaps/sunflowers_puresky_4k.hdr",
  });
  return (
    <>
      <Environment map={envMap} background={true} />
      <Physics>
        <CrabController />
        <Beach />
      </Physics>
    </>
  );
}
