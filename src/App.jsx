import { Canvas } from "@react-three/fiber";
import styles from "./app.module.scss";
import Experience from "../components/Experience/Experience";

function App() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
