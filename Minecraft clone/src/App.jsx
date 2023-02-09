import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Fpv } from './components/Fpv';
import { Player } from './components/Player';
import SphereOne from './components/SphereOne';

function App() {

  return (
    <Canvas>
      <Sky sunPosition={[0, 10, 50]}/>
      <ambientLight intensity={0.5}/>
      <Fpv />
      <Physics>
        <SphereOne />
        <Player />
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App