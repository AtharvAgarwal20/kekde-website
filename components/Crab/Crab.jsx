import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Crab({ animation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/animated_crab.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (animation === "idle") {
      actions[names[1]].reset().fadeIn(0.5).stop();
      actions[names[2]].reset().fadeIn(0.5).play();
    } else if (animation === "walk") {
      actions[names[2]].reset().fadeIn(0.5).stop();
      actions[names[1]].reset().fadeIn(0.5).play();
    }
  }, [animation]);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.856}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Esqueleto_45" position={[0, 0.946, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.CangrejoMaterial}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.CangrejoMaterial}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="Cangrejo_43" />
                  <group name="Cangrejo002_44" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/animated_crab.glb");
