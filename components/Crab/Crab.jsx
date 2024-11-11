import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Crab(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/animated_crab.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
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
