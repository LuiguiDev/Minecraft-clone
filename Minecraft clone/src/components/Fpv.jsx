import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Fpv() {
  const { camera, gl } = useThree(); // Obtain camera reference and DOM element where its being rendered (gl)

  return (
    <PointerLockControls 
      args={[camera, gl.domElement]} // Element that allows control the camara
    />
  )
}