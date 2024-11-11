import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { Crab } from "./Crab";
import { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function CrabController() {
  const WALK_SPEED = 1.6;
  const RUN_SPEED = 3.2;
  const JUMP_FORCE = 0.5;

  const rb = useRef();
  const container = useRef();
  const cameraTarget = useRef();
  const cameraPosition = useRef();
  const character = useRef();
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();

  const isOnGround = () => {
    if (!rb.current) return false;

    const position = rb.current.translation();
    const origin = { x: position.x, y: position.y, z: position.z };
    const direction = { x: 0, y: -1, z: 0 };

    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 0.1, true); // Increased ray distance slightly

    console.log(hit);
    console.log(hit?.timeOfImpact);

    // Check if we got a hit and it's close enough
    // if ((hit && hit.toi < 0.6 === false) || (hit && hit.toi < 0.6 === null)) {
    //   return false;
    // } else {
    //   return true;
    // }
    if (hit && hit?.timeOfImpact < 0.4) {
      return true;
    } else {
      return false;
    }
  };

  useFrame(({ camera }) => {
    if (rb.current) {
      const { forward, backward, left, right, run, jump } = getKeys();

      const linvel = rb.current.linvel();

      // Calculate movement direction
      let impulseX = 0;
      let impulseZ = 0;

      if (forward) impulseZ += run ? RUN_SPEED : WALK_SPEED;
      if (backward) impulseZ -= run ? RUN_SPEED : WALK_SPEED;
      if (left) impulseX += run ? RUN_SPEED : WALK_SPEED;
      if (right) impulseX -= run ? RUN_SPEED : WALK_SPEED;

      // Apply movement impulse
      rb.current.setLinvel({ x: impulseX, y: linvel.y, z: impulseZ }, true);

      if (jump) {
        const grounded = isOnGround();
        // console.log("Jump attempted, grounded:", grounded); // Debug log

        if (grounded) {
          //   console.log("Applying jump force"); // Debug log
          rb.current.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true);
        }
      }
    }

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

      camera.lookAt(cameraLookAt.current);
    }
  }, -1);

  return (
    <group position={[0, 5, 0]}>
      <RigidBody colliders={false} lockRotations ref={rb} position={[0, -1, 0]}>
        <group ref={container}>
          <group ref={cameraTarget} position={[0, 0, 1.5]} />
          <group ref={cameraPosition} position={[0, 4, -4]} />
          <group ref={character}>
            <Crab />
          </group>
          <CapsuleCollider args={[0.5, 0.5]} />
        </group>
      </RigidBody>
    </group>
  );
}
