import { Canvas } from "@react-three/fiber";
import styles from "./app.module.scss";
import Experience from "../components/Experience/Experience";
import { KeyboardControls } from "@react-three/drei";
import { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space"] },
];

function App() {
  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          style={{
            touchAction: "none",
          }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
