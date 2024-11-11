import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Crab } from "./Crab";

export default function CrabController() {
  return (
    <group position={[0, 5, 0]}>
      <RigidBody colliders="cuboid">
        <Crab />
      </RigidBody>
    </group>
  );
}
