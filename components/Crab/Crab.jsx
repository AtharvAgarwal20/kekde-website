/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: arturs.vitas (https://sketchfab.com/arturs.vitas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-cartoon-style-car-01-69461da2e3a842c0868f5187c1282674
Title: Low-poly cartoon style car 01
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Crab(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/carOptimised.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group
            name="Body_7"
            position={[0, 0.182, -0.098]}
            rotation={[0.001, 0, 0]}
          >
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_5"
              geometry={nodes.Object_5.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_6"
              geometry={nodes.Object_6.geometry}
              material={materials.BodyGlass}
            />
            <group
              name="EngineV6_0"
              position={[0.002, 0.016, 0.723]}
              rotation={[-0.001, 0, 0]}
            >
              <mesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials.BodyGlossy}
              />
              <mesh
                name="Object_9"
                geometry={nodes.Object_9.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group name="InteriorAssymetry_1" position={[0, 0.238, 0.098]}>
              <mesh
                name="Object_11"
                geometry={nodes.Object_11.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group
              name="Suspension_FL_2"
              position={[0.301, 0.194, 0.672]}
              rotation={[-0.161, -0.01, 0.063]}
            >
              <mesh
                name="Object_13"
                geometry={nodes.Object_13.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group
              name="Suspension_FR_3"
              position={[-0.301, 0.194, 0.672]}
              rotation={[-0.161, 0.01, -0.063]}
            >
              <mesh
                name="Object_15"
                geometry={nodes.Object_15.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group
              name="Suspension_RL_4"
              position={[0.325, 0.189, -0.52]}
              rotation={[0.038, -0.01, 0.063]}
            >
              <mesh
                name="Object_17"
                geometry={nodes.Object_17.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group
              name="Suspension_RR_5"
              position={[-0.325, 0.189, -0.52]}
              rotation={[0.038, -0.015, -0.062]}
            >
              <mesh
                name="Object_19"
                geometry={nodes.Object_19.geometry}
                material={materials.BodyMatte}
              />
            </group>
            <group name="WindshieldWipers_6" position={[0.009, 0.29, 0.551]}>
              <mesh
                name="Object_21"
                geometry={nodes.Object_21.geometry}
                material={materials.BodyMatte}
              />
            </group>
          </group>
          <group name="Wheel_FL_8" position={[0.471, 0.149, 0.603]}>
            <mesh
              name="Object_23"
              geometry={nodes.Object_23.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_24"
              geometry={nodes.Object_24.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Bonet_10" position={[0, 0.434, 0.404]}>
            <mesh
              name="Object_26"
              geometry={nodes.Object_26.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_27"
              geometry={nodes.Object_27.geometry}
              material={materials.BodyMatte}
            />
            <group name="FrontGrill_9" position={[0, -0.1, 0.579]}>
              <mesh
                name="Object_29"
                geometry={nodes.Object_29.geometry}
                material={materials.BodyGlossy}
              />
              <mesh
                name="Object_30"
                geometry={nodes.Object_30.geometry}
                material={materials.BodyMatte}
              />
            </group>
          </group>
          <group name="Bumper_F_11" position={[0, 0.151, 0.975]}>
            <mesh
              name="Object_32"
              geometry={nodes.Object_32.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_33"
              geometry={nodes.Object_33.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Bootlid_13" position={[0, 0.442, -0.779]}>
            <mesh
              name="Object_35"
              geometry={nodes.Object_35.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_36"
              geometry={nodes.Object_36.geometry}
              material={materials.BodyMatte}
            />
            <group name="Tag_12" position={[-0.403, -0.081, -0.295]}>
              <mesh
                name="Object_38"
                geometry={nodes.Object_38.geometry}
                material={materials.BodyMatte}
              />
            </group>
          </group>
          <group name="Bumper_R_14" position={[0, 0.177, -1.072]}>
            <mesh
              name="Object_40"
              geometry={nodes.Object_40.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Fender_FL_15" position={[0.559, 0.315, 0.569]}>
            <mesh
              name="Object_42"
              geometry={nodes.Object_42.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_43"
              geometry={nodes.Object_43.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Doors_FL_16" position={[0.575, 0.257, 0.371]}>
            <mesh
              name="Object_45"
              geometry={nodes.Object_45.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_46"
              geometry={nodes.Object_46.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_47"
              geometry={nodes.Object_47.geometry}
              material={materials.BodyGlass}
            />
          </group>
          <group name="Doors_RL_17" position={[0.582, 0.251, -0.098]}>
            <mesh
              name="Object_49"
              geometry={nodes.Object_49.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_50"
              geometry={nodes.Object_50.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_51"
              geometry={nodes.Object_51.geometry}
              material={materials.BodyGlass}
            />
          </group>
          <group
            name="rim_18"
            position={[0.567, 0.149, 0.603]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.4}
          >
            <mesh
              name="Object_53"
              geometry={nodes.Object_53.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Wheel_RL_19" position={[0.471, 0.15, -0.628]}>
            <mesh
              name="Object_55"
              geometry={nodes.Object_55.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_56"
              geometry={nodes.Object_56.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group
            name="rim001_20"
            position={[0.567, 0.15, -0.628]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.4}
          >
            <mesh
              name="Object_58"
              geometry={nodes.Object_58.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group
            name="Wheel_FR_21"
            position={[-0.468, 0.149, 0.603]}
            rotation={[-0.143, 0, 0]}
          >
            <mesh
              name="Object_60"
              geometry={nodes.Object_60.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_61"
              geometry={nodes.Object_61.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group
            name="rim002_22"
            position={[-0.564, 0.149, 0.603]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.4}
          >
            <mesh
              name="Object_63"
              geometry={nodes.Object_63.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Wheel_RR_23" position={[-0.468, 0.15, -0.628]}>
            <mesh
              name="Object_65"
              geometry={nodes.Object_65.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_66"
              geometry={nodes.Object_66.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group
            name="rim003_24"
            position={[-0.564, 0.15, -0.628]}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.4}
          >
            <mesh
              name="Object_68"
              geometry={nodes.Object_68.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="TurnSignal_FL_25" position={[0.537, 0.31, 0.864]}>
            <mesh
              name="Object_70"
              geometry={nodes.Object_70.geometry}
              material={materials.BodyEmission}
            />
            <mesh
              name="Object_71"
              geometry={nodes.Object_71.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Headlights_FL_26" position={[0.367, 0.31, 0.905]}>
            <mesh
              name="Object_73"
              geometry={nodes.Object_73.geometry}
              material={materials.BodyEmission}
            />
            <mesh
              name="Object_74"
              geometry={nodes.Object_74.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Arm_FL_27" position={[0.221, 0.155, 0.601]}>
            <mesh
              name="Object_76"
              geometry={nodes.Object_76.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Axle_RL_28" position={[0, 0.15, -0.628]}>
            <mesh
              name="Object_78"
              geometry={nodes.Object_78.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Lights_RL_29" position={[0.413, 0.276, -1.055]}>
            <mesh
              name="Object_80"
              geometry={nodes.Object_80.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_81"
              geometry={nodes.Object_81.geometry}
              material={materials.BodyEmission}
            />
          </group>
          <group name="Doors_FR_30" position={[-0.575, 0.257, 0.371]}>
            <mesh
              name="Object_83"
              geometry={nodes.Object_83.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_84"
              geometry={nodes.Object_84.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_85"
              geometry={nodes.Object_85.geometry}
              material={materials.BodyGlass}
            />
          </group>
          <group name="Doors_RR_31" position={[-0.582, 0.251, -0.098]}>
            <mesh
              name="Object_87"
              geometry={nodes.Object_87.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_88"
              geometry={nodes.Object_88.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_89"
              geometry={nodes.Object_89.geometry}
              material={materials.BodyGlass}
            />
          </group>
          <group name="Fender_FR_32" position={[-0.559, 0.315, 0.569]}>
            <mesh
              name="Object_91"
              geometry={nodes.Object_91.geometry}
              material={materials.BodyGlossy}
            />
            <mesh
              name="Object_92"
              geometry={nodes.Object_92.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Headlights_FR_33" position={[-0.367, 0.31, 0.905]}>
            <mesh
              name="Object_94"
              geometry={nodes.Object_94.geometry}
              material={materials.BodyEmission}
            />
            <mesh
              name="Object_95"
              geometry={nodes.Object_95.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="TurnSignal_FR_34" position={[-0.536, 0.31, 0.862]}>
            <mesh
              name="Object_97"
              geometry={nodes.Object_97.geometry}
              material={materials.BodyEmission}
            />
            <mesh
              name="Object_98"
              geometry={nodes.Object_98.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Lights_RR_35" position={[-0.412, 0.276, -1.055]}>
            <mesh
              name="Object_100"
              geometry={nodes.Object_100.geometry}
              material={materials.BodyMatte}
            />
            <mesh
              name="Object_101"
              geometry={nodes.Object_101.geometry}
              material={materials.BodyEmission}
            />
          </group>
          <group name="Axle_RR_36" position={[0, 0.15, -0.628]}>
            <mesh
              name="Object_103"
              geometry={nodes.Object_103.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Arm_FR_37" position={[-0.221, 0.155, 0.601]}>
            <mesh
              name="Object_105"
              geometry={nodes.Object_105.geometry}
              material={materials.BodyMatte}
            />
          </group>
          <group name="Fan_38" position={[0.002, 0.212, 0.849]}>
            <mesh
              name="Object_107"
              geometry={nodes.Object_107.geometry}
              material={materials.BodyMatte}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/carOptimised.glb");
