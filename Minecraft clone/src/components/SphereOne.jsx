import React from 'react';
import { useSphere } from '@react-three/cannon';

const SphereOne = () => {
  const [ref] = useSphere(() => ({
    mass: 1,
    position: [5, 8, -5]
  }))

  return (
    <mesh ref={ref}>
      <sphereGeometry radius={1} widthSegments={32} heightSegments={16} />
      <meshBasicMaterial color={'yellow'} />
    </mesh>
  )
}

export default SphereOne