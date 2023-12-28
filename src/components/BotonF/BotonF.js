import { Howl } from 'howler';

const sound = new Howl({
  src: ['../../../src/audio/acordeF.mp3'],
  volume: 0.5
});

export const handleClick = () => {
  sound.play();
};