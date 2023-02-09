import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export const Player = () => {
  const actions = useKeyboard()
  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 0, 0]
  }))

  const pos = useRef([0, 0, 0]); // Initial position, just to assing the type data
  const vel = useRef([0, 0, 0]); // Initial velocity

  // useRef save the value between rendering, load the reference and unlike useState it doesn't re-render the component saving resources 
  useEffect(() => {
    api.position.subscribe(p => {
      pos.current = p; 
    })
  }, [api.position]);
  useEffect(() => {
    api.velocity.subscribe(v => {
      vel.current = v;
    })
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3( // vector 3 need 3 positions
        pos.current[0], // x
        pos.current[1], // y
        pos.current[2]  //z
      )
    )
    api.velocity.set(0, 0, 0)
  })

  return (
    <mesh ref={ref} />
  )
}