import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Crab } from "../Crab/Crab";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={12} damping={0.25}>
        <Crab />
      </ScrollControls>
    </>
  );
}
