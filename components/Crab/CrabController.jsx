import { RigidBody } from "@react-three/rapier";
import { Crab } from "./Crab";
import { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export default function CrabController() {
  const container = useRef();
  const cameraTarget = useRef();
  const cameraPosition = useRef();
  const character = useRef();
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());

  useFrame(({ camera }) => {
    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

      camera.lookAt(cameraLookAt.current);
    }
  });

  return (
    <group position={[0, 5, 0]}>
      <RigidBody colliders="cuboid" lockRotations>
        <group ref={container}>
          <group ref={cameraTarget} position={[0, 0, 1.5]} />
          <group ref={cameraPosition} position={[0, 4, -4]} />
          <group ref={character}>
            <Crab />
          </group>
        </group>
      </RigidBody>
    </group>
  );
}
