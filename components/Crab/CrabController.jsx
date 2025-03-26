import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Crab } from "./Crab";
import { useEffect, useRef, useState } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function CrabController() {
  const WALK_SPEED = 4;
  const RUN_SPEED = WALK_SPEED * 2;
  const ROTATION_SPEED = 0.002;
  const JUMP_FORCE = 3;

  const [animation, setAnimation] = useState("idle");

  const rb = useRef();
  const container = useRef();

  const rotationTarget = useRef(0);
  const cameraTarget = useRef();
  const cameraPosition = useRef();
  const character = useRef();
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const isClicking = useRef(false);

  useEffect(() => {
    const onMouseDown = (e) => {
      isClicking.current = true;
    };

    const onMouseUp = (e) => {
      isClicking.current = false;
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("touchend", onMouseUp);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchstart", onMouseDown);
      document.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  useFrame(({ camera, mouse }) => {
    if (rb.current) {
      const { forward, backward, left, right, run, jump } = getKeys();

      const linvel = rb.current.linvel();

      // Calculate movement direction
      let impulseX = 0;
      let impulseZ = 0;

      if (isClicking.current) {
        impulseX -= mouse.x * RUN_SPEED;
        impulseZ += mouse.y * RUN_SPEED;
      }

      if (forward) impulseZ = 1 * (run ? RUN_SPEED : WALK_SPEED);
      if (backward) impulseZ = -1 * (run ? RUN_SPEED : WALK_SPEED);

      if (left) impulseX += run ? RUN_SPEED : WALK_SPEED;
      if (right) impulseX -= run ? RUN_SPEED : WALK_SPEED;

      if (impulseX !== 0) {
        rotationTarget.current += ROTATION_SPEED * impulseX;
      }

      if (impulseX !== 0 || impulseZ !== 0) {
        setAnimation("walk");
      } else {
        setAnimation("idle");
      }

      // Apply movement impulse
      rb.current.setLinvel(
        {
          x: Math.sin(rotationTarget.current) * impulseZ,
          y: linvel.y,
          z: Math.cos(rotationTarget.current) * impulseZ,
        },
        true
      );
    }

    container.current.rotation.y = MathUtils.lerp(
      container.current.rotation.y,
      rotationTarget.current,
      0.1
    );

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

      camera.lookAt(cameraLookAt.current);
    }
  }, -1);

  return (
    <group position={[27.75, 5, 0]} scale={2}>
      <RigidBody colliders={false} lockRotations ref={rb} position={[0, -1, 0]}>
        <group ref={container}>
          <group ref={cameraTarget} position={[0, 0, 1.5]} />
          <group ref={cameraPosition} position={[0, 3, -4]} />
          <group ref={character}>
            <Crab animation={animation} />
          </group>
          <CapsuleCollider args={[0.5, 0.5]} position={[0, 1, 0]} />
        </group>
      </RigidBody>
    </group>
  );
}
