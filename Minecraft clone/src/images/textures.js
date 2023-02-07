import { grassImg } from './images';
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const groundTexture = new TextureLoader().load(grassImg)

// How the texture gets mapped horizontally (wrapS) & vertically (wrapT)
groundTexture.wrapS = RepeatWrapping;
groundTexture. wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter; // Remove the blur when the image is resized

export { groundTexture }