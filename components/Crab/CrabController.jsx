import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { Car } from "./Crab";
import { useEffect, useRef, useState } from "react";
import { MathUtils, Matrix4, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function CarController() {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();

  const [smoothedCameraPosition] = useState(() => new Vector3(27.75, 5, -3));
  const [smoothedCameraTarget] = useState(() => new Vector3());

  const body = useRef();

  const jump = () => {
    const origin = body.current.translation();

    const direction = { x: 0, y: -1, z: 0 };

    const ray = new rapier.Ray(origin, direction);

    const hit = world.castRay(ray, 10, true);

    if (hit.timeOfImpact < 0.04) {
      body.current.applyImpulse({ x: 0, y: 50, z: 0 });
    }
  };

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    return () => {
      unsubscribeJump();
    };
  }, []);

  const getForwardDirection = (rotation) => {
    const direction = new Vector3(0, 0, 1);

    return direction.applyQuaternion(rotation);
  };

  const carDir = new Vector3(0, 0, 0);

  useFrame(({ camera, mouse }, delta) => {
    const { forward, backward, left, right, jump, run } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const impulseStrength = run ? 250 * delta : 150 * delta;

    const torqueImpulse = { x: 0, y: 0, z: 0 };
    const torqueImpulseStrength = 10 * delta;

    carDir.x = getForwardDirection(body.current.rotation()).x;
    carDir.z = getForwardDirection(body.current.rotation()).z;

    const carDirection = carDir.normalize();

    if (forward) {
      impulse.x += impulseStrength * carDirection.x;
      impulse.z += impulseStrength * carDirection.z;
    }

    if (backward) {
      impulse.x -= impulseStrength * carDirection.x;
      impulse.z -= impulseStrength * carDirection.z;
    }

    if (left && forward) {
      torqueImpulse.y += torqueImpulseStrength;
    }

    if (right && forward) {
      torqueImpulse.y -= torqueImpulseStrength;
    }

    if (right && backward) {
      torqueImpulse.y += torqueImpulseStrength;
    }

    if (left && backward) {
      torqueImpulse.y -= torqueImpulseStrength;
    }

    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torqueImpulse);

    /**
     * Camera follow
     */

    const bodyPosition = body.current.translation();

    const cameraPosition = new Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z -= carDirection.z * 4;
    cameraPosition.x -= carDirection.x * 4;
    cameraPosition.y += 4;

    const cameraTarget = new Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 1.5;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    camera.position.copy(smoothedCameraPosition);
    camera.lookAt(smoothedCameraTarget);
  });

  return (
    <group position={[27.75, 5, 0]} scale={1}>
      <RigidBody
        canSleep={false}
        colliders="cuboid"
        // lockRotations
        restitution={0.1}
        friction={1}
        linearDamping={0.8}
        // mass={1000}
        gravityScale={2.5}
        ref={body}
      >
        <Car />
      </RigidBody>
    </group>
  );
}
