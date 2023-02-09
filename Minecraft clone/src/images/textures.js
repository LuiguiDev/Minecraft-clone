import { 
  grassImg,
  dirtImg,
  glassImg,
  logImg,
  woodImg
 } from './images';
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

/* const TextureLoader = new TextureLoader();
const textures = [
  {name: 'groundTexture', src: grassImg},
  {name: 'dirtTexture', src: dirtImg},
  {name: 'glassTexture', src: glassImg},
  {name: 'logTexture', src: logImg},
  {name: 'woodTexture', src: woodImg},
  {name: 'grassTexture', src: grassImg}
];
const loadedTextures = []

textures.forEach(({ name, src }) => {
  const textureLoaded = TextureLoader.load(src);
  textureLoaded.magFilter = NearestFilter;
  loadedTextures[name] = textureLoaded;
})
 */

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const grassTexture = new TextureLoader().load(grassImg);

// How the texture gets mapped horizontally (wrapS) & vertically (wrapT)
groundTexture.wrapS = RepeatWrapping;
groundTexture. wrapT = RepeatWrapping;

// Remove the blur when the image is resized
groundTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;


export { 
  groundTexture,
  dirtTexture,
  glassTexture,
  logTexture,
  woodTexture,
  grassTexture
}