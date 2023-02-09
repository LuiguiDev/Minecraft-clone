import { useEffect, useState } from "react"

// custom hook
const KEYBOARD_MAP = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event;
      const action = KEYBOARD_MAP[code]

      if(action) { // Only if the key is on dictionary
        setActions(prevActions => ({
          // The rest of actions stay false while action turns true
          ...prevActions,
          [action]: true
        })) 
      }
    };
    const handleKeyUp = event => {
      const { code } = event;
      const action = KEYBOARD_MAP[code]

      if(action) { // Only if the key is on dictionary
        setActions(prevActions => ({
          // Return default status (false) when the key is released
          ...prevActions,
          [action]: false
        })) 
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp)
    };
  }, [])
  
  return actions
}